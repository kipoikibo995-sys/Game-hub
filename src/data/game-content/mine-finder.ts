export const mineFinderHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mine Finder - Brutalist Game Hub</title>
    
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

        html, body { height: 100%; margin: 0; }
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

        /* MINESWEEPER GRID */
        .mines-grid {
            display: grid;
            gap: var(--grid-gap, 5px);
            width: 100%;
            max-width: var(--grid-max-width, 450px);
            margin: 20px 0;
            background: var(--wf-dark);
            padding: 5px;
            border: 4px solid var(--wf-dark);
            border-radius: 8px;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            grid-template-columns: repeat(var(--grid-size, 10), 1fr);
        }

        .cell {
            aspect-ratio: 1 / 1;
            background: var(--wf-blue);
            border: 2px solid var(--wf-dark);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: var(--cell-font-size, clamp(0.8rem, 3vw, 1.2rem));
            cursor: pointer;
            transition: all 0.1s;
        }

        .cell:hover:not(.revealed) {
            background: var(--wf-gold);
        }

        .cell.revealed {
            background: var(--wf-white);
            cursor: default;
            border-color: #e2e8f0;
        }

        .cell.mine {
            background: var(--wf-red) !important;
            color: var(--wf-white);
        }

        .cell.flagged {
            background: var(--wf-orange) !important;
        }

        .cell.flagged::after {
            content: '🚩';
        }

        /* Number colors */
        .num-1 { color: #2563eb; }
        .num-2 { color: #16a34a; }
        .num-3 { color: #dc2626; }
        .num-4 { color: #7c3aed; }
        .num-5 { color: #92400e; }
        .num-6 { color: #0891b2; }
        .num-7 { color: #000000; }
        .num-8 { color: #475569; }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
            .mines-grid { gap: 2px; padding: 2px; }
            .cell { border-width: 1px; }
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
                <div class="card-title"><i class="fa-solid fa-bomb"></i> Difficulty</div>
                <select id="difficulty" style="margin-bottom: 15px;">
                    <option value="10" selected>Easy (10x10, 10 Mines)</option>
                    <option value="15">Normal (15x15, 35 Mines)</option>
                    <option value="20">Hard (20x20, 75 Mines)</option>
                </select>
                <div id="flagModeContainer" style="margin-bottom: 15px;">
                    <button id="flagModeBtn" class="btn-primary" style="background: var(--wf-white); font-size: 0.9rem; padding: 10px; color: var(--wf-dark);" onclick="toggleFlagMode()">
                        <i class="fa-solid fa-hand-pointer"></i> Mode: Reveal
                    </button>
                </div>
                <div style="font-size: 0.8rem; font-weight: 700; margin-bottom: 10px; text-transform: uppercase; opacity: 0.7;">
                    <i class="fa-solid fa-mouse"></i> Desktop: Right-click to flag
                </div>
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
                        MINES: <span id="mineCount">0</span>
                    </div>
                </div>

                <div class="mines-grid" id="minesGrid">
                    <!-- Cells generated by JS -->
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game State
        let board = [];
        let cellElements = []; // Store references to DOM elements
        let size = 10;
        let mines = 10;
        let revealedCount = 0;
        let isGameOver = true;
        let flags = 0;
        let isFlagMode = false;

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

        function toggleFlagMode() {
            isFlagMode = !isFlagMode;
            const btn = document.getElementById('flagModeBtn');
            if (isFlagMode) {
                btn.innerHTML = '<i class="fa-solid fa-flag"></i> Mode: Flagging';
                btn.style.background = 'var(--wf-orange)';
                btn.style.color = 'var(--wf-white)';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Mode: Reveal';
                btn.style.background = 'var(--wf-white)';
                btn.style.color = 'var(--wf-dark)';
            }
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
            size = parseInt(document.getElementById('difficulty').value);
            if (size === 10) mines = 10;
            else if (size === 15) mines = 35;
            else mines = 75;

            revealedCount = 0;
            flags = 0;
            isGameOver = false;
            
            document.getElementById('mineCount').innerText = mines;
            
            const grid = document.getElementById('minesGrid');
            grid.innerHTML = '';
            
            // Set dynamic grid properties
            grid.style.setProperty('--grid-size', size);
            grid.style.setProperty('--grid-gap', size > 15 ? '2px' : (size > 10 ? '3px' : '5px'));
            grid.style.setProperty('--grid-max-width', size > 15 ? '600px' : (size > 10 ? '550px' : '450px'));
            grid.style.setProperty('--cell-font-size', size > 15 ? '0.8rem' : (size > 10 ? '1rem' : '1.2rem'));

            // Initialize board and element storage
            board = [];
            cellElements = [];
            for (let r = 0; r < size; r++) {
                board[r] = [];
                cellElements[r] = [];
                for (let c = 0; c < size; c++) {
                    board[r][c] = {
                        mine: false, 
                        revealed: false, 
                        flagged: false, 
                        count: 0
                    };
                }
            }

            // Place mines
            let placed = 0;
            while(placed < mines) {
                let r = Math.floor(Math.random() * size);
                let c = Math.floor(Math.random() * size);
                if(!board[r][c].mine) {
                    board[r][c].mine = true;
                    placed++;
                }
            }

            // Calculate counts
            for(let r=0; r<size; r++) {
                for(let c=0; c<size; c++) {
                    if(!board[r][c].mine) {
                        let count = 0;
                        for(let i=-1; i<=1; i++) {
                            for(let j=-1; j<=1; j++) {
                                if(r+i >= 0 && r+i < size && c+j >= 0 && c+j < size && board[r+i][c+j].mine) {
                                    count++;
                                }
                            }
                        }
                        board[r][c].count = count;
                    }
                }
            }

            // Render
            for(let r=0; r<size; r++) {
                for(let c=0; c<size; c++) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.dataset.r = r;
                    cell.dataset.c = c;
                    cell.onclick = () => {
                        if (isFlagMode) toggleFlag(r, c);
                        else reveal(r, c);
                    };
                    cell.oncontextmenu = (e) => {
                        e.preventDefault();
                        toggleFlag(r, c);
                    };
                    grid.appendChild(cell);
                    cellElements[r][c] = cell;
                }
            }

            showMessage('🚩 CLEAR THE FIELD!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function reveal(r, c) {
            if(isGameOver || board[r][c].revealed || board[r][c].flagged) return;

            const cell = cellElements[r][c];
            board[r][c].revealed = true;
            cell.classList.add('revealed');
            revealedCount++;

            if(board[r][c].mine) {
                cell.classList.add('mine');
                cell.innerHTML = '<i class="fa-solid fa-bomb"></i>';
                endGame(false);
                return;
            }

            if(board[r][c].count > 0) {
                cell.innerText = board[r][c].count;
                cell.classList.add('num-' + board[r][c].count);
            } else {
                // Flood fill for zeros
                for(let i=-1; i<=1; i++) {
                    for(let j=-1; j<=1; j++) {
                        if(i === 0 && j === 0) continue;
                        let nr = r + i;
                        let nc = c + j;
                        if(nr >= 0 && nr < size && nc >= 0 && nc < size && !board[nr][nc].revealed) {
                            reveal(nr, nc);
                        }
                    }
                }
            }

            if(revealedCount === (size * size) - mines && !isGameOver) {
                endGame(true);
            }
        }

        function toggleFlag(r, c) {
            if(isGameOver || board[r][c].revealed) return;

            const cell = cellElements[r][c];
            board[r][c].flagged = !board[r][c].flagged;
            cell.classList.toggle('flagged');
            
            flags += board[r][c].flagged ? 1 : -1;
            document.getElementById('mineCount').innerText = mines - flags;
        }

        function endGame(win) {
            isGameOver = true;
            if(win) {
                showMessage('🎉 CONGRATULATIONS! YOU CLEARED IT!', 'var(--wf-green)');
            } else {
                showMessage('💀 KABOOM! GAME OVER.', 'var(--wf-red)', 'var(--wf-white)');
                // Show all mines
                for(let r=0; r<size; r++) {
                    for(let c=0; c<size; c++) {
                        if(board[r][c].mine) {
                            const cell = cellElements[r][c];
                            cell.classList.add('mine', 'revealed');
                            cell.innerHTML = '<i class="fa-solid fa-bomb"></i>';
                        }
                    }
                }
            }
        }

        // Initialize empty board
        startGame();

    </script>
</body>
</html>`;
