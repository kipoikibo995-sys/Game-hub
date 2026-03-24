export const ticTacToeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe - Brutalist Game Hub</title>
    
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Poppins -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800;900&display=swap" rel="stylesheet">

    <style>
        :root {
            --wf-dark: #000000;        
            --wf-gold: #FFE600;        
            --wf-orange: #FF2E93;      
            --wf-cream: #F0F4F8;       
            --wf-white: #ffffff;
            --wf-green: #00FF66;
            --wf-red: #FF2A2A;
            --wf-blue: #00E5FF;
            --wf-purple: #B000FF;
            --wf-brown: #c7b198;
            --bg-color: var(--wf-cream);
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.05) 2px, transparent 2px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.05) 2px, transparent 2px);
            background-size: 40px 40px;
            color: var(--wf-dark);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 40px 20px;
            box-sizing: border-box;
            overflow-x: hidden;
            transition: background-color 0.3s;
        }

        * {
            box-sizing: border-box;
            outline: none;
            user-select: none;
        }

        h1 {
            margin-top: 10px;
            margin-bottom: 10px;
            color: var(--wf-dark);
            font-size: clamp(2.5rem, 6vw, 3.5rem);
            font-weight: 900;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: -2px;
            text-shadow: 3px 3px 0px #fff;
            line-height: 1.15;
        }

        .highlight {
            position: relative;
            display: inline-block;
            color: var(--wf-blue);
            font-weight: 900;
            -webkit-text-stroke: 1px var(--wf-dark);
        }

        .highlight::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: -5px;
            right: -5px;
            height: 18px;
            background-color: var(--wf-gold);
            z-index: -1;
            transform: skew(-10deg);
            border: 2px solid var(--wf-dark);
        }

        .subtitle {
            margin-bottom: 30px;
            font-size: 1.1rem;
            font-weight: 800;
            text-align: center;
            background: var(--wf-white);
            border: 3px solid var(--wf-dark);
            padding: 8px 20px;
            box-shadow: 5px 5px 0px 0px var(--wf-dark);
            color: var(--wf-dark);
            text-transform: uppercase;
            transform: rotate(-1deg);
        }

        /* LAYOUT */
        .container {
            display: flex;
            gap: 30px;
            width: 100%;
            max-width: 1100px;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* SIDEBAR / CONTROLS */
        .sidebar {
            flex: 1;
            min-width: 300px;
            max-width: 350px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .card {
            background: var(--wf-white);
            border-radius: 12px;
            padding: 20px;
            border: 4px solid var(--wf-dark);
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
        }

        .card-title {
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 10px;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* THEME DOTS */
        .theme-dots {
            display: flex;
            gap: 15px;
            margin-top: 10px;
        }

        .dot {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid var(--wf-dark);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
            transition: transform 0.1s;
        }

        .dot:hover {
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
        }

        .dot.active {
            border: 4px solid var(--wf-white);
            outline: 4px solid var(--wf-dark);
            transform: scale(1.1);
        }

        .dot.cream { background: var(--wf-cream); }
        .dot.pink { background: #FF99C8; }
        .dot.blue { background: #A0C4FF; }
        .dot.green { background: #CAFFBF; }
        .dot.purple { background: #BDB2FF; }

        /* INPUTS & BUTTONS */
        select {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 3px solid var(--wf-dark);
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            font-size: 1rem;
            text-transform: uppercase;
            cursor: pointer;
            background: var(--wf-white);
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
            margin-bottom: 10px;
        }

        button.btn-primary {
            width: 100%;
            padding: 15px;
            border-radius: 8px;
            border: 4px solid var(--wf-dark);
            background: var(--wf-blue);
            color: var(--wf-dark);
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1.2rem;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            transition: all 0.1s;
        }

        button.btn-primary:hover {
            background: var(--wf-orange);
            color: var(--wf-white);
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px var(--wf-dark);
        }

        button.btn-primary:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
        }

        /* MAIN GAME AREA */
        .main-area {
            flex: 2;
            min-width: 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        #gameBox {
            width: 100%;
            max-width: 650px;
            background: var(--wf-white);
            border: 5px solid var(--wf-dark);
            box-shadow: 10px 10px 0px 0px var(--wf-dark);
            border-radius: 12px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .game-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 15px;
        }

        #resultMsg {
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase;
            text-align: center;
            min-height: 35px;
            padding: 8px 15px;
            border-radius: 6px;
            border: 3px solid transparent;
            flex: 1;
        }

        .score-display {
            font-size: 1.2rem;
            font-weight: 900;
            color: var(--wf-dark);
            background: var(--wf-gold);
            padding: 8px 15px;
            border: 3px solid var(--wf-dark);
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
            border-radius: 6px;
            white-space: nowrap;
        }

        /* TIC TAC TOE GRID */
        .ttt-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            width: 100%;
            max-width: 400px;
            margin: 20px 0;
        }

        .cell {
            aspect-ratio: 1 / 1;
            background: var(--wf-white);
            border: 5px solid var(--wf-dark);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: clamp(2rem, 10vw, 4rem);
            font-weight: 900;
            cursor: pointer;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            transition: all 0.1s;
        }

        .cell:hover:not(.taken) {
            background: var(--wf-cream);
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px var(--wf-dark);
        }

        .cell:active:not(.taken) {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
        }

        .cell.taken {
            cursor: default;
        }

        .cell.x { color: var(--wf-orange); }
        .cell.o { color: var(--wf-blue); }

        .cell.winning-cell {
            background: var(--wf-green);
            animation: pulse 0.5s infinite alternate;
        }

        @keyframes pulse {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
            .ttt-grid { gap: 10px; }
            .cell { border-width: 4px; }
        }
    </style>
</head>
<body>

    <h1>Tic-Tac-Toe <span class="highlight">Retro</span></h1>
    <div class="subtitle">Classic 3-in-a-row with a brutalist twist!</div>

    <div class="container">
        <!-- SIDEBAR CONTROLS -->
        <div class="sidebar">
            <div class="card">
                <div class="card-title"><i class="fa-solid fa-palette"></i> Theme Color</div>
                <div class="theme-dots">
                    <div class="dot cream active" onclick="setTheme('cream', this)"></div>
                    <div class="dot pink" onclick="setTheme('pink', this)"></div>
                    <div class="dot blue" onclick="setTheme('blue', this)"></div>
                    <div class="dot green" onclick="setTheme('green', this)"></div>
                    <div class="dot purple" onclick="setTheme('purple', this)"></div>
                </div>
            </div>

            <div class="card">
                <div class="card-title"><i class="fa-solid fa-robot"></i> Opponent</div>
                <select id="gameMode" style="margin-bottom: 15px;">
                    <option value="pvp">Player vs Player</option>
                    <option value="pve" selected>Player vs AI (Normal)</option>
                    <option value="pve-hard">Player vs AI (Impossible)</option>
                </select>
                <button id="startBtn" class="btn-primary" onclick="startGame()">
                    <i class="fa-solid fa-play"></i> Generate Game
                </button>
            </div>
        </div>

        <!-- MAIN GAME AREA -->
        <div class="main-area">
            <div id="gameBox">
                <div class="game-header">
                    <div id="resultMsg">PRESS GENERATE TO PLAY</div>
                    <div class="score-display">
                        TURN: <span id="turnDisplay">X</span>
                    </div>
                </div>

                <div class="ttt-grid" id="tttGrid">
                    <div class="cell" data-index="0" onclick="handleMove(0)"></div>
                    <div class="cell" data-index="1" onclick="handleMove(1)"></div>
                    <div class="cell" data-index="2" onclick="handleMove(2)"></div>
                    <div class="cell" data-index="3" onclick="handleMove(3)"></div>
                    <div class="cell" data-index="4" onclick="handleMove(4)"></div>
                    <div class="cell" data-index="5" onclick="handleMove(5)"></div>
                    <div class="cell" data-index="6" onclick="handleMove(6)"></div>
                    <div class="cell" data-index="7" onclick="handleMove(7)"></div>
                    <div class="cell" data-index="8" onclick="handleMove(8)"></div>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game State
        let board = Array(9).fill(null);
        let currentPlayer = 'X';
        let isGameOver = true;
        let gameMode = 'pve';

        // Theme Switcher
        function setTheme(theme, el) {
            const colors = {
                cream: 'var(--wf-cream)',
                pink: '#FF99C8',
                blue: '#A0C4FF',
                green: '#CAFFBF',
                purple: '#BDB2FF'
            };

            document.documentElement.style.setProperty('--bg-color', colors[theme]);
            document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
            el.classList.add("active");
        }

        function showMessage(text, bgColor, textColor = 'var(--wf-dark)') {
            const msgEl = document.getElementById('resultMsg');
            msgEl.innerText = text;
            msgEl.style.backgroundColor = bgColor;
            msgEl.style.color = textColor;
            if (bgColor !== 'transparent') {
                msgEl.style.border = '3px solid var(--wf-dark)';
            } else {
                msgEl.style.border = '3px solid transparent';
            }
        }

        // --- CORE LOGIC: GENERATE GAME ---
        function startGame() {
            board = Array(9).fill(null);
            currentPlayer = 'X';
            isGameOver = false;
            gameMode = document.getElementById('gameMode').value;
            
            document.getElementById('turnDisplay').innerText = currentPlayer;
            document.getElementById('turnDisplay').style.color = 'var(--wf-orange)';
            
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.innerText = '';
                cell.className = 'cell';
            });

            showMessage('❌ PLAYER X TURN', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function handleMove(index) {
            if (isGameOver || board[index]) return;

            makeMove(index, currentPlayer);

            if (!isGameOver && gameMode.startsWith('pve') && currentPlayer === 'O') {
                setTimeout(aiMove, 500);
            }
        }

        function makeMove(index, player) {
            board[index] = player;
            const cell = document.querySelector('.cell[data-index="' + index + '"]');
            cell.innerText = player;
            cell.classList.add('taken', player.toLowerCase());

            const win = checkWin(board, player);
            if (win) {
                endGame(player, win);
            } else if (board.every(cell => cell !== null)) {
                endGame('draw');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                document.getElementById('turnDisplay').innerText = currentPlayer;
                document.getElementById('turnDisplay').style.color = currentPlayer === 'X' ? 'var(--wf-orange)' : 'var(--wf-blue)';
                const icon = currentPlayer === 'X' ? '❌' : '⭕';
                showMessage(icon + ' PLAYER ' + currentPlayer + ' TURN', 'var(--wf-blue)');
            }
        }

        function checkWin(b, p) {
            const wins = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];
            return wins.find(combo => combo.every(idx => b[idx] === p));
        }

        function endGame(result, winCombo = null) {
            isGameOver = true;
            if (result === 'draw') {
                showMessage('🤝 IT\\'S A DRAW!', 'var(--wf-gold)');
            } else {
                showMessage('🎉 PLAYER ' + result + ' WINS!', 'var(--wf-green)');
                winCombo.forEach(idx => {
                    document.querySelector('.cell[data-index="' + idx + '"]').classList.add('winning-cell');
                });
            }
        }

        // AI Logic
        function aiMove() {
            if (isGameOver) return;

            let move;
            if (gameMode === 'pve-hard') {
                move = minimax(board, 'O').index;
            } else {
                // Normal AI: 50% chance of best move, 50% random
                if (Math.random() > 0.5) {
                    move = minimax(board, 'O').index;
                } else {
                    const available = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
                    move = available[Math.floor(Math.random() * available.length)];
                }
            }
            
            makeMove(move, 'O');
        }

        function minimax(newBoard, player) {
            const availSpots = newBoard.map((v, i) => v === null ? i : null).filter(v => v !== null);

            if (checkWin(newBoard, 'X')) return {score: -10};
            if (checkWin(newBoard, 'O')) return {score: 10};
            if (availSpots.length === 0) return {score: 0};

            const moves = [];
            for (let i = 0; i < availSpots.length; i++) {
                const move = {};
                move.index = availSpots[i];
                newBoard[availSpots[i]] = player;

                if (player === 'O') {
                    move.score = minimax(newBoard, 'X').score;
                } else {
                    move.score = minimax(newBoard, 'O').score;
                }

                newBoard[availSpots[i]] = null;
                moves.push(move);
            }

            let bestMove;
            if (player === 'O') {
                let bestScore = -10000;
                for (let i = 0; i < moves.length; i++) {
                    if (moves[i].score > bestScore) {
                        bestScore = moves[i].score;
                        bestMove = i;
                    }
                }
            } else {
                let bestScore = 10000;
                for (let i = 0; i < moves.length; i++) {
                    if (moves[i].score < bestScore) {
                        bestScore = moves[i].score;
                        bestMove = i;
                    }
                }
            }
            return moves[bestMove];
        }

        // Initialize empty board
        startGame();

    </script>
</body>
</html>`;
