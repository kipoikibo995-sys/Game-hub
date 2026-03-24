export const simonSaysHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simon Says - Brutalist Game Hub</title>
    
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
            max-width: 400px;
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

        .simon-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            width: 100%;
            aspect-ratio: 1;
            margin-bottom: 20px;
        }

        .pad {
            width: 100%;
            height: 100%;
            border: 6px solid var(--wf-dark);
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            transition: all 0.1s;
            opacity: 0.6;
        }

        .pad:hover {
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px var(--wf-dark);
            opacity: 0.8;
        }

        .pad:active, .pad.active {
            transform: translate(4px, 4px);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
            opacity: 1;
            filter: brightness(1.5);
        }

        .pad-0 { background: var(--wf-red); }
        .pad-1 { background: var(--wf-blue); }
        .pad-2 { background: var(--wf-green); }
        .pad-3 { background: var(--wf-gold); }

        .msg {
            margin-top: 15px;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 1.1rem;
            text-align: center;
            min-height: 1.5em;
        }

        .start-btn {
            margin-top: 15px;
            padding: 15px 30px;
            background: var(--wf-blue);
            border: 4px solid var(--wf-dark);
            font-weight: 900;
            font-size: 1.2rem;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            transition: all 0.1s;
        }

        .start-btn:hover {
            background: var(--wf-orange);
            color: var(--wf-white);
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px 0px var(--wf-dark);
        }

        .start-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
        }
    </style>
</head>
<body>
    <h1>Simon <span style="color: var(--wf-blue)">Says</span></h1>
    <div class="subtitle">Repeat the pattern!</div>

    <div class="game-container">
        <div class="stats">
            <div class="stat-box">SCORE: <span id="score">0</span></div>
        </div>

        <div class="simon-grid">
            <div class="pad pad-0" id="pad-0" onclick="handlePadClick(0)"></div>
            <div class="pad pad-1" id="pad-1" onclick="handlePadClick(1)"></div>
            <div class="pad pad-2" id="pad-2" onclick="handlePadClick(2)"></div>
            <div class="pad pad-3" id="pad-3" onclick="handlePadClick(3)"></div>
        </div>

        <div id="msg" class="msg">PRESS START TO PLAY</div>
        <button id="start" class="start-btn" onclick="startGame()">Start Game</button>
    </div>

    <script>
        let sequence = [];
        let playerSequence = [];
        let score = 0;
        let isPlaying = false;
        let isShowingSequence = false;

        function startGame() {
            sequence = [];
            playerSequence = [];
            score = 0;
            isPlaying = true;
            document.getElementById('score').innerText = score;
            document.getElementById('start').style.display = 'none';
            nextRound();
        }

        function nextRound() {
            playerSequence = [];
            sequence.push(Math.floor(Math.random() * 4));
            showSequence();
        }

        async function showSequence() {
            isShowingSequence = true;
            document.getElementById('msg').innerText = 'WATCH...';
            
            for (let i = 0; i < sequence.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 600));
                flashPad(sequence[i]);
            }
            
            await new Promise(resolve => setTimeout(resolve, 600));
            isShowingSequence = false;
            document.getElementById('msg').innerText = 'YOUR TURN!';
        }

        function flashPad(id) {
            const pad = document.getElementById(\`pad-\${id}\`);
            pad.classList.add('active');
            setTimeout(() => pad.classList.remove('active'), 300);
        }

        function handlePadClick(id) {
            if (!isPlaying || isShowingSequence) return;

            flashPad(id);
            playerSequence.push(id);

            const currentIdx = playerSequence.length - 1;
            if (playerSequence[currentIdx] !== sequence[currentIdx]) {
                gameOver();
                return;
            }

            if (playerSequence.length === sequence.length) {
                score++;
                document.getElementById('score').innerText = score;
                window.parent.postMessage({ type: 'SCORE_UPDATE', score: score }, '*');
                setTimeout(nextRound, 1000);
            }
        }

        function gameOver() {
            isPlaying = false;
            document.getElementById('msg').innerText = '💀 GAME OVER!';
            document.getElementById('msg').style.color = 'var(--wf-red)';
            document.getElementById('start').innerText = 'Try Again';
            document.getElementById('start').style.display = 'block';
            window.parent.postMessage({ type: 'GAME_OVER', score: score }, '*');
        }
    </script>
</body>
</html>`;
