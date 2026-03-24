export const tileConnectHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tile Connect</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Space Grotesk', sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            overflow: hidden;
        }
        .brutalist-card {
            background: white;
            border: 4px solid #1a1a1a;
            box-shadow: 8px 8px 0px 0px #1a1a1a;
        }
        #game-board {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 5px;
            padding: 10px;
            background: #e5e7eb;
            border: 4px solid #1a1a1a;
        }
        .tile {
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 900;
            border: 2px solid #1a1a1a;
            background: #fff;
            cursor: pointer;
            transition: all 0.1s;
            user-select: none;
            box-shadow: 2px 2px 0px 0px #1a1a1a;
        }
        .tile:hover {
            transform: translate(-1px, -1px);
            box-shadow: 3px 3px 0px 0px #1a1a1a;
        }
        .tile.selected {
            background: #00ff00;
            transform: scale(1.1);
            z-index: 10;
        }
        .tile.empty {
            visibility: hidden;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div class="brutalist-card p-6 max-w-lg w-full">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-black uppercase tracking-tighter">Tile Connect</h1>
            <div id="score" class="text-lg font-bold bg-wf-blue px-3 py-1 border-2 border-black">Score: 0</div>
        </div>
        
        <div id="game-board" class="mb-4"></div>
        
        <div class="flex justify-between items-center">
            <div id="timer" class="text-lg font-bold">Time: <span class="bg-wf-gold px-2 border-2 border-black">60s</span></div>
            <button id="shuffle-btn" class="bg-black text-white px-4 py-2 font-bold uppercase hover:bg-gray-800 transition-colors">Shuffle</button>
        </div>
    </div>

    <div id="win-modal" class="fixed inset-0 bg-black bg-opacity-80 hidden flex items-center justify-center p-4 z-50">
        <div class="brutalist-card p-8 bg-white max-w-sm w-full text-center">
            <h2 class="text-4xl font-black uppercase mb-4">Game Over!</h2>
            <p class="text-xl mb-6">Score: <span id="final-score" class="font-bold underline"></span></p>
            <button id="challenge-btn" class="w-full bg-blue-500 text-white py-4 font-black uppercase text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] hover:translate-y-1 hover:shadow-none transition-all mb-4">
                Challenge Others
            </button>
            <button id="close-modal" class="w-full bg-black text-white py-2 font-bold uppercase">Play Again</button>
        </div>
    </div>

    <script>
        const board = document.getElementById('game-board');
        const scoreDisplay = document.getElementById('score');
        const timerDisplay = document.querySelector('#timer span');
        const shuffleBtn = document.getElementById('shuffle-btn');
        const winModal = document.getElementById('win-modal');
        const finalScoreDisplay = document.getElementById('final-score');
        const closeModalBtn = document.getElementById('close-modal');
        const challengeBtn = document.getElementById('challenge-btn');

        const rows = 6;
        const cols = 8;
        const icons = ['🍎', '🍌', '🍇', '🍒', '🍓', '🍍', '🥝', '🍉', '🥑', '🥥', '🥭', '🍑'];
        let grid = [];
        let selected = null;
        let score = 0;
        let timeLeft = 60;
        let timerInterval = null;

        function initGame() {
            score = 0;
            timeLeft = 60;
            scoreDisplay.textContent = 'Score: 0';
            timerDisplay.textContent = '60s';
            clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 1000);
            
            const totalTiles = rows * cols;
            const pairs = totalTiles / 2;
            let tempIcons = [];
            for (let i = 0; i < pairs; i++) {
                const icon = icons[i % icons.length];
                tempIcons.push(icon, icon);
            }
            
            // Shuffle icons
            for (let i = tempIcons.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [tempIcons[i], tempIcons[j]] = [tempIcons[j], tempIcons[i]];
            }
            
            grid = [];
            for (let r = 0; r < rows; r++) {
                grid[r] = [];
                for (let c = 0; c < cols; c++) {
                    grid[r][c] = tempIcons.pop();
                }
            }
            
            renderBoard();
        }

        function renderBoard() {
            board.innerHTML = '';
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const div = document.createElement('div');
                    div.className = 'tile' + (grid[r][c] === null ? ' empty' : '');
                    div.textContent = grid[r][c] || '';
                    if (grid[r][c] !== null) {
                        div.onclick = () => handleTileClick(r, c, div);
                        if (selected && selected.r === r && selected.c === c) {
                            div.classList.add('selected');
                        }
                    }
                    board.appendChild(div);
                }
            }
        }

        function handleTileClick(r, c, div) {
            if (selected) {
                if (selected.r === r && selected.c === c) {
                    selected = null;
                    renderBoard();
                    return;
                }
                
                if (grid[selected.r][selected.c] === grid[r][c] && canConnect(selected.r, selected.c, r, c)) {
                    grid[selected.r][selected.c] = null;
                    grid[r][c] = null;
                    score += 10;
                    scoreDisplay.textContent = 'Score: ' + score;
                    selected = null;
                    renderBoard();
                    checkWin();
                } else {
                    selected = { r, c };
                    renderBoard();
                }
            } else {
                selected = { r, c };
                renderBoard();
            }
        }

        function canConnect(r1, c1, r2, c2) {
            // Simple check for adjacency for now (Onet logic is complex, this is a simplified version)
            // In a real Onet, we'd check for paths with max 2 turns.
            // For this version, let's allow any matching pair to be connected if they are adjacent or in same row/col with clear path.
            
            if (r1 === r2) {
                const minC = Math.min(c1, c2);
                const maxC = Math.max(c1, c2);
                let clear = true;
                for (let c = minC + 1; c < maxC; c++) {
                    if (grid[r1][c] !== null) clear = false;
                }
                if (clear) return true;
            }
            
            if (c1 === c2) {
                const minR = Math.min(r1, r2);
                const maxR = Math.max(r1, r2);
                let clear = true;
                for (let r = minR + 1; r < maxR; r++) {
                    if (grid[r][c1] !== null) clear = false;
                }
                if (clear) return true;
            }

            // Check for 1-turn path
            if (grid[r1][c2] === null && canConnect(r1, c1, r1, c2) && canConnect(r1, c2, r2, c2)) return true;
            if (grid[r2][c1] === null && canConnect(r1, c1, r2, c1) && canConnect(r2, c1, r2, c2)) return true;

            return false;
        }

        function updateTimer() {
            timeLeft--;
            timerDisplay.textContent = timeLeft + 's';
            if (timeLeft <= 0) {
                endGame();
            }
        }

        function checkWin() {
            const allEmpty = grid.every(row => row.every(cell => cell === null));
            if (allEmpty) {
                endGame();
            }
        }

        function endGame() {
            clearInterval(timerInterval);
            finalScoreDisplay.textContent = score;
            winModal.classList.remove('hidden');
        }

        function shuffleBoard() {
            let tempIcons = [];
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (grid[r][c] !== null) tempIcons.push(grid[r][c]);
                }
            }
            
            for (let i = tempIcons.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [tempIcons[i], tempIcons[j]] = [tempIcons[j], tempIcons[i]];
            }
            
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (grid[r][c] !== null) grid[r][c] = tempIcons.pop();
                }
            }
            renderBoard();
        }

        function challenge() {
            const scoreVal = score;
            window.parent.postMessage({
                type: 'GAME_OVER',
                score: scoreVal,
                gameId: 'tile-connect'
            }, '*');
        }

        shuffleBtn.onclick = shuffleBoard;
        closeModalBtn.onclick = () => {
            winModal.classList.add('hidden');
            initGame();
        };
        challengeBtn.onclick = challenge;

        initGame();
    </script>
</body>
</html>
`;
