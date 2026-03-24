export const whackAMoleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whack-A-Mole - Brutalist Game Hub</title>
    
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

        /* WHACK-A-MOLE GRID */
        .mole-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            width: 100%;
            max-width: 500px;
            margin: 20px 0;
        }

        .hole {
            aspect-ratio: 1 / 1;
            background: var(--wf-brown);
            border: 5px solid var(--wf-dark);
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 10px 0 rgba(0,0,0,0.2), 4px 4px 0px 0px var(--wf-dark);
        }

        .mole {
            width: 80%;
            height: 80%;
            background: #8B4513; /* Brown mole */
            border: 4px solid var(--wf-dark);
            border-radius: 50% 50% 20% 20%;
            position: absolute;
            bottom: -100%;
            left: 10%;
            transition: bottom 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 10px;
        }

        .mole.up {
            bottom: 0;
        }

        .mole::before, .mole::after {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--wf-dark);
            border-radius: 50%;
            position: absolute;
            top: 20px;
        }

        .mole::before { left: 25%; }
        .mole::after { right: 25%; }

        .mole-nose {
            width: 12px;
            height: 8px;
            background: var(--wf-red);
            border-radius: 50%;
            margin-top: 25px;
        }

        .mole.whacked {
            background: var(--wf-red);
            bottom: -100% !important;
        }

        /* HAMMER CURSOR */
        #gameBox {
            cursor: url('https://cdn-icons-png.flaticon.com/32/2321/2321404.png'), auto;
        }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
            .mole-grid { gap: 10px; }
        }
    </style>
</head>
<body>

    <h1>Whack-A-<span class="highlight">Mole</span></h1>
    <div class="subtitle">Whack those pesky moles as fast as you can!</div>

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
                <div class="card-title"><i class="fa-solid fa-clock"></i> Game Duration</div>
                <select id="gameTime" style="margin-bottom: 15px;">
                    <option value="15">15 Seconds</option>
                    <option value="30" selected>30 Seconds</option>
                    <option value="60">60 Seconds</option>
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
                        SCORE: <span id="scoreCount">0</span> | TIME: <span id="timeCount">0</span>s
                    </div>
                </div>

                <div class="mole-grid" id="moleGrid">
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                    <div class="hole"><div class="mole" onclick="whack(this)"><div class="mole-nose"></div></div></div>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game State
        let score = 0;
        let timeLeft = 0;
        let isGameOver = true;
        let moleTimer = null;
        let gameTimer = null;
        let lastHole = null;

        const moles = document.querySelectorAll('.mole');

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
            score = 0;
            timeLeft = parseInt(document.getElementById('gameTime').value);
            isGameOver = false;
            
            document.getElementById('scoreCount').innerText = score;
            document.getElementById('timeCount').innerText = timeLeft;
            
            moles.forEach(mole => mole.classList.remove('up', 'whacked'));

            if (moleTimer) clearTimeout(moleTimer);
            if (gameTimer) clearInterval(gameTimer);

            popMole();
            // Pop a second mole after a short delay for more action
            setTimeout(() => { if(!isGameOver) popMole(); }, 500);
            
            gameTimer = setInterval(() => {
                timeLeft--;
                document.getElementById('timeCount').innerText = timeLeft;
                if (timeLeft <= 0) endGame();
            }, 1000);

            showMessage('🔨 WHACK THEM ALL!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function popMole() {
            if (isGameOver) return;

            const time = Math.random() * (1200 - 600) + 600;
            const hole = randomHole();
            
            hole.classList.add('up');

            setTimeout(() => {
                hole.classList.remove('up');
                if (!isGameOver) popMole();
            }, time);
        }

        function randomHole() {
            const idx = Math.floor(Math.random() * moles.length);
            const hole = moles[idx];
            if (hole === lastHole) return randomHole();
            lastHole = hole;
            return hole;
        }

        function whack(mole) {
            if (!mole.classList.contains('up') || isGameOver) return;
            
            score++;
            document.getElementById('scoreCount').innerText = score;
            mole.classList.remove('up');
            mole.classList.add('whacked');
            
            setTimeout(() => mole.classList.remove('whacked'), 100);
        }

        function endGame() {
            isGameOver = true;
            clearInterval(gameTimer);
            clearTimeout(moleTimer);
            moles.forEach(mole => mole.classList.remove('up'));
            showMessage('🎉 TIME\\'S UP! FINAL SCORE: ' + score, 'var(--wf-green)');
        }

    </script>
</body>
</html>`;
