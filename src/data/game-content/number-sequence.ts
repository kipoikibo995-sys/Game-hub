export const numberSequenceHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Sequence</title>
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
        .number-btn {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 900;
            border: 4px solid #1a1a1a;
            background: #fff;
            cursor: pointer;
            transition: all 0.1s;
            user-select: none;
        }
        .number-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px #1a1a1a;
        }
        .number-btn.correct {
            background: #00ff00;
            color: #1a1a1a;
            pointer-events: none;
        }
        .number-btn.wrong {
            background: #ff4444;
            color: white;
        }
        #game-board {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="brutalist-card p-8 max-w-md w-full">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-black uppercase tracking-tighter">Sequence</h1>
            <div id="timer" class="text-xl font-bold bg-yellow-300 px-3 py-1 border-2 border-black">0.00s</div>
        </div>
        
        <div id="game-board" class="bg-gray-100 border-4 border-black mb-6"></div>
        
        <div class="flex justify-between items-center">
            <div id="next-num" class="text-lg font-bold">Next: <span class="bg-blue-400 px-2 border-2 border-black">1</span></div>
            <button id="restart-btn" class="bg-black text-white px-4 py-2 font-bold uppercase hover:bg-gray-800 transition-colors">Restart</button>
        </div>
    </div>

    <div id="win-modal" class="fixed inset-0 bg-black bg-opacity-80 hidden flex items-center justify-center p-4 z-50">
        <div class="brutalist-card p-8 bg-white max-w-sm w-full text-center">
            <h2 class="text-4xl font-black uppercase mb-4">Complete!</h2>
            <p class="text-xl mb-6">Time: <span id="final-time" class="font-bold underline"></span></p>
            <button id="challenge-btn" class="w-full bg-blue-500 text-white py-4 font-black uppercase text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all mb-4">
                Challenge Others
            </button>
            <button id="close-modal" class="w-full bg-black text-white py-2 font-bold uppercase">Play Again</button>
        </div>
    </div>

    <script>
        const board = document.getElementById('game-board');
        const timerDisplay = document.getElementById('timer');
        const nextNumDisplay = document.querySelector('#next-num span');
        const restartBtn = document.getElementById('restart-btn');
        const winModal = document.getElementById('win-modal');
        const finalTimeDisplay = document.getElementById('final-time');
        const closeModalBtn = document.getElementById('close-modal');
        const challengeBtn = document.getElementById('challenge-btn');

        let nextNum = 1;
        let startTime = null;
        let timerInterval = null;
        let isGameActive = false;
        const totalNumbers = 25;

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function initGame() {
            board.innerHTML = '';
            nextNum = 1;
            nextNumDisplay.textContent = nextNum;
            isGameActive = false;
            clearInterval(timerInterval);
            timerDisplay.textContent = '0.00s';
            
            const numbers = Array.from({length: totalNumbers}, (_, i) => i + 1);
            shuffle(numbers);

            numbers.forEach(num => {
                const btn = document.createElement('div');
                btn.className = 'number-btn';
                btn.textContent = num;
                btn.onclick = () => handleNumClick(num, btn);
                board.appendChild(btn);
            });
        }

        function handleNumClick(num, btn) {
            if (!isGameActive && nextNum === 1) {
                isGameActive = true;
                startTime = Date.now();
                timerInterval = setInterval(updateTimer, 10);
            }

            if (!isGameActive) return;

            if (num === nextNum) {
                btn.classList.add('correct');
                nextNum++;
                if (nextNum > totalNumbers) {
                    winGame();
                } else {
                    nextNumDisplay.textContent = nextNum;
                }
            } else {
                btn.classList.add('wrong');
                setTimeout(() => btn.classList.remove('wrong'), 200);
            }
        }

        function updateTimer() {
            const elapsed = (Date.now() - startTime) / 1000;
            timerDisplay.textContent = elapsed.toFixed(2) + 's';
        }

        function winGame() {
            isGameActive = false;
            clearInterval(timerInterval);
            const finalTime = timerDisplay.textContent;
            finalTimeDisplay.textContent = finalTime;
            winModal.classList.remove('hidden');
        }

        function challenge() {
            const score = timerDisplay.textContent;
            window.parent.postMessage({
                type: 'GAME_OVER',
                score: score,
                gameId: 'number-sequence'
            }, '*');
        }

        restartBtn.onclick = initGame;
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
