export const slidingPuzzleHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sliding Puzzle</title>
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
        .puzzle-board {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            padding: 20px;
            background: #e5e7eb;
            border: 4px solid #1a1a1a;
        }
        .tile {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 900;
            border: 4px solid #1a1a1a;
            background: #fff;
            cursor: pointer;
            transition: all 0.2s;
            user-select: none;
            box-shadow: 4px 4px 0px 0px #1a1a1a;
        }
        .tile:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px #1a1a1a;
        }
        .tile.empty {
            background: transparent;
            border: 4px dashed #9ca3af;
            box-shadow: none;
            cursor: default;
        }
        .tile.empty:hover {
            transform: none;
            box-shadow: none;
        }
    </style>
</head>
<body>
    <div class="brutalist-card p-8 max-w-md w-full">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-black uppercase tracking-tighter">Sliding</h1>
            <div id="moves" class="text-xl font-bold bg-wf-blue px-3 py-1 border-2 border-black">Moves: 0</div>
        </div>
        
        <div id="puzzle-board" class="puzzle-board mb-6"></div>
        
        <div class="flex justify-between items-center">
            <div id="timer" class="text-lg font-bold">Time: <span class="bg-wf-gold px-2 border-2 border-black">0s</span></div>
            <button id="shuffle-btn" class="bg-black text-white px-4 py-2 font-bold uppercase hover:bg-gray-800 transition-colors">Shuffle</button>
        </div>
    </div>

    <div id="win-modal" class="fixed inset-0 bg-black bg-opacity-80 hidden flex items-center justify-center p-4 z-50">
        <div class="brutalist-card p-8 bg-white max-w-sm w-full text-center">
            <h2 class="text-4xl font-black uppercase mb-4">Solved!</h2>
            <p class="text-xl mb-6">Moves: <span id="final-moves" class="font-bold underline"></span></p>
            <button id="challenge-btn" class="w-full bg-blue-500 text-white py-4 font-black uppercase text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] hover:translate-y-1 hover:shadow-none transition-all mb-4">
                Challenge Others
            </button>
            <button id="close-modal" class="w-full bg-black text-white py-2 font-bold uppercase">Play Again</button>
        </div>
    </div>

    <script>
        const board = document.getElementById('puzzle-board');
        const movesDisplay = document.getElementById('moves');
        const timerDisplay = document.querySelector('#timer span');
        const shuffleBtn = document.getElementById('shuffle-btn');
        const winModal = document.getElementById('win-modal');
        const finalMovesDisplay = document.getElementById('final-moves');
        const closeModalBtn = document.getElementById('close-modal');
        const challengeBtn = document.getElementById('challenge-btn');

        let tiles = [];
        let moves = 0;
        let startTime = null;
        let timerInterval = null;
        let isGameActive = false;
        const size = 4;

        function initGame() {
            tiles = Array.from({length: size * size - 1}, (_, i) => i + 1);
            tiles.push(null); // Empty tile
            moves = 0;
            movesDisplay.textContent = 'Moves: 0';
            isGameActive = false;
            clearInterval(timerInterval);
            timerDisplay.textContent = '0s';
            renderBoard();
        }

        function renderBoard() {
            board.innerHTML = '';
            tiles.forEach((tile, index) => {
                const div = document.createElement('div');
                div.className = 'tile' + (tile === null ? ' empty' : '');
                div.textContent = tile || '';
                if (tile !== null) {
                    div.onclick = () => moveTile(index);
                }
                board.appendChild(div);
            });
        }

        function moveTile(index) {
            const emptyIndex = tiles.indexOf(null);
            const row = Math.floor(index / size);
            const col = index % size;
            const emptyRow = Math.floor(emptyIndex / size);
            const emptyCol = emptyIndex % size;

            const isAdjacent = (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
                              (Math.abs(col - emptyCol) === 1 && row === emptyRow);

            if (isAdjacent) {
                if (!isGameActive) {
                    isGameActive = true;
                    startTime = Date.now();
                    timerInterval = setInterval(updateTimer, 1000);
                }
                
                [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
                moves++;
                movesDisplay.textContent = 'Moves: ' + moves;
                renderBoard();
                checkWin();
            }
        }

        function updateTimer() {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            timerDisplay.textContent = elapsed + 's';
        }

        function checkWin() {
            const isWin = tiles.slice(0, -1).every((tile, i) => tile === i + 1);
            if (isWin && tiles[tiles.length - 1] === null) {
                isGameActive = false;
                clearInterval(timerInterval);
                finalMovesDisplay.textContent = moves;
                winModal.classList.remove('hidden');
            }
        }

        function shuffleTiles() {
            // Shuffle by making random valid moves to ensure solvability
            initGame();
            let currentEmpty = tiles.indexOf(null);
            for (let i = 0; i < 200; i++) {
                const adjacents = [];
                const row = Math.floor(currentEmpty / size);
                const col = currentEmpty % size;

                if (row > 0) adjacents.push(currentEmpty - size);
                if (row < size - 1) adjacents.push(currentEmpty + size);
                if (col > 0) adjacents.push(currentEmpty - 1);
                if (col < size - 1) adjacents.push(currentEmpty + 1);

                const nextMove = adjacents[Math.floor(Math.random() * adjacents.length)];
                [tiles[currentEmpty], tiles[nextMove]] = [tiles[nextMove], tiles[currentEmpty]];
                currentEmpty = nextMove;
            }
            moves = 0;
            movesDisplay.textContent = 'Moves: 0';
            renderBoard();
        }

        function challenge() {
            const score = moves;
            window.parent.postMessage({
                type: 'GAME_OVER',
                score: score,
                gameId: 'sliding-puzzle'
            }, '*');
        }

        shuffleBtn.onclick = shuffleTiles;
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
