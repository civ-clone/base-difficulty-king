import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Level 3: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
export class King extends Difficulty {
  static level(): number {
    return 3;
  }
}

export default King;
