export const hangmanChallengeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman Challenge</title>
    
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

        html, body {
            height: 100%;
            margin: 0;
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
            margin: 0;
            color: var(--wf-dark);
            font-size: clamp(1.5rem, 4vw, 2.2rem);
            font-weight: 900;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: -1px;
            text-shadow: 2px 2px 0px #fff;
            line-height: 1;
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
            margin-bottom: 10px;
            font-size: 0.85rem;
            font-weight: 800;
            text-align: center;
            background: var(--wf-white);
            border: 2px solid var(--wf-dark);
            padding: 4px 12px;
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
            color: var(--wf-dark);
            text-transform: uppercase;
            transform: rotate(-0.5deg);
        }

        /* LAYOUT */
        .container {
            display: flex;
            gap: 15px;
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
        select, input[type="text"] {
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

        input[type="text"] {
            cursor: text;
        }

        input[type="text"]::placeholder {
            color: #94a3b8;
            font-weight: 600;
            text-transform: none;
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
        
        .score-display.danger {
            background: var(--wf-red);
            color: var(--wf-white);
        }

        /* HANGMAN DRAWING */
        .hangman-container {
            width: 180px;
            height: 180px;
            margin: 0 auto 10px;
            background: var(--wf-cream);
            border: 3px solid var(--wf-dark);
            border-radius: 8px;
            box-shadow: 4px 4px 0px 0px rgba(0,0,0,0.2);
            position: relative;
        }

        .hangman-svg {
            width: 100%;
            height: 100%;
        }

        .hm-part {
            stroke: var(--wf-dark);
            stroke-width: 8;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: transparent;
            display: none; /* Hidden by default */
        }

        .hm-base { display: block; } /* Base pole always visible */
        
        /* Colored body parts for Pop-Art feel */
        .hm-head { fill: var(--wf-white); stroke: var(--wf-dark); }
        .hm-body { stroke: var(--wf-blue); }
        .hm-arm-l, .hm-arm-r { stroke: var(--wf-orange); }
        .hm-leg-l, .hm-leg-r { stroke: var(--wf-green); }

        /* WORD DISPLAY */
        .word-display {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            margin-bottom: 15px;
            width: 100%;
        }

        .letter-box {
            width: clamp(30px, 6vw, 40px);
            height: clamp(40px, 8vw, 50px);
            background: var(--wf-white);
            border: 3px solid var(--wf-dark);
            border-radius: 6px;
            box-shadow: 3px 3px 0px 0px var(--wf-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: clamp(1.2rem, 4vw, 1.8rem);
            font-weight: 900;
            color: var(--wf-dark);
            text-transform: uppercase;
        }

        .letter-box.empty {
            color: transparent;
        }

        .letter-box.space {
            background: transparent;
            border: none;
            box-shadow: none;
            width: clamp(15px, 4vw, 25px); /* Làm cho khoảng trắng hẹp lại một chút */
        }

        /* KEYBOARD */
        .keyboard {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            width: 100%;
            max-width: 600px;
        }

        .key-btn {
            background: var(--wf-white);
            border: 2px solid var(--wf-dark);
            padding: 6px 10px;
            border-radius: 6px;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1rem;
            cursor: pointer;
            box-shadow: 2px 2px 0px 0px var(--wf-dark);
            transition: all 0.1s;
        }

        .key-btn:hover:not(:disabled) {
            background: var(--wf-gold);
            transform: translate(-2px, -2px);
            box-shadow: 5px 5px 0px 0px var(--wf-dark);
        }

        .key-btn:active:not(:disabled) {
            transform: translate(2px, 2px);
            box-shadow: 1px 1px 0px 0px var(--wf-dark);
        }

        .key-btn.correct {
            background: var(--wf-green) !important;
            color: var(--wf-dark) !important;
            opacity: 0.8;
            pointer-events: none;
            box-shadow: 1px 1px 0px 0px var(--wf-dark);
            transform: translate(2px, 2px);
        }

        .key-btn.wrong {
            background: var(--wf-red) !important;
            color: var(--wf-white) !important;
            opacity: 0.8;
            pointer-events: none;
            box-shadow: 1px 1px 0px 0px var(--wf-dark);
            transform: translate(2px, 2px);
        }

        @media (max-width: 768px) {
            body { padding: 10px; }
            .container { flex-direction: column; align-items: center; gap: 15px; }
            .sidebar { width: 100%; max-width: 100%; min-width: 0; }
            .game-header { flex-direction: column; text-align: center; }
            #gameBox { padding: 15px; }
            .key-btn { padding: 8px 12px; font-size: 1.1rem; }
            h1 { font-size: 2rem; }
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
                <div class="card-title"><i class="fa-solid fa-book"></i> Category</div>
                <select id="wordCategory" style="margin-bottom: 15px;">
                    <option value="animals" selected>Animals</option>
                    <option value="colors">Colors</option>
                    <option value="tech">Technology</option>
                    <option value="space">Space</option>
                    <option value="countries">Countries</option>
                    <option value="movies">Movies</option>
                    <option value="sports">Sports</option>
                    <option value="food">Food</option>
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
                    <div class="score-display" id="mistakesBox">
                        MISTAKES: <span id="mistakeCount">0</span>/6
                    </div>
                </div>

                <!-- HINT DISPLAY -->
                <div id="hintMsg" style="font-size: 1.1rem; font-weight: 800; text-align: center; margin-bottom: 20px; color: var(--wf-gray); min-height: 25px;"></div>
                
                <!-- HANGMAN DRAWING -->
                <div class="hangman-container">
                    <svg class="hangman-svg" viewBox="0 0 250 250">
                        <!-- Base Scaffold (Always visible) -->
                        <path class="hm-base" stroke="var(--wf-dark)" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"
                              d="M 40 220 L 140 220 M 90 220 L 90 30 L 180 30 L 180 50" />
                        
                        <!-- Dynamic Parts (Hidden by default) -->
                        <circle id="hm-part-1" class="hm-part hm-head" cx="180" cy="80" r="25" />
                        <line id="hm-part-2" class="hm-part hm-body" x1="180" y1="105" x2="180" y2="160" />
                        <line id="hm-part-3" class="hm-part hm-arm-l" x1="180" y1="120" x2="140" y2="145" />
                        <line id="hm-part-4" class="hm-part hm-arm-r" x1="180" y1="120" x2="220" y2="145" />
                        <line id="hm-part-5" class="hm-part hm-leg-l" x1="180" y1="160" x2="150" y2="205" />
                        <line id="hm-part-6" class="hm-part hm-leg-r" x1="180" y1="160" x2="210" y2="205" />
                    </svg>
                </div>

                <!-- MYSTERY WORD -->
                <div class="word-display" id="wordDisplay">
                    <!-- Boxes generated by JS -->
                </div>

                <!-- KEYBOARD -->
                <div class="keyboard" id="keyboard">
                    <!-- Buttons generated by JS -->
                </div>

            </div>
        </div>
    </div>

    <script>
        // Word Dictionaries with Hints
        const DICTIONARIES = {
            animals: [
                {word: 'TIGER', hint: 'Largest living cat species with dark vertical stripes.'},
                {word: 'LION', hint: 'King of the jungle.'},
                {word: 'ELEPHANT', hint: 'Large mammal with a trunk.'},
                {word: 'MONKEY', hint: 'Primate known for swinging in trees.'},
                {word: 'GIRAFFE', hint: 'Tallest living terrestrial animal with a long neck.'},
                {word: 'ZEBRA', hint: 'African equine with black-and-white striped coats.'},
                {word: 'KANGAROO', hint: 'Marsupial from Australia that hops.'},
                {word: 'PANDA', hint: 'Bear native to China with black and white patches.'},
                {word: 'DOLPHIN', hint: 'Highly intelligent marine mammal.'},
                {word: 'PENGUIN', hint: 'Flightless aquatic bird living in the Antarctic.'},
                {word: 'RHINOCEROS', hint: 'Large herbivore with one or two horns on its snout.'},
                {word: 'CHEETAH', hint: 'Fastest land animal.'},
                {word: 'OSTRICH', hint: 'Largest living bird, cannot fly.'},
                {word: 'GORILLA', hint: 'Large, powerful ape.'},
                {word: 'KOALA', hint: 'Australian marsupial that eats eucalyptus leaves.'}
            ],
            colors: [
                {word: 'MAGENTA', hint: 'A purplish-red color.'},
                {word: 'CRIMSON', hint: 'A rich, deep red color inclining to purple.'},
                {word: 'GREEN', hint: 'Color of growing grass and leaves.'},
                {word: 'YELLOW', hint: 'Color of the sun and lemons.'},
                {word: 'PURPLE', hint: 'Color made by mixing red and blue.'},
                {word: 'ORANGE', hint: 'Color of a popular citrus fruit.'},
                {word: 'TURQUOISE', hint: 'A greenish-blue color.'},
                {word: 'MAROON', hint: 'A dark brownish-red color.'},
                {word: 'WHITE', hint: 'Color of snow and milk.'},
                {word: 'BROWN', hint: 'Color of earth and wood.'},
                {word: 'INDIGO', hint: 'A deep color between blue and violet.'},
                {word: 'LAVENDER', hint: 'A pale purple color, also a flower.'}
            ],
            tech: [
                {word: 'COMPUTER', hint: 'Electronic device for storing and processing data.'},
                {word: 'INTERNET', hint: 'Global network providing information.'},
                {word: 'SOFTWARE', hint: 'Programs and operating information used by a computer.'},
                {word: 'HARDWARE', hint: 'Physical components of a computer.'},
                {word: 'LAPTOP', hint: 'Portable computer.'},
                {word: 'MOBILE', hint: 'Portable telephone.'},
                {word: 'KEYBOARD', hint: 'Panel of keys used to type.'},
                {word: 'PROCESSOR', hint: 'The brain of a computer.'},
                {word: 'SCREEN', hint: 'Flat panel on which images are displayed.'},
                {word: 'SERVER', hint: 'Computer that manages network resources.'},
                {word: 'DATABASE', hint: 'Structured set of data held in a computer.'},
                {word: 'ROUTER', hint: 'Device that forwards data packets between networks.'}
            ],
            space: [
                {word: 'PLANET', hint: 'Celestial body moving in an orbit around a star.'},
                {word: 'GALAXY', hint: 'System of millions or billions of stars.'},
                {word: 'UNIVERSE', hint: 'All existing matter and space considered as a whole.'},
                {word: 'METEOR', hint: 'Small body of matter from outer space that enters the earth\\\'s atmosphere.'},
                {word: 'COMET', hint: 'Celestial object consisting of a nucleus of ice and dust.'},
                {word: 'ASTRONAUT', hint: 'Person trained to travel in a spacecraft.'},
                {word: 'NEBULA', hint: 'Cloud of gas and dust in outer space.'},
                {word: 'ASTEROID', hint: 'Small rocky body orbiting the sun.'},
                {word: 'ORBIT', hint: 'Curved trajectory of an object.'},
                {word: 'ROCKET', hint: 'Cylindrical projectile that can be propelled to a great height.'},
                {word: 'SATELLITE', hint: 'Artificial body placed in orbit.'},
                {word: 'ECLIPSE', hint: 'Obscuring of the light from one celestial body by the passage of another.'}
            ],
            countries: [
                {word: 'CANADA', hint: 'North American country with a maple leaf flag.'},
                {word: 'BRAZIL', hint: 'Largest country in South America.'},
                {word: 'JAPAN', hint: 'Island nation known for sushi and cherry blossoms.'},
                {word: 'EGYPT', hint: 'African country famous for ancient pyramids.'},
                {word: 'AUSTRALIA', hint: 'Country that is also a continent.'},
                {word: 'FRANCE', hint: 'European country famous for the Eiffel Tower.'},
                {word: 'ITALY', hint: 'European country shaped like a boot.'},
                {word: 'MEXICO', hint: 'Country known for tacos and mariachi music.'},
                {word: 'INDIA', hint: 'Asian country known for the Taj Mahal.'},
                {word: 'GERMANY', hint: 'European country known for the Berlin Wall and Oktoberfest.'}
            ],
            movies: [
                {word: 'TITANIC', hint: 'A famous ship that sank in 1912.'},
                {word: 'AVATAR', hint: 'Sci-fi movie with tall blue aliens.'},
                {word: 'INCEPTION', hint: 'A thief enters people\\\'s dreams to steal secrets.'},
                {word: 'MATRIX', hint: 'Neo discovers the truth about simulated reality.'},
                {word: 'GLADIATOR', hint: 'Maximus seeks revenge in the Roman arena.'},
                {word: 'JAWS', hint: 'You\\\'re gonna need a bigger boat.'},
                {word: 'ROCKY', hint: 'Famous movie about a boxer from Philadelphia.'},
                {word: 'ALIEN', hint: 'In space, no one can hear you scream.'},
                {word: 'JURASSIC PARK', hint: 'Dinosaurs brought back to life in a theme park.'},
                {word: 'STAR WARS', hint: 'May the Force be with you.'}
            ],
            sports: [
                {word: 'SOCCER', hint: 'Played with a round ball and feet.'},
                {word: 'BASKETBALL', hint: 'Shoot the ball through a hoop.'},
                {word: 'TENNIS', hint: 'Played with a racket and a fuzzy yellow ball.'},
                {word: 'BASEBALL', hint: 'Hit the ball with a bat and run the bases.'},
                {word: 'SWIMMING', hint: 'Moving through water using your body.'},
                {word: 'VOLLEYBALL', hint: 'Hit the ball over a high net with your hands.'},
                {word: 'GOLF', hint: 'Played with clubs on a large outdoor course.'},
                {word: 'BOXING', hint: 'Two people fight using padded gloves.'},
                {word: 'RUGBY', hint: 'Physical team sport with an oval ball.'},
                {word: 'CRICKET', hint: 'Bat-and-ball game played between two teams of eleven.'}
            ],
            food: [
                {word: 'PIZZA', hint: 'Italian dish with a round, flat base topped with cheese and tomato.'},
                {word: 'BURGER', hint: 'Patty of ground meat placed inside a sliced bun.'},
                {word: 'SUSHI', hint: 'Japanese dish consisting of vinegared rice and seafood.'},
                {word: 'PASTA', hint: 'Italian food made from unleavened dough, often served with sauce.'},
                {word: 'SALAD', hint: 'Dish consisting of mixed raw vegetables.'},
                {word: 'PANCAKE', hint: 'Flat cake, often thin and round, cooked on a hot surface.'},
                {word: 'WAFFLE', hint: 'Like a pancake but with a grid pattern.'},
                {word: 'CHOCOLATE', hint: 'Sweet brown food preparation of roasted cacao seeds.'},
                {word: 'ICE CREAM', hint: 'Sweet frozen food made from milk or cream.'},
                {word: 'SANDWICH', hint: 'Two slices of bread with filling in between.'}
            ]
        };

        // Game State
        let currentWord = "";
        let currentHint = "";
        let guessedLetters = [];
        let mistakes = 0;
        const maxMistakes = 6;
        let gameOver = true;

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

        // Build Keyboard UI
        function createKeyboard() {
            const keyboardDiv = document.getElementById('keyboard');
            keyboardDiv.innerHTML = '';
            
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let letter of alphabet) {
                const btn = document.createElement('button');
                btn.className = 'key-btn';
                btn.id = 'key-' + letter;
                btn.innerText = letter;
                btn.onclick = () => handleGuess(letter);
                keyboardDiv.appendChild(btn);
            }
        }

        // --- CORE LOGIC: GENERATE GAME ---
        function startGame() {
            const category = document.getElementById('wordCategory').value;
            const dict = DICTIONARIES[category];
            
            // Randomly select a word
            const randomObj = dict[Math.floor(Math.random() * dict.length)];
            currentWord = randomObj.word;
            currentHint = randomObj.hint;
            
            // Start with space already "guessed" so spaces in phrases display properly
            guessedLetters = [' ']; 
            mistakes = 0;
            gameOver = false;

            // Reset UI
            document.getElementById('mistakeCount').innerText = mistakes;
            document.getElementById('mistakesBox').classList.remove('danger');
            document.getElementById('hintMsg').innerText = 'HINT: ' + currentHint;
            
            // Hide all hangman parts
            for (let i = 1; i <= maxMistakes; i++) {
                document.getElementById('hm-part-' + i).style.display = 'none';
            }

            createKeyboard();
            renderWord();
            
            showMessage('🤔 GUESS THE MYSTERY WORD!', 'var(--wf-blue)');
            document.getElementById('startBtn').innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game';
        }

        function renderWord() {
            const wordDiv = document.getElementById('wordDisplay');
            wordDiv.innerHTML = '';
            
            let allGuessed = true;

            for (let letter of currentWord) {
                const box = document.createElement('div');
                box.className = 'letter-box';
                
                if (letter === ' ') {
                    box.classList.add('space');
                } else if (guessedLetters.includes(letter)) {
                    box.innerText = letter;
                } else {
                    box.innerText = '';
                    box.classList.add('empty');
                    // Only count non-space letters for win condition
                    allGuessed = false;
                }
                
                wordDiv.appendChild(box);
            }

            if (allGuessed && !gameOver && currentWord.length > 0) {
                gameWin();
            }
        }

        function handleGuess(letter) {
            if (gameOver || guessedLetters.includes(letter)) return;
            
            guessedLetters.push(letter);
            const btn = document.getElementById('key-' + letter);
            
            if (currentWord.includes(letter)) {
                // Correct guess
                btn.classList.add('correct');
                renderWord(); // Rerender will check for win automatically
            } else {
                // Wrong guess
                btn.classList.add('wrong');
                mistakes++;
                updateMistakes();
            }
        }

        function updateMistakes() {
            document.getElementById('mistakeCount').innerText = mistakes;
            
            // Show the next part of the hangman
            if (mistakes <= maxMistakes) {
                document.getElementById('hm-part-' + mistakes).style.display = 'block';
            }

            if (mistakes >= maxMistakes) {
                gameLoss();
            } else if (mistakes === maxMistakes - 1) {
                document.getElementById('mistakesBox').classList.add('danger');
            }
        }

        function gameWin() {
            gameOver = true;
            showMessage('🎉 YOU SAVED HIM! YOU WIN!', 'var(--wf-green)');
            disableKeyboard();
        }

        function gameLoss() {
            gameOver = true;
            showMessage('💀 GAME OVER! THE WORD WAS ' + currentWord + '.', 'var(--wf-red)', 'var(--wf-white)');
            
            // Reveal the word
            guessedLetters = currentWord.split(''); 
            renderWord();
            disableKeyboard();
        }

        function disableKeyboard() {
            const keys = document.getElementsByClassName('key-btn');
            for(let key of keys) {
                key.disabled = true;
            }
        }

        // Physical Keyboard Support
        window.addEventListener('keydown', (e) => {
            if (gameOver) return;
            const letter = e.key.toUpperCase();
            if (/^[A-Z]$/.test(letter)) {
                handleGuess(letter);
            }
        });

        // Initialize empty board on load
        createKeyboard();
        disableKeyboard(); // Disable until "Generate" is clicked

    </script>
</body>
</html>`;
