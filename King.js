"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Level 3: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
class King extends Difficulty_1.default {
    static level() {
        return 3;
    }
}
exports.King = King;
exports.default = King;
//# sourceMappingURL=King.js.map