export const snakeRetroHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Retro - Brutalist Game Hub</title>
    
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

        /* CANVAS AREA */
        #canvasContainer {
            width: 100%;
            max-width: 500px;
            aspect-ratio: 1 / 1;
            background: var(--wf-cream);
            border: 4px solid var(--wf-dark);
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
            image-rendering: pixelated;
        }

        /* MOBILE CONTROLS */
        .mobile-controls {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-top: 20px;
            width: 100%;
            max-width: 250px;
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

        .btn-up { grid-column: 2; }
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

    <h1>Snake <span class="highlight">Retro</span></h1>
    <div class="subtitle">Classic arcade action with a brutalist twist!</div>

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
                    <option value="150">Easy (Slow)</option>
                    <option value="100" selected>Normal (Classic)</option>
                    <option value="70">Hard (Fast)</option>
                    <option value="40">Insane (Turbo)</option>
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
                    <canvas id="snakeCanvas"></canvas>
                </div>

                <!-- MOBILE CONTROLS -->
                <div class="mobile-controls">
                    <div class="control-btn btn-up" onclick="changeDirection('UP')"><i class="fa-solid fa-arrow-up"></i></div>
                    <div class="control-btn btn-left" onclick="changeDirection('LEFT')"><i class="fa-solid fa-arrow-left"></i></div>
                    <div class="control-btn btn-down" onclick="changeDirection('DOWN')"><i class="fa-solid fa-arrow-down"></i></div>
                    <div class="control-btn btn-right" onclick="changeDirection('RIGHT')"><i class="fa-solid fa-arrow-right"></i></div>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game Constants
        const canvas = document.getElementById('snakeCanvas');
        const ctx = canvas.getContext('2d');
        const gridSize = 20;
        let tileCount = 20;

        // Game State
        let snake = [{x: 10, y: 10}];
        let food = {x: 5, y: 5};
        let dx = 0;
        let dy = 0;
        let score = 0;
        let gameLoop = null;
        let isGameOver = true;
        let nextDirection = 'RIGHT';

        // Set canvas size
        function resizeCanvas() {
            const container = document.getElementById('canvasContainer');
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            tileCount = Math.floor(canvas.width / gridSize);
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
            if (gameLoop) clearInterval(gameLoop);
            
            // Reset state
            snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
            dx = 1;
            dy = 0;
            score = 0;
            isGameOver = false;
            nextDirection = 'RIGHT';
            
            document.getElementById('scoreCount').innerText = score;
            createFood();
            
            const speed = parseInt(document.getElementById('gameSpeed').value);
            gameLoop = setInterval(draw, speed);

            showMessage('🐍 GO SNAKE GO!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function createFood() {
            food = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
            // Ensure food doesn't spawn on snake
            snake.forEach(part => {
                if (part.x === food.x && part.y === food.y) createFood();
            });
        }

        function draw() {
            if (isGameOver) return;

            // Update snake position
            const head = {x: snake[0].x + dx, y: snake[0].y + dy};

            // Check collisions
            if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || snakeCollision(head)) {
                gameOver();
                return;
            }

            snake.unshift(head);

            // Check food collision
            if (head.x === food.x && head.y === food.y) {
                score += 10;
                document.getElementById('scoreCount').innerText = score;
                createFood();
            } else {
                snake.pop();
            }

            // Clear canvas
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines (subtle)
            ctx.strokeStyle = 'rgba(0,0,0,0.05)';
            ctx.lineWidth = 1;
            for(let i=0; i<=tileCount; i++) {
                ctx.beginPath();
                ctx.moveTo(i * gridSize, 0);
                ctx.lineTo(i * gridSize, canvas.height);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(0, i * gridSize);
                ctx.lineTo(canvas.width, i * gridSize);
                ctx.stroke();
            }

            // Draw food
            ctx.fillStyle = '#FF2A2A'; // Red
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);
            ctx.strokeRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);

            // Draw snake
            snake.forEach((part, index) => {
                ctx.fillStyle = index === 0 ? '#00FF66' : '#00E5FF'; // Green head, blue body
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.fillRect(part.x * gridSize + 1, part.y * gridSize + 1, gridSize - 2, gridSize - 2);
                ctx.strokeRect(part.x * gridSize + 1, part.y * gridSize + 1, gridSize - 2, gridSize - 2);
            });
        }

        function snakeCollision(head) {
            return snake.some((part, index) => index !== 0 && part.x === head.x && part.y === head.y);
        }

        function gameOver() {
            isGameOver = true;
            clearInterval(gameLoop);
            showMessage('💀 GAME OVER! TRY AGAIN.', 'var(--wf-red)', 'var(--wf-white)');
        }

        function changeDirection(dir) {
            if (isGameOver) return;
            
            if (dir === 'UP' && dy === 0) { dx = 0; dy = -1; }
            if (dir === 'DOWN' && dy === 0) { dx = 0; dy = 1; }
            if (dir === 'LEFT' && dx === 0) { dx = -1; dy = 0; }
            if (dir === 'RIGHT' && dx === 0) { dx = 1; dy = 0; }
        }

        // Keyboard Controls
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') changeDirection('UP');
            if (e.key === 'ArrowDown') changeDirection('DOWN');
            if (e.key === 'ArrowLeft') changeDirection('LEFT');
            if (e.key === 'ArrowRight') changeDirection('RIGHT');
        });

        // Initial draw
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    </script>
</body>
</html>`;
