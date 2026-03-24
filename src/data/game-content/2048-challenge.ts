export const challenge2048HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>2048 Challenge</title>
    
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
            touch-action: pan-y; /* Prevent pull-to-refresh on mobile */
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
            max-width: 900px;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* SIDEBAR / CONTROLS */
        .sidebar {
            flex: 1;
            min-width: 280px;
            max-width: 320px;
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
            max-width: 550px;
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

        .score-pill {
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--wf-dark);
            background: var(--wf-gold);
            padding: 8px 15px;
            border: 3px solid var(--wf-dark);
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
            border-radius: 6px;
            text-align: center;
            flex: 1;
            min-width: 120px;
        }

        .score-pill span {
            display: block;
            font-size: 1.5rem;
            line-height: 1.2;
        }

        .best-pill {
            background: var(--wf-green);
        }

        #resultMsg {
            width: 100%;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase;
            text-align: center;
            min-height: 40px;
            padding: 5px 15px;
            border-radius: 6px;
            border: 3px solid transparent;
            margin-bottom: 10px;
        }

        /* 2048 GRID */
        .grid-container {
            position: relative;
            background: var(--wf-dark);
            padding: clamp(4px, 1.5vw, 8px);
            border-radius: 12px;
            box-shadow: inset 5px 5px 15px rgba(0,0,0,0.5);
            width: 100%;
            aspect-ratio: 1;
            overflow: hidden;
        }

        /* Background empty cells */
        .grid-bg {
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: repeat(var(--size, 4), 1fr);
            grid-template-rows: repeat(var(--size, 4), 1fr);
        }

        .grid-cell {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin: clamp(3px, 1vw, 6px);
        }

        /* Dynamic Tiles */
        .tile-container {
            position: absolute;
            top: clamp(4px, 1.5vw, 8px);
            left: clamp(4px, 1.5vw, 8px);
            right: clamp(4px, 1.5vw, 8px);
            bottom: clamp(4px, 1.5vw, 8px);
            pointer-events: none;
        }

        .tile {
            position: absolute;
            width: calc(100% / var(--size));
            height: calc(100% / var(--size));
            padding: clamp(3px, 1vw, 6px);
            transition: transform 0.15s ease-in-out;
            z-index: 10;
        }

        .tile-inner {
            width: 100%;
            height: 100%;
            background: var(--wf-white);
            border: 3px solid var(--wf-dark);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: calc(min(100vw - 80px, 500px) / var(--size) * 0.4);
            color: var(--wf-dark);
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
            transition: background-color 0.15s, color 0.15s;
        }

        /* Animations */
        .tile.new .tile-inner {
            animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tile.merged .tile-inner {
            animation: popMerge 0.2s ease-in-out;
        }

        @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        @keyframes popMerge {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); box-shadow: 5px 5px 0px 0px var(--wf-dark); }
            100% { transform: scale(1); }
        }

        /* Tile Colors (Pop-Art style) */
        .val-2 .tile-inner { background: var(--wf-white); color: var(--wf-dark); }
        .val-4 .tile-inner { background: var(--wf-cream); color: var(--wf-dark); }
        .val-8 .tile-inner { background: var(--wf-gold); color: var(--wf-dark); }
        .val-16 .tile-inner { background: #FF99C8; color: var(--wf-dark); }
        .val-32 .tile-inner { background: var(--wf-orange); color: var(--wf-white); }
        .val-64 .tile-inner { background: var(--wf-red); color: var(--wf-white); }
        .val-128 .tile-inner { background: var(--wf-blue); color: var(--wf-dark); }
        .val-256 .tile-inner { background: var(--wf-green); color: var(--wf-dark); }
        .val-512 .tile-inner { background: #BDB2FF; color: var(--wf-dark); }
        .val-1024 .tile-inner { background: var(--wf-purple); color: var(--wf-white); }
        .val-2048 .tile-inner { 
            background: var(--wf-dark); 
            color: var(--wf-white); 
            border-color: var(--wf-gold); 
            box-shadow: inset 0 0 15px var(--wf-gold), 3px 3px 0px var(--wf-gold); 
        }
        .val-super .tile-inner { 
            background: linear-gradient(45deg, var(--wf-orange), var(--wf-blue)); 
            color: var(--wf-white); 
            border-color: var(--wf-white); 
        }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            #gameBox { padding: 15px; }
            .tile-inner { border-width: 2px; box-shadow: 2px 2px 0px 0px var(--wf-dark); }
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
                <div class="card-title"><i class="fa-solid fa-border-all"></i> Grid Size</div>
                <select id="gridSize" onchange="initGame()">
                    <option value="3">3 x 3 (Hard)</option>
                    <option value="4" selected>4 x 4 (Classic)</option>
                    <option value="5">5 x 5 (Easy)</option>
                </select>
                
                <button class="btn-primary" onclick="initGame()" style="margin-top: 15px;">
                    <i class="fa-solid fa-rotate-right"></i> Restart Game
                </button>
            </div>
            
            <div class="card" style="display: none;" id="mobileControlsHint">
                <div class="card-title"><i class="fa-solid fa-hand-pointer"></i> How to Play</div>
                <p style="margin:0; font-size: 0.9rem; font-weight: 600;">Swipe Up, Down, Left, or Right on the board to move the tiles.</p>
            </div>
        </div>

        <!-- MAIN GAME AREA -->
        <div class="main-area">
            <div id="gameBox">
                <div id="resultMsg">JOIN THE NUMBERS!</div>
                
                <div class="game-header">
                    <div class="score-pill">
                        SCORE <span id="scoreVal">0</span>
                    </div>
                    <div class="score-pill best-pill">
                        BEST <span id="bestVal">0</span>
                    </div>
                </div>

                <!-- 2048 GRID -->
                <div class="grid-container" id="gridContainer">
                    <div class="grid-bg" id="gridBg"></div>
                    <div class="tile-container" id="tileContainer"></div>
                </div>

            </div>
        </div>
    </div>

    <script>
        // --- TRẠNG THÁI GAME ---
        let size = 4;
        let grid = []; // grid[r][c] = tileId
        let tiles = {}; // id: { r, c, val, el, mergedThisTurn, toDelete }
        let tileIdCounter = 0;
        let score = 0;
        let bestScore = localStorage.getItem('2048-best') || 0;
        let isGameOver = false;
        let isAnimating = false; // Ngăn chặn spam phím

        // --- GIAO DIỆN ---
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

        function updateScores() {
            document.getElementById('scoreVal').innerText = score;
            if (score > bestScore) {
                bestScore = score;
                localStorage.setItem('2048-best', bestScore);
            }
            document.getElementById('bestVal').innerText = bestScore;
        }

        // Hiển thị HD vuốt trên Mobile
        if (window.innerWidth <= 768) {
            document.getElementById('mobileControlsHint').style.display = 'block';
        }

        // --- KHỞI TẠO ---
        function initGame() {
            size = parseInt(document.getElementById('gridSize').value);
            document.documentElement.style.setProperty('--size', size);
            
            grid = Array(size).fill(null).map(() => Array(size).fill(null));
            document.getElementById('tileContainer').innerHTML = '';
            tiles = {};
            tileIdCounter = 0;
            score = 0;
            isGameOver = false;
            isAnimating = false;
            
            updateScores();
            showMessage("JOIN THE NUMBERS!", "transparent");
            
            // Render nền (Background grid)
            const bgEl = document.getElementById('gridBg');
            bgEl.innerHTML = '';
            for (let i = 0; i < size * size; i++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                bgEl.appendChild(cell);
            }

            // Sinh 2 ô đầu tiên
            spawnTile();
            spawnTile();
        }

        function spawnTile() {
            let emptySpots = [];
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    if (!grid[r][c]) emptySpots.push({r, c});
                }
            }

            if (emptySpots.length === 0) return;

            let spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
            let val = Math.random() < 0.9 ? 2 : 4;
            
            let id = 't-' + (tileIdCounter++);
            tiles[id] = { id, r: spot.r, c: spot.c, val, mergedThisTurn: false, toDelete: false };
            grid[spot.r][spot.c] = id;

            createTileDOM(id);
        }

        function createTileDOM(id) {
            let t = tiles[id];
            let el = document.createElement('div');
            el.className = 'tile new val-' + (t.val > 2048 ? 'super' : t.val);
            
            // Set position via translate
            el.style.transform = 'translate(' + (t.c * 100) + '%, ' + (t.r * 100) + '%)';
            
            let inner = document.createElement('div');
            inner.className = 'tile-inner';
            inner.innerText = t.val;
            
            el.appendChild(inner);
            t.el = el;
            
            document.getElementById('tileContainer').appendChild(el);
            
            // Xóa class 'new' sau khi chạy animation xong
            setTimeout(() => {
                if (t.el) t.el.classList.remove('new');
            }, 300);
        }

        // --- CẬP NHẬT DOM SAU KHI DI CHUYỂN ---
        function updateDOM() {
            for (let id in tiles) {
                let t = tiles[id];
                if (t.el) {
                    t.el.style.transform = 'translate(' + (t.c * 100) + '%, ' + (t.r * 100) + '%)';
                    
                    if (t.mergedThisTurn) {
                        t.el.className = 'tile merged val-' + (t.val > 2048 ? 'super' : t.val);
                        t.el.querySelector('.tile-inner').innerText = t.val;
                    }
                }
            }
        }

        function cleanupDeletedTiles() {
            for (let id in tiles) {
                if (tiles[id].toDelete) {
                    if (tiles[id].el) tiles[id].el.remove();
                    delete tiles[id];
                } else {
                    // Reset cờ merge
                    tiles[id].mergedThisTurn = false;
                    if (tiles[id].el) tiles[id].el.classList.remove('merged');
                }
            }
        }

        // --- LOGIC DI CHUYỂN ---
        // 0: Lên, 1: Phải, 2: Xuống, 3: Trái
        function move(dir) {
            if (isGameOver || isAnimating) return;

            let moved = false;
            let dr = [-1, 0, 1, 0][dir];
            let dc = [0, 1, 0, -1][dir];

            // Xác định hướng duyệt lưới
            let rStart = dr === 1 ? size - 1 : 0;
            let rEnd = dr === 1 ? -1 : size;
            let rStep = dr === 1 ? -1 : 1;

            let cStart = dc === 1 ? size - 1 : 0;
            let cEnd = dc === 1 ? -1 : size;
            let cStep = dc === 1 ? -1 : 1;

            for (let r = rStart; r !== rEnd; r += rStep) {
                for (let c = cStart; c !== cEnd; c += cStep) {
                    let tileId = grid[r][c];
                    if (!tileId) continue;

                    let currR = r;
                    let currC = c;
                    let nextR = currR + dr;
                    let nextC = currC + dc;

                    // Trượt khối đến khi chạm tường hoặc khối khác
                    while (nextR >= 0 && nextR < size && nextC >= 0 && nextC < size) {
                        let nextTileId = grid[nextR][nextC];
                        
                        if (!nextTileId) {
                            // Ô trống -> Trượt tiếp
                            grid[nextR][nextC] = tileId;
                            grid[currR][currC] = null;
                            tiles[tileId].r = nextR;
                            tiles[tileId].c = nextC;
                            currR = nextR;
                            currC = nextC;
                            nextR += dr;
                            nextC += dc;
                            moved = true;
                        } else {
                            // Chạm một khối khác
                            let nextTile = tiles[nextTileId];
                            let currTile = tiles[tileId];
                            
                            // Nếu cùng giá trị và khối bị va chạm chưa hợp nhất trong lượt này
                            if (nextTile.val === currTile.val && !nextTile.mergedThisTurn) {
                                grid[currR][currC] = null;
                                currTile.r = nextR;
                                currTile.c = nextC;
                                currTile.toDelete = true;

                                nextTile.val *= 2;
                                nextTile.mergedThisTurn = true;
                                score += nextTile.val;
                                moved = true;
                                
                                if (nextTile.val === 2048) {
                                    setTimeout(() => showMessage("🏆 2048 REACHED! KEEP GOING!", "var(--wf-gold)"), 200);
                                }
                            }
                            break; // Dừng lại sau khi va chạm
                        }
                    }
                }
            }

            if (moved) {
                isAnimating = true;
                updateScores();
                updateDOM();
                
                // Đợi CSS transition kết thúc (150ms)
                setTimeout(() => {
                    cleanupDeletedTiles();
                    spawnTile();
                    checkGameOver();
                    isAnimating = false;
                }, 150);
            }
        }

        // --- KIỂM TRA THUA ---
        function checkGameOver() {
            // Kiểm tra xem còn ô trống không
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    if (!grid[r][c]) return; // Còn ô trống -> Chưa thua
                }
            }

            // Kiểm tra xem có khối nào kề nhau giống nhau không
            const dirs = [[0,1], [1,0]];
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    let currentVal = tiles[grid[r][c]].val;
                    for (let d of dirs) {
                        let nr = r + d[0];
                        let nc = c + d[1];
                        if (nr < size && nc < size) {
                            if (tiles[grid[nr][nc]].val === currentVal) return; // Có thể merge -> Chưa thua
                        }
                    }
                }
            }

            // Hết nước đi
            isGameOver = true;
            showMessage("💀 GAME OVER! NO MORE MOVES.", "var(--wf-red)", "var(--wf-white)");
        }

        // --- ĐIỀU KHIỂN ---
        // Bàn phím
        window.addEventListener('keydown', e => {
            if (isGameOver) return;
            if (["ArrowUp", "w", "W"].includes(e.key)) { e.preventDefault(); move(0); }
            if (["ArrowRight", "d", "D"].includes(e.key)) { e.preventDefault(); move(1); }
            if (["ArrowDown", "s", "S"].includes(e.key)) { e.preventDefault(); move(2); }
            if (["ArrowLeft", "a", "A"].includes(e.key)) { e.preventDefault(); move(3); }
        });

        // Vuốt cảm ứng (Swipe)
        let touchStartX = null;
        let touchStartY = null;

        const gridContainer = document.getElementById('gridContainer');
        
        gridContainer.addEventListener('touchstart', e => {
            if (e.touches.length > 1) return; // Bỏ qua nếu chạm nhiều ngón
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            e.preventDefault(); // Ngăn cuộn trang khi đang vuốt trên lưới
        }, { passive: false });

        gridContainer.addEventListener('touchmove', e => {
            e.preventDefault(); 
        }, { passive: false });

        gridContainer.addEventListener('touchend', e => {
            if (!touchStartX || !touchStartY || isGameOver) return;

            let touchEndX = e.changedTouches[0].clientX;
            let touchEndY = e.changedTouches[0].clientY;

            let dx = touchEndX - touchStartX;
            let dy = touchEndY - touchStartY;
            
            let absDx = Math.abs(dx);
            let absDy = Math.abs(dy);

            // Cần vuốt một đoạn tối thiểu (threshold)
            if (Math.max(absDx, absDy) > 30) {
                if (absDx > absDy) {
                    move(dx > 0 ? 1 : 3); // Phải hoặc Trái
                } else {
                    move(dy > 0 ? 2 : 0); // Xuống hoặc Lên
                }
            }

            touchStartX = null;
            touchStartY = null;
        });

        // Khởi động
        window.onload = initGame;

    </script>
</body>
</html>`;
