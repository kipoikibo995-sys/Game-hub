export const sudokuMasterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku Master - Brutalist Game Hub</title>
    
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

        /* SUDOKU GRID */
        .sudoku-grid {
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            width: 100%;
            max-width: 450px;
            aspect-ratio: 1 / 1;
            border: 4px solid var(--wf-dark);
            background: var(--wf-dark);
            gap: 2px;
            margin-bottom: 20px;
        }

        .sudoku-cell {
            background: var(--wf-white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: clamp(1rem, 4vw, 1.5rem);
            font-weight: 900;
            cursor: pointer;
            transition: all 0.1s;
        }

        .sudoku-cell:hover:not(.fixed) {
            background: var(--wf-cream);
        }

        .sudoku-cell.selected {
            background: var(--wf-blue) !important;
            color: var(--wf-dark);
        }

        .sudoku-cell.fixed {
            background: #f1f5f9;
            color: #475569;
            cursor: default;
        }

        .sudoku-cell.wrong {
            color: var(--wf-red);
        }

        /* Thick borders for 3x3 blocks */
        .sudoku-cell:nth-child(3n) { border-right: 2px solid var(--wf-dark); }
        .sudoku-cell:nth-child(9n) { border-right: none; }
        .sudoku-cell:nth-child(n+19):nth-child(-n+27),
        .sudoku-cell:nth-child(n+46):nth-child(-n+54) { border-bottom: 2px solid var(--wf-dark); }

        /* NUMBER PAD */
        .number-pad {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            max-width: 450px;
        }

        .num-btn {
            width: 40px;
            height: 40px;
            background: var(--wf-white);
            border: 3px solid var(--wf-dark);
            border-radius: 6px;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
            transition: all 0.1s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .num-btn:hover {
            background: var(--wf-gold);
            transform: translate(-2px, -2px);
            box-shadow: 5px 5px 0px 0px var(--wf-dark);
        }

        .num-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 1px 1px 0px 0px var(--wf-dark);
        }

        .num-btn.clear {
            width: auto;
            padding: 0 15px;
            background: var(--wf-red);
            color: var(--wf-white);
        }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
            .sudoku-grid { gap: 1px; border-width: 3px; }
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
                <div class="card-title"><i class="fa-solid fa-brain"></i> Difficulty</div>
                <select id="difficulty" style="margin-bottom: 15px;">
                    <option value="easy" selected>Easy (36 Fixed)</option>
                    <option value="medium">Medium (30 Fixed)</option>
                    <option value="hard">Hard (24 Fixed)</option>
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
                        ERRORS: <span id="errorCount">0</span>/3
                    </div>
                </div>

                <div class="sudoku-grid" id="sudokuGrid">
                    <!-- 81 cells generated by JS -->
                </div>

                <div class="number-pad">
                    <button class="num-btn" onclick="inputNumber(1)">1</button>
                    <button class="num-btn" onclick="inputNumber(2)">2</button>
                    <button class="num-btn" onclick="inputNumber(3)">3</button>
                    <button class="num-btn" onclick="inputNumber(4)">4</button>
                    <button class="num-btn" onclick="inputNumber(5)">5</button>
                    <button class="num-btn" onclick="inputNumber(6)">6</button>
                    <button class="num-btn" onclick="inputNumber(7)">7</button>
                    <button class="num-btn" onclick="inputNumber(8)">8</button>
                    <button class="num-btn" onclick="inputNumber(9)">9</button>
                    <button class="num-btn clear" onclick="inputNumber(0)">CLEAR</button>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Game State
        let solution = [];
        let puzzle = [];
        let selectedCell = null;
        let errors = 0;
        let isGameOver = true;

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
            errors = 0;
            isGameOver = false;
            selectedCell = null;
            document.getElementById('errorCount').innerText = errors;
            
            generateSudoku();
            renderGrid();

            showMessage('🧩 SOLVE THE PUZZLE!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function generateSudoku() {
            // Seed grid
            let grid = [
                [1,2,3,4,5,6,7,8,9],
                [4,5,6,7,8,9,1,2,3],
                [7,8,9,1,2,3,4,5,6],
                [2,3,1,5,6,4,8,9,7],
                [5,6,4,8,9,7,2,3,1],
                [8,9,7,2,3,1,5,6,4],
                [3,1,2,6,4,5,9,7,8],
                [6,4,5,9,7,8,3,1,2],
                [9,7,8,3,1,2,6,4,5]
            ];

            // Shuffle numbers 1-9
            const nums = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);
            const map = {};
            [1,2,3,4,5,6,7,8,9].forEach((n, i) => map[n] = nums[i]);
            grid = grid.map(row => row.map(n => map[n]));

            // Shuffle rows within blocks
            for (let i = 0; i < 9; i += 3) {
                const block = [grid[i], grid[i+1], grid[i+2]].sort(() => Math.random() - 0.5);
                grid[i] = block[0];
                grid[i+1] = block[1];
                grid[i+2] = block[2];
            }

            // Shuffle columns within blocks
            for (let i = 0; i < 9; i += 3) {
                const cols = [0, 1, 2].sort(() => Math.random() - 0.5);
                grid = grid.map(row => {
                    const newRow = [...row];
                    newRow[i] = row[i + cols[0]];
                    newRow[i+1] = row[i + cols[1]];
                    newRow[i+2] = row[i + cols[2]];
                    return newRow;
                });
            }

            solution = grid;
            
            const diff = document.getElementById('difficulty').value;
            const fixedCount = diff === 'easy' ? 36 : (diff === 'medium' ? 30 : 24);
            
            puzzle = solution.map(row => [...row]);
            let removed = 0;
            while(removed < (81 - fixedCount)) {
                let r = Math.floor(Math.random() * 9);
                let c = Math.floor(Math.random() * 9);
                if(puzzle[r][c] !== 0) {
                    puzzle[r][c] = 0;
                    removed++;
                }
            }
        }

        function renderGrid() {
            const grid = document.getElementById('sudokuGrid');
            grid.innerHTML = '';
            
            for(let r=0; r<9; r++) {
                for(let c=0; c<9; c++) {
                    const cell = document.createElement('div');
                    cell.className = 'sudoku-cell';
                    cell.dataset.row = r;
                    cell.dataset.col = c;
                    
                    if(puzzle[r][c] !== 0) {
                        cell.innerText = puzzle[r][c];
                        cell.classList.add('fixed');
                    } else {
                        cell.onclick = () => selectCell(cell);
                    }
                    
                    grid.appendChild(cell);
                }
            }
        }

        function selectCell(cell) {
            if(isGameOver) return;
            document.querySelectorAll('.sudoku-cell').forEach(c => c.classList.remove('selected'));
            cell.classList.add('selected');
            selectedCell = cell;
        }

        function inputNumber(num) {
            if(!selectedCell || isGameOver) return;
            
            const r = parseInt(selectedCell.dataset.row);
            const c = parseInt(selectedCell.dataset.col);
            
            if(num === 0) {
                selectedCell.innerText = '';
                selectedCell.classList.remove('wrong');
                return;
            }

            if(solution[r][c] === num) {
                selectedCell.innerText = num;
                selectedCell.classList.remove('wrong');
                selectedCell.classList.add('fixed');
                selectedCell.onclick = null;
                selectedCell.classList.remove('selected');
                selectedCell = null;
                checkWin();
            } else {
                selectedCell.innerText = num;
                selectedCell.classList.add('wrong');
                errors++;
                document.getElementById('errorCount').innerText = errors;
                if(errors >= 3) endGame(false);
            }
        }

        function checkWin() {
            const cells = document.querySelectorAll('.sudoku-cell');
            const allFilled = Array.from(cells).every(c => c.innerText !== '');
            if(allFilled) endGame(true);
        }

        function endGame(win) {
            isGameOver = true;
            if(win) {
                showMessage('🎉 CONGRATULATIONS! YOU SOLVED IT!', 'var(--wf-green)');
            } else {
                showMessage('💀 GAME OVER! TOO MANY ERRORS.', 'var(--wf-red)', 'var(--wf-white)');
            }
        }

        // Initialize empty board
        startGame();

    </script>
</body>
</html>`;
