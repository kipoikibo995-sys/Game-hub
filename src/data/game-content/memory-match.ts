export const memoryMatchHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Match - Brutalist Game Hub</title>
    
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
            margin: 0;
            padding: 10px;
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
            margin-top: 0;
            margin-bottom: 5px;
            color: var(--wf-dark);
            font-size: clamp(2rem, 5vw, 3rem);
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
            margin-bottom: 20px;
            font-size: 1rem;
            font-weight: 800;
            text-align: center;
            background: var(--wf-white);
            border: 3px solid var(--wf-dark);
            padding: 6px 15px;
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
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
            border: 4px solid var(--wf-dark);
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            border-radius: 12px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .game-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            flex-wrap: wrap;
            gap: 10px;
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

        /* MEMORY GRID */
        .memory-grid {
            display: grid;
            gap: 10px;
            width: 100%;
            perspective: 1000px;
        }

        /* Grid variations */
        .grid-4x4 { grid-template-columns: repeat(4, 1fr); }
        .grid-6x6 { grid-template-columns: repeat(6, 1fr); }

        .memory-card {
            aspect-ratio: 1 / 1;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        }

        .memory-card.flipped {
            transform: rotateY(180deg);
        }

        .memory-card.matched {
            transform: rotateY(180deg) scale(0.95);
            opacity: 0.8;
            cursor: default;
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid var(--wf-dark);
            border-radius: 8px;
            font-size: clamp(1.2rem, 3vw, 2rem);
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
        }

        .card-front {
            background: var(--wf-blue);
            color: var(--wf-dark);
            transform: rotateY(180deg);
        }

        .card-back {
            background: var(--wf-gold);
            color: var(--wf-dark);
        }

        .card-back::after {
            content: '?';
            font-weight: 900;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
        }

        /* ICONS COLORS */
        .icon-red { color: var(--wf-red); }
        .icon-blue { color: var(--wf-blue); }
        .icon-green { color: var(--wf-green); }
        .icon-orange { color: var(--wf-orange); }
        .icon-purple { color: var(--wf-purple); }
        .icon-dark { color: var(--wf-dark); }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
            .memory-grid { gap: 8px; }
            .card-face { border-width: 3px; }
        }
    </style>
</head>
<body>
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
                <div class="card-title"><i class="fa-solid fa-table-cells"></i> Grid Size</div>
                <select id="gridSize" style="margin-bottom: 15px;">
                    <option value="16" selected>4 x 4 (16 Cards)</option>
                    <option value="36">6 x 6 (36 Cards)</option>
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
                        MOVES: <span id="moveCount">0</span>
                    </div>
                </div>

                <div class="memory-grid grid-4x4" id="memoryGrid">
                    <!-- Cards generated by JS -->
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game State
        let cards = [];
        let flippedCards = [];
        let matchedPairs = 0;
        let moves = 0;
        let isProcessing = false;
        let totalPairs = 8;

        // Icons for cards (Font Awesome)
        const ICONS = [
            'fa-solid fa-heart', 'fa-solid fa-star', 'fa-solid fa-bolt', 'fa-solid fa-cloud',
            'fa-solid fa-moon', 'fa-solid fa-sun', 'fa-solid fa-ghost', 'fa-solid fa-fire',
            'fa-solid fa-music', 'fa-solid fa-camera', 'fa-solid fa-plane', 'fa-solid fa-rocket',
            'fa-solid fa-anchor', 'fa-solid fa-bicycle', 'fa-solid fa-car', 'fa-solid fa-truck',
            'fa-solid fa-tree', 'fa-solid fa-leaf'
        ];

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
            const size = parseInt(document.getElementById('gridSize').value);
            totalPairs = size / 2;
            
            // Reset state
            moves = 0;
            matchedPairs = 0;
            flippedCards = [];
            isProcessing = false;
            document.getElementById('moveCount').innerText = moves;
            
            // Update grid class
            const grid = document.getElementById('memoryGrid');
            const gridSide = Math.sqrt(size);
            grid.className = 'memory-grid grid-' + gridSide + 'x' + gridSide;
            grid.innerHTML = '';

            // Prepare card data
            const selectedIcons = ICONS.slice(0, totalPairs);
            const cardData = [...selectedIcons, ...selectedIcons];
            
            // Shuffle
            cardData.sort(() => Math.random() - 0.5);

            // Create cards
            cardData.forEach((icon, index) => {
                const card = document.createElement('div');
                card.className = 'memory-card';
                card.dataset.icon = icon;
                card.dataset.index = index;
                card.onclick = () => flipCard(card);

                card.innerHTML = '<div class="card-face card-back"></div>' +
                                 '<div class="card-face card-front">' +
                                 '    <i class="' + icon + '"></i>' +
                                 '</div>';

                grid.appendChild(card);
            });

            showMessage('🧠 FIND ALL PAIRS!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function flipCard(card) {
            if (isProcessing || card.classList.contains('flipped') || card.classList.contains('matched')) return;

            card.classList.add('flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                moves++;
                document.getElementById('moveCount').innerText = moves;
                checkMatch();
            }
        }

        function checkMatch() {
            isProcessing = true;
            const [card1, card2] = flippedCards;

            if (card1.dataset.icon === card2.dataset.icon) {
                // Match found
                setTimeout(() => {
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    matchedPairs++;
                    flippedCards = [];
                    isProcessing = false;

                    if (matchedPairs === totalPairs) {
                        gameWin();
                    }
                }, 500);
            } else {
                // Not a match
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                    isProcessing = false;
                }, 1000);
            }
        }

        function gameWin() {
            showMessage('🎉 YOU WON IN ' + moves + ' MOVES!', 'var(--wf-green)');
            // Gửi thông điệp về parent window
            window.parent.postMessage({ type: 'GAME_OVER', score: Math.max(0, 1000 - moves * 10) }, '*');
        }

        // Initialize empty board
        startGame();

    </script>
</body>
</html>`;
