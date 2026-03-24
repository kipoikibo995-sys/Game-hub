export const mazeEscapeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maze Escape Builder</title>
    
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
            gap: 40px;
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
            max-width: 400px;
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
        }

        #gameBox {
            width: 100%;
            max-width: 600px;
            background: var(--wf-white);
            border: 5px solid var(--wf-dark);
            box-shadow: 10px 10px 0px 0px var(--wf-dark);
            border-radius: 12px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #resultMsg {
            font-size: 1.3rem;
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 15px;
            text-align: center;
            min-height: 35px;
            padding: 5px 15px;
            border-radius: 6px;
        }

        #restartBtn {
            display: none;
            margin-bottom: 20px;
            padding: 10px 20px;
            background: var(--wf-gold);
            border: 3px solid var(--wf-dark);
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1.1rem;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
        }

        #restartBtn:hover {
            background: var(--wf-green);
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
        }

        /* MAZE GRID */
        .maze-grid {
            display: grid;
            width: 100%;
            aspect-ratio: 1; /* Keep it square */
            background: var(--wf-dark);
            border: 4px solid var(--wf-dark);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 6px 6px 0px 0px rgba(0,0,0,0.2);
            /* Custom property for dynamic columns */
            grid-template-columns: repeat(var(--maze-size, 11), 1fr);
            grid-template-rows: repeat(var(--maze-size, 11), 1fr);
        }

        .cell {
            width: 100%;
            height: 100%;
        }

        .path {
            background-color: var(--wf-white);
        }

        .wall {
            background-color: var(--wf-dark);
        }

        .player-cell {
            background-color: var(--wf-white);
            position: relative;
        }
        
        .player-cell::after {
            content: '';
            position: absolute;
            top: 15%; left: 15%; right: 15%; bottom: 15%;
            background-color: var(--wf-blue);
            border: 3px solid var(--wf-dark);
            border-radius: 4px;
            box-shadow: 2px 2px 0px var(--wf-dark);
            z-index: 5;
            transition: all 0.1s;
        }

        .goal-cell {
            background-color: var(--wf-white);
            position: relative;
        }

        .goal-cell::after {
            content: '🚪';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: clamp(1rem, 4vw, 2rem);
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.9); }
            50% { transform: scale(1.1); }
            100% { transform: scale(0.9); }
        }

        /* MOBILE D-PAD */
        .d-pad {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
            width: 100%;
        }

        .d-pad-row {
            display: flex;
            gap: 10px;
        }

        .d-btn {
            width: 60px;
            height: 60px;
            background: var(--wf-gold);
            border: 4px solid var(--wf-dark);
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
            border-radius: 8px;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--wf-dark);
            transition: all 0.1s;
        }

        .d-btn:hover {
            background: var(--wf-orange);
            color: var(--wf-white);
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
        }

        .d-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
        }

        /* Ẩn D-PAD trên màn hình lớn */
        @media (min-width: 769px) {
            .d-pad {
                display: none;
            }
        }

        @media (max-width: 768px) {
            .container { flex-direction: column; align-items: center; }
            .sidebar { width: 100%; max-width: 100%; }
            .main-area { width: 100%; }
            .player-cell::after { border-width: 2px; box-shadow: 1px 1px 0px var(--wf-dark); }
        }
    </style>
</head>
<body>

    <h1>Maze <span class="highlight">Escape</span></h1>
    <div class="subtitle">Navigate the maze and find the exit!</div>

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
                <div class="card-title"><i class="fa-solid fa-gamepad"></i> How to Play</div>
                <p style="margin: 0; font-size: 0.95rem; line-height: 1.6;">
                    <strong>Desktop:</strong> Use the <b>Arrow Keys</b> or <b>W A S D</b> on your keyboard to move.<br>
                    <strong>Mobile:</strong> Use the on-screen D-Pad below the maze.
                </p>
            </div>

            <div class="card">
                <div class="card-title"><i class="fa-solid fa-border-all"></i> Maze Size</div>
                <select id="gridSize">
                    <option value="11">11 x 11 (Easy)</option>
                    <option value="15">15 x 15 (Medium)</option>
                    <option value="21">21 x 21 (Hard)</option>
                </select>
            </div>

            <button class="btn-primary" onclick="startGame()">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Generate Maze
            </button>
        </div>

        <!-- MAIN GAME AREA -->
        <div class="main-area">
            <div id="gameBox">
                <div id="resultMsg"></div>
                <button id="restartBtn" onclick="restartGame()"><i class="fa-solid fa-rotate-right"></i> Play Again</button>
                
                <div id="mazeGrid" class="maze-grid">
                    <!-- Placeholder text before generation -->
                    <div style="text-align: center; color: var(--wf-white); font-weight: 800; font-size: 1.2rem; padding: 40px; grid-column: 1 / -1; align-self: center;">
                        <i class="fa-solid fa-arrow-left" style="font-size: 2rem; margin-bottom: 10px; display: block; color: var(--wf-dark);"></i>
                        <span style="color: var(--wf-dark);">SELECT SIZE & GENERATE MAZE</span>
                    </div>
                </div>

                <!-- ON-SCREEN CONTROLS FOR MOBILE -->
                <div class="d-pad" id="dPad" style="display: none;">
                    <div class="d-btn" onclick="movePlayer(0, -1)"><i class="fa-solid fa-arrow-up"></i></div>
                    <div class="d-pad-row">
                        <div class="d-btn" onclick="movePlayer(-1, 0)"><i class="fa-solid fa-arrow-left"></i></div>
                        <div class="d-btn" onclick="movePlayer(0, 1)"><i class="fa-solid fa-arrow-down"></i></div>
                        <div class="d-btn" onclick="movePlayer(1, 0)"><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script>
        // Các biến trạng thái của trò chơi
        let mazeSize = 11;
        let maze = [];
        let playerPos = { x: 1, y: 1 };
        let goalPos = { x: 1, y: 1 };
        let gameOver = false;

        // Đổi màu nền (Theme)
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

        // Hiển thị thông báo
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

        // Bắt đầu trò chơi
        function startGame() {
            mazeSize = parseInt(document.getElementById("gridSize").value);
            generateMaze(mazeSize);
            
            // Hiển thị D-Pad trên thiết bị di động sau khi game bắt đầu
            if (window.innerWidth <= 768) {
                document.getElementById('dPad').style.display = 'flex';
            }
        }

        // Thuật toán tạo mê cung (Depth-First Search)
        function generateMaze(size) {
            // Khởi tạo toàn bộ là tường (1)
            maze = Array(size).fill().map(() => Array(size).fill(1));
            
            // Bắt đầu từ tọa độ (1,1)
            let stack = [{x: 1, y: 1}];
            maze[1][1] = 0; // 0 là đường đi
            
            while(stack.length > 0) {
                let current = stack[stack.length - 1];
                let neighbors = [];
                
                // Kiểm tra 4 hướng (nhảy qua 2 ô)
                const dirs = [[0,-2], [0,2], [-2,0], [2,0]];
                for(let d of dirs) {
                    let nx = current.x + d[0];
                    let ny = current.y + d[1];
                    // Nếu ô kế tiếp là tường và nằm trong giới hạn
                    if(nx > 0 && nx < size-1 && ny > 0 && ny < size-1 && maze[ny][nx] === 1) {
                        neighbors.push({x: nx, y: ny, dx: d[0]/2, dy: d[1]/2});
                    }
                }
                
                if(neighbors.length > 0) {
                    // Chọn ngẫu nhiên một hướng
                    let next = neighbors[Math.floor(Math.random() * neighbors.length)];
                    maze[current.y + next.dy][current.x + next.dx] = 0; // Phá tường giữa
                    maze[next.y][next.x] = 0; // Đánh dấu ô tiếp theo là đường
                    stack.push({x: next.x, y: next.y});
                } else {
                    stack.pop(); // Quay lui nếu hết đường
                }
            }
            
            // Đặt vị trí ban đầu và đích đến
            playerPos = { x: 1, y: 1 };
            goalPos = { x: size - 2, y: size - 2 };
            maze[goalPos.y][goalPos.x] = 0; // Đảm bảo đích là đường đi
            
            gameOver = false;
            document.getElementById("restartBtn").style.display = "none";
            showMessage('🏃 USE ARROWS TO ESCAPE!', 'var(--wf-gold)');
            
            renderMaze();
        }

        // Vẽ mê cung lên giao diện
        function renderMaze() {
            const grid = document.getElementById("mazeGrid");
            grid.innerHTML = "";
            grid.style.setProperty('--maze-size', mazeSize);

            for (let row = 0; row < mazeSize; row++) {
                for (let col = 0; col < mazeSize; col++) {
                    const cell = document.createElement("div");
                    
                    if (maze[row][col] === 1) {
                        cell.className = "cell wall";
                    } else {
                        cell.className = "cell path";
                    }

                    // Đặt Nhân vật
                    if (row === playerPos.y && col === playerPos.x) {
                        cell.classList.add("player-cell");
                    }
                    
                    // Đặt Cửa ra
                    if (row === goalPos.y && col === goalPos.x && !gameOver) {
                        cell.classList.add("goal-cell");
                    }

                    grid.appendChild(cell);
                }
            }
        }

        // Di chuyển nhân vật
        function movePlayer(dx, dy) {
            if (gameOver) return;

            const newX = playerPos.x + dx;
            const newY = playerPos.y + dy;

            // Kiểm tra xem vị trí mới có phải là đường đi không (0)
            if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize) {
                if (maze[newY][newX] === 0) {
                    playerPos.x = newX;
                    playerPos.y = newY;
                    renderMaze();
                    checkWin();
                }
            }
        }

        // Kiểm tra điều kiện thắng
        function checkWin() {
            if (playerPos.x === goalPos.x && playerPos.y === goalPos.y) {
                gameOver = true;
                showMessage("🎉 YOU ESCAPED! AWESOME!", "var(--wf-green)");
                document.getElementById("restartBtn").style.display = "block";
                document.getElementById('dPad').style.display = 'none'; // Ẩn D-pad khi thắng
                
                // Gửi thông điệp về parent window
                window.parent.postMessage({ type: 'GAME_OVER', score: mazeSize * 10 }, '*');
            }
        }

        // Lắng nghe sự kiện bàn phím
        window.addEventListener('keydown', function(e) {
            if (gameOver || maze.length === 0) return;

            // Ngăn chặn cuộn trang khi nhấn phím mũi tên
            if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].indexOf(e.code) > -1) {
                e.preventDefault();
            }

            switch(e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    movePlayer(0, 1);
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    movePlayer(1, 0);
                    break;
            }
        });

        // Chơi lại
        function restartGame() {
            startGame();
        }
    </script>
</body>
</html>`;
