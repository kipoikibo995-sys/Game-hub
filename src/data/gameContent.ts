import { wordUnscrambleHTML } from './game-content/word-unscramble';
import { challenge2048HTML } from './game-content/2048-challenge';
import { hangmanChallengeHTML } from './game-content/hangman-challenge';
import { memoryMatchHTML } from './game-content/memory-match';
import { snakeRetroHTML } from './game-content/snake-retro';
import { ticTacToeHTML } from './game-content/tic-tac-toe';
import { whackAMoleHTML } from './game-content/whack-a-mole';
import { sudokuMasterHTML } from './game-content/sudoku-master';
import { mineFinderHTML } from './game-content/mine-finder';
import { blockStackerHTML } from './game-content/block-stacker';
import { brickBreakerHTML } from './game-content/brick-breaker';
import { towerStackerHTML } from './game-content/tower-stacker';
import { mazeEscapeHTML } from './game-content/maze-escape';
import { colorFloodHTML } from './game-content/color-flood';
import { simonSaysHTML } from './game-content/simon-says';
import { speedTypeHTML } from './game-content/speed-type';
import { numberSequenceHTML } from './game-content/number-sequence';
import { slidingPuzzleHTML } from './game-content/sliding-puzzle';
import { tileConnectHTML } from './game-content/tile-connect';
import { wordSearchHTML } from './game-content/word-search';

export const GAME_CONTENT: Record<string, string> = {
  'word-unscramble': wordUnscrambleHTML,
  '2048-challenge': challenge2048HTML,
  'hangman-challenge': hangmanChallengeHTML,
  'memory-match': memoryMatchHTML,
  'snake-retro': snakeRetroHTML,
  'tic-tac-toe': ticTacToeHTML,
  'whack-a-mole': whackAMoleHTML,
  'sudoku-master': sudokuMasterHTML,
  'mine-finder': mineFinderHTML,
  'block-stacker': blockStackerHTML,
  'brick-breaker': brickBreakerHTML,
  'tower-stacker': towerStackerHTML,
  'maze-escape': mazeEscapeHTML,
  'color-flood': colorFloodHTML,
  'simon-says': simonSaysHTML,
  'speed-type': speedTypeHTML,
  'number-sequence': numberSequenceHTML,
  'sliding-puzzle': slidingPuzzleHTML,
  'tile-connect': tileConnectHTML,
  'word-search': wordSearchHTML,
};
