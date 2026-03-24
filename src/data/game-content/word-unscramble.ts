export const wordUnscrambleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Unscramble</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
            background-image: linear-gradient(rgba(0, 0, 0, 0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 2px, transparent 2px);
            background-size: 40px 40px;
            color: var(--wf-dark);
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 10px;
            box-sizing: border-box;
        }
        * { box-sizing: border-box; outline: none; user-select: none; }
        h1 { margin: 10px 0; font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; text-transform: uppercase; letter-spacing: -1px; text-shadow: 2px 2px 0px #fff; }
        .highlight { color: var(--wf-blue); position: relative; z-index: 1; }
        .highlight::after { content: ''; position: absolute; bottom: 5px; left: -5px; right: -5px; height: 12px; background: var(--wf-gold); z-index: -1; transform: skew(-10deg); border: 2px solid var(--wf-dark); }
        .container { display: flex; gap: 20px; width: 100%; max-width: 1000px; flex-wrap: wrap; justify-content: center; }
        .card { background: var(--wf-white); border: 4px solid var(--wf-dark); border-radius: 12px; padding: 15px; shadow: 6px 6px 0px 0px var(--wf-dark); width: 100%; max-width: 300px; box-shadow: 6px 6px 0px 0px var(--wf-dark); }
        .game-box { background: var(--wf-white); border: 4px solid var(--wf-dark); border-radius: 12px; padding: 20px; box-shadow: 8px 8px 0px 0px var(--wf-dark); width: 100%; max-width: 600px; display: flex; flex-direction: column; align-items: center; }
        .guess-area { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 20px 0; min-height: 60px; }
        .letter-box { width: 45px; height: 55px; background: var(--wf-cream); border: 3px dashed var(--wf-dark); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; cursor: pointer; transition: 0.1s; }
        .letter-box.filled { background: var(--wf-white); border-style: solid; box-shadow: 3px 3px 0px var(--wf-dark); }
        .letter-box.correct { background: var(--wf-green) !important; }
        .scrambled-pool { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; padding: 15px; background: var(--wf-dark); border-radius: 10px; width: 100%; }
        .pool-btn { width: 45px; height: 45px; background: var(--wf-white); border: 3px solid var(--wf-dark); border-radius: 6px; font-weight: 900; font-size: 1.2rem; cursor: pointer; box-shadow: 3px 3px 0px var(--wf-orange); transition: 0.1s; }
        .pool-btn.used { opacity: 0.3; cursor: default; box-shadow: none; transform: scale(0.9); }
        button.btn-primary { width: 100%; padding: 12px; border: 3px solid var(--wf-dark); background: var(--wf-blue); font-weight: 900; text-transform: uppercase; cursor: pointer; box-shadow: 4px 4px 0px var(--wf-dark); }
        button.btn-primary:hover { background: var(--wf-orange); color: white; transform: translate(-2px, -2px); box-shadow: 6px 6px 0px var(--wf-dark); }
        .score-display { background: var(--wf-gold); padding: 5px 15px; border: 3px solid var(--wf-dark); font-weight: 900; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <h3 style="margin-top:0">Category</h3>
            <select id="category" style="width:100%; padding:10px; border:3px solid var(--wf-dark); margin-bottom:15px; font-weight:800;">
                <option value="animals">Animals</option>
                <option value="food">Food</option>
                <option value="tech">Tech</option>
            </select>
            <button class="btn-primary" onclick="startGame()" style="margin-bottom:10px;">New Word</button>
            <button class="btn-primary" onclick="clearGuess()" style="background:var(--wf-red); color:white;">Clear Guess</button>
            <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center;">
                <span>Score:</span>
                <span class="score-display" id="score">0</span>
            </div>
        </div>
        <div class="game-box">
            <div id="hint" style="font-weight:700; color:#666; margin-bottom:10px; text-align:center;">Press New Word to start!</div>
            <div class="guess-area" id="guessArea"></div>
            <div class="scrambled-pool" id="pool"></div>
            <div id="msg" style="margin-top:20px; font-weight:900; text-transform:uppercase;"></div>
        </div>
    </div>
    <script>
        const DICT = {
            animals: [
                {w:'TIGER',h:'Big cat with stripes'},
                {w:'LION',h:'King of the jungle'},
                {w:'PANDA',h:'Black and white bear'},
                {w:'ELEPHANT',h:'Large mammal with a trunk'},
                {w:'GIRAFFE',h:'Tallest living terrestrial animal'},
                {w:'ZEBRA',h:'African equine with stripes'},
                {w:'KANGAROO',h:'Marsupial from Australia'},
                {w:'DOLPHIN',h:'Highly intelligent marine mammal'}
            ],
            food: [
                {w:'PIZZA',h:'Italian round dish'},
                {w:'BURGER',h:'Meat in a bun'},
                {w:'SUSHI',h:'Japanese rice rolls'},
                {w:'PASTA',h:'Italian unleavened dough'},
                {w:'SALAD',h:'Dish of mixed raw vegetables'},
                {w:'PANCAKE',h:'Flat cake cooked on a hot surface'},
                {w:'WAFFLE',h:'Like a pancake but with a grid pattern'}
            ],
            tech: [
                {w:'LAPTOP',h:'Portable computer'},
                {w:'MOBILE',h:'Handheld phone'},
                {w:'ROUTER',h:'Provides WiFi'},
                {w:'KEYBOARD',h:'Panel of keys used to type'},
                {w:'PROCESSOR',h:'The brain of a computer'},
                {w:'SERVER',h:'Manages network resources'},
                {w:'DATABASE',h:'Structured set of data'}
            ]
        };
        let word='', hint='', pool=[], guess=[], score=0, over=true;
        function startGame(){
            const cat = document.getElementById('category').value;
            const item = DICT[cat][Math.floor(Math.random()*DICT[cat].length)];
            word = item.w; hint = item.h;
            pool = word.split('').map((c,i)=>({c,i,u:false})).sort(()=>Math.random()-0.5);
            guess = []; over = false;
            document.getElementById('hint').innerText = 'HINT: ' + hint;
            document.getElementById('msg').innerText = '';
            render();
        }
        function render(){
            const ga = document.getElementById('guessArea');
            ga.innerHTML = '';
            word.split('').forEach((_,i)=>{
                const b = document.createElement('div');
                b.className = 'letter-box' + (guess[i]?' filled':'');
                b.innerText = guess[i] ? guess[i].c : '';
                if(guess[i]) b.onclick = () => remove(i);
                ga.appendChild(b);
            });
            const p = document.getElementById('pool');
            p.innerHTML = '';
            pool.forEach(item=>{
                const b = document.createElement('button');
                b.className = 'pool-btn' + (item.u?' used':'');
                b.innerText = item.c;
                if(!item.u) b.onclick = () => add(item);
                p.appendChild(b);
            });
        }
        function add(item){
            if(over) return;
            item.u = true;
            guess.push(item);
            render();
            if(guess.length === word.length) check();
        }
        function remove(idx){
            if(over) return;
            const item = guess[idx];
            item.u = false;
            guess.splice(idx,1);
            render();
        }
        function clearGuess(){
            if(over) return;
            pool.forEach(item => item.u = false);
            guess = [];
            render();
        }
        function check(){
            const g = guess.map(i=>i.c).join('');
            if(g === word){
                over = true; score += 100;
                document.getElementById('score').innerText = score;
                document.getElementById('msg').innerText = 'CORRECT! 🎉';
                document.querySelectorAll('.letter-box').forEach(b=>b.classList.add('correct'));
            } else {
                document.getElementById('msg').innerText = 'WRONG! TRY AGAIN ❌';
            }
        }
    </script>
</body>
</html>`;
