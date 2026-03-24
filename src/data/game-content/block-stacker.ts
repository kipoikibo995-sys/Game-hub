export const blockStackerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Block Stacker - Brutalist Game Hub</title>
    
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

        /* TETRIS CANVAS */
        #canvasContainer {
            width: 100%;
            max-width: 300px;
            aspect-ratio: 1 / 2;
            background: var(--wf-dark);
            border: 5px solid var(--wf-dark);
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        /* MOBILE CONTROLS */
        .mobile-controls {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-top: 20px;
            width: 100%;
            max-width: 300px;
        }

        .control-btn {
            aspect-ratio: 1 / 1;
            background: var(--wf-white);
            border: 3px solid var(--wf-dark);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
            transition: all 0.1s;
        }

        .control-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 1px 1px 0px 0px var(--wf-dark);
        }

        .btn-rotate { grid-column: 2; }
        .btn-left { grid-column: 1; grid-row: 2; }
        .btn-down { grid-column: 2; grid-row: 2; }
        .btn-right { grid-column: 3; grid-row: 2; }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
        }
    </style>
</head>
<body>

    <h1>Block <span class="highlight">Stacker</span></h1>
    <div class="subtitle">Stack blocks and clear lines in this retro favorite!</div>

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
                <div class="card-title"><i class="fa-solid fa-gauge-high"></i> Difficulty</div>
                <select id="gameSpeed" style="margin-bottom: 15px;">
                    <option value="1000">Easy (Slow)</option>
                    <option value="600" selected>Normal (Classic)</option>
                    <option value="300">Hard (Fast)</option>
                    <option value="150">Insane (Turbo)</option>
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
                        SCORE: <span id="scoreCount">0</span>
                    </div>
                </div>

                <div id="canvasContainer">
                    <canvas id="tetrisCanvas"></canvas>
                </div>

                <!-- MOBILE CONTROLS -->
                <div class="mobile-controls">
                    <div class="control-btn btn-rotate" onclick="rotatePiece()"><i class="fa-solid fa-rotate"></i></div>
                    <div class="control-btn btn-left" onclick="moveLeft()"><i class="fa-solid fa-arrow-left"></i></div>
                    <div class="control-btn btn-down" onclick="moveDown()"><i class="fa-solid fa-arrow-down"></i></div>
                    <div class="control-btn btn-right" onclick="moveRight()"><i class="fa-solid fa-arrow-right"></i></div>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Tetris Constants
        const canvas = document.getElementById('tetrisCanvas');
        const ctx = canvas.getContext('2d');
        const COLS = 10;
        const ROWS = 20;
        let BLOCK_SIZE = 30;

        // Pieces
        const PIECES = {
            'I': [[1, 1, 1, 1]],
            'J': [[1, 0, 0], [1, 1, 1]],
            'L': [[0, 0, 1], [1, 1, 1]],
            'O': [[1, 1], [1, 1]],
            'S': [[0, 1, 1], [1, 1, 0]],
            'T': [[0, 1, 0], [1, 1, 1]],
            'Z': [[1, 1, 0], [0, 1, 1]]
        };

        const COLORS = {
            'I': '#00E5FF', 'J': '#FF2E93', 'L': '#FFE600',
            'O': '#00FF66', 'S': '#B000FF', 'T': '#FF2A2A', 'Z': '#F0F4F8'
        };

        // Game State
        let board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
        let currentPiece = null;
        let currentPos = {x: 0, y: 0};
        let score = 0;
        let gameLoop = null;
        let isGameOver = true;

        // Set canvas size
        function resizeCanvas() {
            const container = document.getElementById('canvasContainer');
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            BLOCK_SIZE = canvas.width / COLS;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

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
            board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
            score = 0;
            isGameOver = false;
            document.getElementById('scoreCount').innerText = score;
            
            spawnPiece();
            
            if (gameLoop) clearInterval(gameLoop);
            const speed = parseInt(document.getElementById('gameSpeed').value);
            gameLoop = setInterval(() => {
                if (!isGameOver) moveDown();
            }, speed);

            showMessage('🧱 STACK THEM UP!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function spawnPiece() {
            const keys = Object.keys(PIECES);
            const type = keys[Math.floor(Math.random() * keys.length)];
            currentPiece = {
                type: type,
                shape: PIECES[type],
                color: COLORS[type]
            };
            currentPos = {
                x: Math.floor(COLS / 2) - Math.floor(currentPiece.shape[0].length / 2),
                y: 0
            };

            if (collision()) {
                gameOver();
            }
        }

        function collision() {
            for (let y = 0; y < currentPiece.shape.length; y++) {
                for (let x = 0; x < currentPiece.shape[y].length; x++) {
                    if (currentPiece.shape[y][x]) {
                        const newX = currentPos.x + x;
                        const newY = currentPos.y + y;
                        if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && board[newY][newX])) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        function moveDown() {
            currentPos.y++;
            if (collision()) {
                currentPos.y--;
                lockPiece();
                clearLines();
                spawnPiece();
            }
            draw();
        }

        function moveLeft() {
            currentPos.x--;
            if (collision()) currentPos.x++;
            draw();
        }

        function moveRight() {
            currentPos.x++;
            if (collision()) currentPos.x--;
            draw();
        }

        function rotatePiece() {
            const rotated = currentPiece.shape[0].map((_, i) => currentPiece.shape.map(row => row[i]).reverse());
            const oldShape = currentPiece.shape;
            currentPiece.shape = rotated;
            if (collision()) currentPiece.shape = oldShape;
            draw();
        }

        function lockPiece() {
            currentPiece.shape.forEach((row, y) => {
                row.forEach((val, x) => {
                    if (val) {
                        const boardY = currentPos.y + y;
                        if (boardY >= 0) board[boardY][currentPos.x + x] = currentPiece.color;
                    }
                });
            });
        }

        function clearLines() {
            let linesCleared = 0;
            for (let y = ROWS - 1; y >= 0; y--) {
                if (board[y].every(cell => cell !== 0)) {
                    board.splice(y, 1);
                    board.unshift(Array(COLS).fill(0));
                    linesCleared++;
                    y++; // Check the same row again
                }
            }
            if (linesCleared > 0) {
                score += linesCleared * 100;
                document.getElementById('scoreCount').innerText = score;
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw board
            board.forEach((row, y) => {
                row.forEach((color, x) => {
                    if (color) drawBlock(x, y, color);
                });
            });

            // Draw current piece
            if (currentPiece) {
                currentPiece.shape.forEach((row, y) => {
                    row.forEach((val, x) => {
                        if (val) drawBlock(currentPos.x + x, currentPos.y + y, currentPiece.color);
                    });
                });
            }
        }

        function drawBlock(x, y, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }

        function gameOver() {
            isGameOver = true;
            clearInterval(gameLoop);
            showMessage('💀 GAME OVER! TRY AGAIN.', 'var(--wf-red)', 'var(--wf-white)');
        }

        // Keyboard Controls
        window.addEventListener('keydown', (e) => {
            if (isGameOver) return;
            if (e.key === 'ArrowLeft') moveLeft();
            if (e.key === 'ArrowRight') moveRight();
            if (e.key === 'ArrowDown') moveDown();
            if (e.key === 'ArrowUp') rotatePiece();
        });

        // Initial draw
        draw();

    </script>
</body>
</html>`;
