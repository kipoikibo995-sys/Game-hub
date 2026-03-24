export const speedTypeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speed Type - Brutalist Game Hub</title>
    
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
            max-width: 600px;
            background: var(--wf-white);
            border: 4px solid var(--wf-dark);
            box-shadow: 8px 8px 0px 0px var(--wf-dark);
            border-radius: 12px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .stats {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 20px;
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

        .word-display {
            font-size: 4rem;
            font-weight: 900;
            text-transform: uppercase;
            margin: 40px 0;
            color: var(--wf-blue);
            text-shadow: 4px 4px 0px var(--wf-dark);
            letter-spacing: -2px;
            text-align: center;
            min-height: 1.2em;
        }

        input {
            width: 100%;
            padding: 20px;
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            border: 4px solid var(--wf-dark);
            border-radius: 8px;
            box-shadow: 6px 6px 0px 0px var(--wf-dark);
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

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

        .timer-bar {
            width: 100%;
            height: 10px;
            background: var(--wf-cream);
            border: 2px solid var(--wf-dark);
            margin-bottom: 20px;
            overflow: hidden;
        }

        .timer-fill {
            height: 100%;
            background: var(--wf-red);
            width: 100%;
            transition: width 0.1s linear;
        }
    </style>
</head>
<body>
    <h1>Speed <span style="color: var(--wf-red)">Type</span></h1>
    <div class="subtitle">Type the words as fast as you can!</div>

    <div class="game-container">
        <div class="stats">
            <div class="stat-box">SCORE: <span id="score">0</span></div>
            <div class="stat-box">TIME: <span id="time">5</span>s</div>
        </div>

        <div class="timer-bar">
            <div id="timer-fill" class="timer-fill"></div>
        </div>

        <div id="word" class="word-display">READY?</div>
        <input type="text" id="input" placeholder="TYPE HERE..." autocomplete="off" disabled>

        <div id="msg" class="msg">PRESS START TO PLAY</div>
        <button id="start" class="start-btn" onclick="startGame()">Start Game</button>
    </div>

    <script>
        const WORDS = [
            'BRUTALIST', 'DESIGN', 'INTERFACE', 'REACTION', 'CHALLENGE', 
            'PIXELS', 'CANVAS', 'DYNAMIC', 'LAYOUT', 'TYPOGRAPHY',
            'VIBRANT', 'CONTRAST', 'MODERN', 'RETRO', 'ARCADE',
            'DEVELOPER', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'JAVASCRIPT',
            'REACT', 'TAILWIND', 'VITE', 'EXPRESS', 'FIREBASE',
            'DATABASE', 'CLOUD', 'SERVER', 'CLIENT', 'BROWSER'
        ];

        let score = 0;
        let time = 5;
        let isPlaying = false;
        let timer;
        let currentWord;

        const wordEl = document.getElementById('word');
        const inputEl = document.getElementById('input');
        const scoreEl = document.getElementById('score');
        const timeEl = document.getElementById('time');
        const timerFill = document.getElementById('timer-fill');
        const msgEl = document.getElementById('msg');
        const startBtn = document.getElementById('start');

        function startGame() {
            score = 0;
            time = 5;
            isPlaying = true;
            scoreEl.innerText = score;
            timeEl.innerText = time;
            inputEl.disabled = false;
            inputEl.value = '';
            inputEl.focus();
            startBtn.style.display = 'none';
            msgEl.innerText = '';
            
            showNextWord();
            startTimer();
        }

        function showNextWord() {
            currentWord = WORDS[Math.floor(Math.random() * WORDS.length)];
            wordEl.innerText = currentWord;
        }

        function startTimer() {
            clearInterval(timer);
            timer = setInterval(() => {
                time--;
                timeEl.innerText = time;
                timerFill.style.width = (time / 5) * 100 + '%';

                if (time <= 0) {
                    gameOver();
                }
            }, 1000);
        }

        inputEl.addEventListener('input', () => {
            if (!isPlaying) return;

            if (inputEl.value.toUpperCase() === currentWord) {
                score++;
                scoreEl.innerText = score;
                inputEl.value = '';
                showNextWord();
                time = 5; // Reset time
                timeEl.innerText = time;
                timerFill.style.width = '100%';
                window.parent.postMessage({ type: 'SCORE_UPDATE', score: score }, '*');
            }
        });

        function gameOver() {
            clearInterval(timer);
            isPlaying = false;
            inputEl.disabled = true;
            msgEl.innerText = '💀 GAME OVER!';
            msgEl.style.color = 'var(--wf-red)';
            startBtn.innerText = 'Try Again';
            startBtn.style.display = 'block';
            window.parent.postMessage({ type: 'GAME_OVER', score: score }, '*');
        }
    </script>
</body>
</html>`;
