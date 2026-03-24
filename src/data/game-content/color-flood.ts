export const colorFloodHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Flood - Brutalist Game Hub</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
            padding: 20px;
            box-sizing: border-box;
            overflow-x: hidden;
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
            text-transform: uppercase;
            transform: rotate(-1deg);
        }

        .game-container {
            width: 100%;
            max-width: 500px;
            background: var(--wf-white);
            border: 4px solid var(--wf-dark);
            box-shadow: 8px 8px 0px 0px var(--wf-dark);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .stats {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 15px;
            font-weight: 900;
            font-size: 1.2rem;
            text-transform: uppercase;
        }

        .stat-box {
            background: var(--wf-gold);
            padding: 5px 15px;
            border: 3px solid var(--wf-dark);
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2px;
            width: 100%;
            aspect-ratio: 1;
            background: var(--wf-dark);
            border: 4px solid var(--wf-dark);
            margin-bottom: 20px;
        }

        .cell {
            width: 100%;
            height: 100%;
            transition: background-color 0.2s;
        }

        .controls {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 100%;
        }

        .color-btn {
            height: 50px;
            border: 4px solid var(--wf-dark);
            cursor: pointer;
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
            transition: transform 0.1s;
        }

        .color-btn:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
        }

        .color-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
        }

        .msg {
            margin-top: 15px;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 1.1rem;
            text-align: center;
            min-height: 1.5em;
        }

        .restart-btn {
            margin-top: 15px;
            padding: 10px 20px;
            background: var(--wf-blue);
            border: 3px solid var(--wf-dark);
            font-weight: 900;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 4px 4px 0px 0px var(--wf-dark);
            display: none;
        }

        .restart-btn:hover {
            background: var(--wf-green);
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
        }

        @media (max-width: 400px) {
            .grid { grid-template-columns: repeat(10, 1fr); }
        }
    </style>
</head>
<body>
    <h1>Color <span style="color: var(--wf-orange)">Flood</span></h1>
    <div class="subtitle">Fill the board with one color!</div>

    <div class="game-container">
        <div class="stats">
            <div class="stat-box">MOVES: <span id="moves">0</span>/25</div>
        </div>

        <div id="grid" class="grid"></div>

        <div class="controls">
            <div class="color-btn" style="background: var(--wf-red)" onclick="flood(0)"></div>
            <div class="color-btn" style="background: var(--wf-blue)" onclick="flood(1)"></div>
            <div class="color-btn" style="background: var(--wf-green)" onclick="flood(2)"></div>
            <div class="color-btn" style="background: var(--wf-gold)" onclick="flood(3)"></div>
            <div class="color-btn" style="background: var(--wf-purple)" onclick="flood(4)"></div>
            <div class="color-btn" style="background: var(--wf-orange)" onclick="flood(5)"></div>
        </div>

        <div id="msg" class="msg"></div>
        <button id="restart" class="restart-btn" onclick="initGame()">Play Again</button>
    </div>

    <script>
        const GRID_SIZE = 12;
        const COLORS = [
            'var(--wf-red)',
            'var(--wf-blue)',
            'var(--wf-green)',
            'var(--wf-gold)',
            'var(--wf-purple)',
            'var(--wf-orange)'
        ];
        const MAX_MOVES = 25;

        let grid = [];
        let moves = 0;
        let gameOver = false;

        function initGame() {
            grid = [];
            moves = 0;
            gameOver = false;
            document.getElementById('moves').innerText = moves;
            document.getElementById('msg').innerText = '';
            document.getElementById('restart').style.display = 'none';
            
            const gridEl = document.getElementById('grid');
            gridEl.innerHTML = '';

            for (let r = 0; r < GRID_SIZE; r++) {
                grid[r] = [];
                for (let c = 0; c < GRID_SIZE; c++) {
                    const colorIdx = Math.floor(Math.random() * COLORS.length);
                    grid[r][c] = colorIdx;
                    
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.id = \`cell-\${r}-\${c}\`;
                    cell.style.backgroundColor = COLORS[colorIdx];
                    gridEl.appendChild(cell);
                }
            }
        }

        function flood(newColorIdx) {
            if (gameOver) return;
            
            const startColorIdx = grid[0][0];
            if (newColorIdx === startColorIdx) return;

            moves++;
            document.getElementById('moves').innerText = moves;

            const cellsToChange = [];
            const queue = [[0, 0]];
            const visited = new Set(['0-0']);

            while (queue.length > 0) {
                const [r, c] = queue.shift();
                cellsToChange.push([r, c]);

                const neighbors = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]];
                for (const [nr, nc] of neighbors) {
                    if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
                        const key = \`\${nr}-\${nc}\`;
                        if (!visited.has(key) && grid[nr][nc] === startColorIdx) {
                            visited.add(key);
                            queue.push([nr, nc]);
                        }
                    }
                }
            }

            for (const [r, c] of cellsToChange) {
                grid[r][c] = newColorIdx;
                document.getElementById(\`cell-\${r}-\${c}\`).style.backgroundColor = COLORS[newColorIdx];
            }

            checkWin();
        }

        function checkWin() {
            const firstColor = grid[0][0];
            const allSame = grid.every(row => row.every(cell => cell === firstColor));

            if (allSame) {
                gameOver = true;
                document.getElementById('msg').innerText = '🎉 YOU FLOODED IT!';
                document.getElementById('msg').style.color = 'var(--wf-green)';
                document.getElementById('restart').style.display = 'block';
                window.parent.postMessage({ type: 'GAME_OVER', score: MAX_MOVES - moves + 100 }, '*');
            } else if (moves >= MAX_MOVES) {
                gameOver = true;
                document.getElementById('msg').innerText = '💀 OUT OF MOVES!';
                document.getElementById('msg').style.color = 'var(--wf-red)';
                document.getElementById('restart').style.display = 'block';
                window.parent.postMessage({ type: 'GAME_OVER', score: moves }, '*');
            }
        }

        initGame();
    </script>
</body>
</html>`;
