export const wordSearchHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Search</title>
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
            grid-template-columns: repeat(10, 1fr);
            gap: 2px;
            padding: 10px;
            background: #1a1a1a;
            border: 4px solid #1a1a1a;
        }
        .letter {
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 900;
            background: #fff;
            cursor: pointer;
            transition: all 0.1s;
            user-select: none;
            text-transform: uppercase;
        }
        .letter.selected {
            background: #00ff00;
        }
        .letter.found {
            background: #00ff00;
            color: #1a1a1a;
        }
        .word-list-item {
            font-weight: 700;
            text-transform: uppercase;
            padding: 2px 8px;
            border: 2px solid #1a1a1a;
            margin: 2px;
            display: inline-block;
        }
        .word-list-item.found {
            text-decoration: line-through;
            background: #e5e7eb;
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="brutalist-card p-6 max-w-lg w-full">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-black uppercase tracking-tighter">Word Search</h1>
            <div id="timer" class="text-lg font-bold bg-wf-blue px-3 py-1 border-2 border-black">0:00</div>
        </div>
        
        <div id="game-board" class="mb-6"></div>
        
        <div id="word-list" class="flex flex-wrap justify-center mb-6"></div>
        
        <div class="flex justify-center">
            <button id="restart-btn" class="bg-black text-white px-6 py-2 font-bold uppercase hover:bg-gray-800 transition-colors">New Game</button>
        </div>
    </div>

    <div id="win-modal" class="fixed inset-0 bg-black bg-opacity-80 hidden flex items-center justify-center p-4 z-50">
        <div class="brutalist-card p-8 bg-white max-w-sm w-full text-center">
            <h2 class="text-4xl font-black uppercase mb-4">Found All!</h2>
            <p class="text-xl mb-6">Time: <span id="final-time" class="font-bold underline"></span></p>
            <button id="challenge-btn" class="w-full bg-blue-500 text-white py-4 font-black uppercase text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] hover:translate-y-1 hover:shadow-none transition-all mb-4">
                Challenge Others
            </button>
            <button id="close-modal" class="w-full bg-black text-white py-2 font-bold uppercase">Play Again</button>
        </div>
    </div>

    <script>
        const board = document.getElementById('game-board');
        const wordListContainer = document.getElementById('word-list');
        const timerDisplay = document.getElementById('timer');
        const restartBtn = document.getElementById('restart-btn');
        const winModal = document.getElementById('win-modal');
        const finalTimeDisplay = document.getElementById('final-time');
        const closeModalBtn = document.getElementById('close-modal');
        const challengeBtn = document.getElementById('challenge-btn');

        const size = 10;
        const wordsToFind = ['BRUTAL', 'DESIGN', 'RETRO', 'PUZZLE', 'GAME', 'PIXEL', 'GRID', 'LOGIC'];
        let grid = [];
        let foundWords = [];
        let selectedLetters = [];
        let startTime = null;
        let timerInterval = null;

        function initGame() {
            grid = Array.from({length: size}, () => Array(size).fill(''));
            foundWords = [];
            selectedLetters = [];
            startTime = Date.now();
            clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 1000);
            
            placeWords();
            fillEmpty();
            renderBoard();
            renderWordList();
        }

        function placeWords() {
            wordsToFind.forEach(word => {
                let placed = false;
                while (!placed) {
                    const direction = Math.floor(Math.random() * 2); // 0: horizontal, 1: vertical
                    const row = Math.floor(Math.random() * size);
                    const col = Math.floor(Math.random() * size);
                    
                    if (canPlace(word, row, col, direction)) {
                        for (let i = 0; i < word.length; i++) {
                            if (direction === 0) grid[row][col + i] = word[i];
                            else grid[row + i][col] = word[i];
                        }
                        placed = true;
                    }
                }
            });
        }

        function canPlace(word, row, col, direction) {
            if (direction === 0 && col + word.length > size) return false;
            if (direction === 1 && row + word.length > size) return false;
            
            for (let i = 0; i < word.length; i++) {
                const r = direction === 0 ? row : row + i;
                const c = direction === 0 ? col + i : col;
                if (grid[r][c] !== '' && grid[r][c] !== word[i]) return false;
            }
            return true;
        }

        function fillEmpty() {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    if (grid[r][c] === '') {
                        grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
                    }
                }
            }
        }

        function renderBoard() {
            board.innerHTML = '';
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    const div = document.createElement('div');
                    div.className = 'letter';
                    div.textContent = grid[r][c];
                    div.dataset.r = r;
                    div.dataset.c = c;
                    div.onmousedown = () => startSelection(r, c, div);
                    div.onmouseenter = () => updateSelection(r, c, div);
                    div.onmouseup = endSelection;
                    board.appendChild(div);
                }
            }
        }

        function renderWordList() {
            wordListContainer.innerHTML = '';
            wordsToFind.forEach(word => {
                const span = document.createElement('span');
                span.className = 'word-list-item' + (foundWords.includes(word) ? ' found' : '');
                span.textContent = word;
                span.id = 'word-' + word;
                wordListContainer.appendChild(span);
            });
        }

        let isSelecting = false;
        let startPos = null;

        function startSelection(r, c, div) {
            isSelecting = true;
            startPos = { r, c };
            selectedLetters = [{ r, c }];
            highlightSelection();
        }

        function updateSelection(r, c, div) {
            if (!isSelecting) return;
            
            // Only allow horizontal or vertical selection
            if (r === startPos.r || c === startPos.c) {
                selectedLetters = [];
                const minR = Math.min(r, startPos.r);
                const maxR = Math.max(r, startPos.r);
                const minC = Math.min(c, startPos.c);
                const maxC = Math.max(c, startPos.c);
                
                for (let i = minR; i <= maxR; i++) {
                    for (let j = minC; j <= maxC; j++) {
                        selectedLetters.push({ r: i, c: j });
                    }
                }
                highlightSelection();
            }
        }

        function highlightSelection() {
            const allLetters = document.querySelectorAll('.letter');
            allLetters.forEach(l => l.classList.remove('selected'));
            selectedLetters.forEach(pos => {
                const el = document.querySelector(\`.letter[data-r="\${pos.r}"][data-c="\${pos.c}"]\`);
                if (el) el.classList.add('selected');
            });
        }

        function endSelection() {
            if (!isSelecting) return;
            isSelecting = false;
            
            const selectedWord = selectedLetters.map(pos => grid[pos.r][pos.c]).join('');
            const reversedWord = selectedWord.split('').reverse().join('');
            
            if (wordsToFind.includes(selectedWord) && !foundWords.includes(selectedWord)) {
                foundWords.push(selectedWord);
                markAsFound(selectedLetters);
            } else if (wordsToFind.includes(reversedWord) && !foundWords.includes(reversedWord)) {
                foundWords.push(reversedWord);
                markAsFound(selectedLetters);
            }
            
            selectedLetters = [];
            highlightSelection();
            renderWordList();
            checkWin();
        }

        function markAsFound(positions) {
            positions.forEach(pos => {
                const el = document.querySelector(\`.letter[data-r="\${pos.r}"][data-c="\${pos.c}"]\`);
                if (el) el.classList.add('found');
            });
        }

        function updateTimer() {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const mins = Math.floor(elapsed / 60);
            const secs = elapsed % 60;
            timerDisplay.textContent = \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
        }

        function checkWin() {
            if (foundWords.length === wordsToFind.length) {
                clearInterval(timerInterval);
                finalTimeDisplay.textContent = timerDisplay.textContent;
                winModal.classList.remove('hidden');
            }
        }

        function challenge() {
            const score = timerDisplay.textContent;
            window.parent.postMessage({
                type: 'GAME_OVER',
                score: score,
                gameId: 'word-search'
            }, '*');
        }

        restartBtn.onclick = initGame;
        closeModalBtn.onclick = () => {
            winModal.classList.add('hidden');
            initGame();
        };
        challengeBtn.onclick = challenge;

        document.onmouseup = endSelection;

        initGame();
    </script>
</body>
</html>
`;
