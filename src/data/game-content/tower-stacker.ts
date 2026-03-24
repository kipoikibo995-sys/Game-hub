export const towerStackerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tower Stacker - Brutalist Game Hub</title>
    
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
            max-width: 400px;
            aspect-ratio: 9 / 16;
            background: var(--wf-cream);
            border: 4px solid var(--wf-dark);
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            cursor: pointer;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
        }
    </style>
</head>
<body>

    <h1>Tower <span class="highlight">Stacker</span></h1>
    <div class="subtitle">Stack the blocks as high as you can!</div>

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
                    <option value="2">Easy (Slow)</option>
                    <option value="4" selected>Normal (Classic)</option>
                    <option value="6">Hard (Fast)</option>
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
                    <div id="resultMsg">CLICK TO STACK!</div>
                    <div class="score-display">
                        STACKS: <span id="scoreCount">0</span>
                    </div>
                </div>

                <div id="canvasContainer" onclick="stackBlock()">
                    <canvas id="stackCanvas"></canvas>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game Constants
        const canvas = document.getElementById('stackCanvas');
        const ctx = canvas.getContext('2d');
        
        // Game State
        let score = 0;
        let isGameOver = true;
        let animationId = null;

        // Blocks
        let blocks = [];
        let currentBlock = null;
        let blockHeight = 40;
        let blockWidth = 200;
        let blockSpeed = 4;
        let blockDirection = 1;
        let cameraY = 0;
        let targetCameraY = 0;

        const BLOCK_COLORS = ['#FF2E93', '#FFE600', '#00FF66', '#00E5FF', '#B000FF'];

        // Set canvas size
        function resizeCanvas() {
            const container = document.getElementById('canvasContainer');
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
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
            if (animationId) cancelAnimationFrame(animationId);
            
            score = 0;
            isGameOver = false;
            document.getElementById('scoreCount').innerText = score;
            
            blockSpeed = parseFloat(document.getElementById('gameSpeed').value);
            blockWidth = 200;
            cameraY = 0;
            
            // Base block
            blocks = [{
                x: (canvas.width - blockWidth) / 2,
                y: canvas.height - blockHeight,
                w: blockWidth,
                c: 'var(--wf-dark)'
            }];

            spawnBlock();
            draw();
            showMessage('🏗️ STACK IT UP!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function spawnBlock() {
            currentBlock = {
                x: 0,
                y: canvas.height - (blocks.length + 1) * blockHeight,
                w: blockWidth,
                c: BLOCK_COLORS[blocks.length % BLOCK_COLORS.length]
            };
            blockDirection = 1;
        }

        function stackBlock() {
            if (isGameOver) return;

            const lastBlock = blocks[blocks.length - 1];
            const diff = currentBlock.x - lastBlock.x;

            if (Math.abs(diff) >= lastBlock.w) {
                gameOver();
                return;
            }

            // Cut the block
            if (diff > 0) {
                currentBlock.w -= diff;
            } else {
                currentBlock.w += diff;
                currentBlock.x = lastBlock.x;
            }

            blockWidth = currentBlock.w;
            blocks.push({...currentBlock});
            score++;
            document.getElementById('scoreCount').innerText = score;

            // Move camera up if needed
            if (blocks.length > 5) {
                targetCameraY = (blocks.length - 5) * blockHeight;
            }

            spawnBlock();
            blockSpeed += 0.1; // Slightly increase speed
        }

        function draw() {
            if (isGameOver) return;

            // Smooth camera
            cameraY += (targetCameraY - cameraY) * 0.1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(0, cameraY);

            // Draw stacked blocks
            blocks.forEach(b => {
                ctx.fillStyle = b.c;
                ctx.fillRect(b.x, b.y, b.w, blockHeight);
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 3;
                ctx.strokeRect(b.x, b.y, b.w, blockHeight);
            });

            // Update & Draw current block
            currentBlock.x += blockSpeed * blockDirection;
            if (currentBlock.x + currentBlock.w > canvas.width || currentBlock.x < 0) {
                blockDirection *= -1;
            }

            ctx.fillStyle = currentBlock.c;
            ctx.fillRect(currentBlock.x, currentBlock.y, currentBlock.w, blockHeight);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
            ctx.strokeRect(currentBlock.x, currentBlock.y, currentBlock.w, blockHeight);

            ctx.restore();
            animationId = requestAnimationFrame(draw);
        }

        function gameOver() {
            isGameOver = true;
            showMessage('💀 TOWER COLLAPSED!', 'var(--wf-red)', 'var(--wf-white)');
        }

        // Keyboard Controls
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') stackBlock();
        });

        // Initial draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    </script>
</body>
</html>`;
