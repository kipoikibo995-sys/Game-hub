export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  isFeatured?: boolean;
  package: 'FE' | 'OTO1' | 'OTO2';
}

export const GAMES: Game[] = [
  // FE PACKAGE (5 Games) - The Essentials
  {
    id: 'snake-retro',
    title: 'Snake Retro',
    description: 'Classic snake game. Eat food, grow longer, and avoid the walls.',
    category: 'Action',
    icon: 'Zap',
    color: 'bg-wf-green',
    difficulty: 'Hard',
    isFeatured: true,
    package: 'FE'
  },
  {
    id: '2048-challenge',
    title: '2048 Challenge',
    description: 'Slide tiles and merge numbers to reach the ultimate 2048 tile.',
    category: 'Puzzle',
    icon: 'Hash',
    color: 'bg-wf-gold',
    difficulty: 'Medium',
    package: 'FE'
  },
  {
    id: 'brick-breaker',
    title: 'Brick Breaker',
    description: 'Bounce the ball to break all the bricks on the screen.',
    category: 'Action',
    icon: 'Tablet',
    color: 'bg-wf-orange',
    difficulty: 'Medium',
    package: 'FE'
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Test your memory by finding all matching pairs of cards.',
    category: 'Memory',
    icon: 'Brain',
    color: 'bg-wf-blue',
    difficulty: 'Easy',
    package: 'FE'
  },
  {
    id: 'maze-escape',
    title: 'Maze Escape',
    description: 'Navigate through complex mazes to find the exit.',
    category: 'Puzzle',
    icon: 'Map',
    color: 'bg-wf-purple',
    difficulty: 'Medium',
    package: 'FE'
  },

  // OTO 1 PACKAGE (5 Games) - The Hottest Hits
  {
    id: 'whack-a-mole',
    title: 'Whack-A-Mole',
    description: 'Test your reflexes by whacking moles as they pop up.',
    category: 'Action',
    icon: 'Target',
    color: 'bg-wf-orange',
    difficulty: 'Medium',
    package: 'OTO1'
  },
  {
    id: 'speed-type',
    title: 'Speed Type',
    description: 'Type words as fast as possible before time runs out.',
    category: 'Action',
    icon: 'Keyboard',
    color: 'bg-wf-red',
    difficulty: 'Hard',
    package: 'OTO1'
  },
  {
    id: 'block-stacker',
    title: 'Block Stacker',
    description: 'Fit falling blocks together to clear lines and score points.',
    category: 'Puzzle',
    icon: 'Layout',
    color: 'bg-wf-purple',
    difficulty: 'Medium',
    package: 'OTO1'
  },
  {
    id: 'tile-connect',
    title: 'Tile Connect',
    description: 'Connect matching tiles with paths to clear the board.',
    category: 'Puzzle',
    icon: 'Link',
    color: 'bg-wf-green',
    difficulty: 'Medium',
    package: 'OTO1'
  },
  {
    id: 'word-search',
    title: 'Word Search',
    description: 'Find all the hidden words in the grid as fast as possible.',
    category: 'Word',
    icon: 'Search',
    color: 'bg-wf-purple',
    difficulty: 'Medium',
    package: 'OTO1'
  },

  // OTO 2 PACKAGE (10 Games) - The Extended Collection
  {
    id: 'sudoku-master',
    title: 'Sudoku Master',
    description: 'Classic Sudoku logic game with multiple difficulty levels.',
    category: 'Puzzle',
    icon: 'Grid3X3',
    color: 'bg-wf-blue',
    difficulty: 'Hard',
    package: 'OTO2'
  },
  {
    id: 'mine-finder',
    title: 'Mine Finder',
    description: 'Clear the grid without hitting any hidden mines.',
    category: 'Puzzle',
    icon: 'Bomb',
    color: 'bg-wf-red',
    difficulty: 'Hard',
    package: 'OTO2'
  },
  {
    id: 'tower-stacker',
    title: 'Tower Stacker',
    description: 'Stack blocks perfectly to build the tallest tower possible.',
    category: 'Puzzle',
    icon: 'Layers',
    color: 'bg-wf-orange',
    difficulty: 'Easy',
    package: 'OTO2'
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    description: 'Test your memory by repeating the sequence of colors.',
    category: 'Memory',
    icon: 'Gamepad2',
    color: 'bg-wf-green',
    difficulty: 'Medium',
    package: 'OTO2'
  },
  {
    id: 'hangman-challenge',
    title: 'Hangman Challenge',
    description: 'Guess the mystery word letter by letter before the stickman is drawn.',
    category: 'Word',
    icon: 'Skull',
    color: 'bg-wf-red',
    difficulty: 'Medium',
    package: 'OTO2'
  },
  {
    id: 'word-unscramble',
    title: 'Word Unscramble',
    description: 'Rearrange letters to find hidden words across various categories.',
    category: 'Word',
    icon: 'Type',
    color: 'bg-wf-blue',
    difficulty: 'Easy',
    package: 'OTO2'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description: 'Classic X and O game against a friend or a smart CPU.',
    category: 'Strategy',
    icon: 'XCircle',
    color: 'bg-wf-gold',
    difficulty: 'Easy',
    package: 'OTO2'
  },
  {
    id: 'color-flood',
    title: 'Color Flood',
    description: 'Fill the entire board with a single color in limited moves.',
    category: 'Puzzle',
    icon: 'Droplets',
    color: 'bg-wf-blue',
    difficulty: 'Medium',
    package: 'OTO2'
  },
  {
    id: 'number-sequence',
    title: 'Number Sequence',
    description: 'Click numbers in the correct order as fast as you can.',
    category: 'Memory',
    icon: 'Binary',
    color: 'bg-wf-blue',
    difficulty: 'Medium',
    package: 'OTO2'
  },
  {
    id: 'sliding-puzzle',
    title: 'Sliding Puzzle',
    description: 'Arrange the tiles in numerical order by sliding them.',
    category: 'Puzzle',
    icon: 'Move',
    color: 'bg-wf-gold',
    difficulty: 'Hard',
    package: 'OTO2'
  }
];
