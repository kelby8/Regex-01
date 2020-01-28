"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grammar {
    constructor(grammar) {
        let sequence = grammar;
        let symbols = new Set();
        let definitions = new Set();
        let trial = sequence.split("\n");
        for (let i = 0; i < trial.length; ++i) {
            let current = trial[i].split("->");
            console.log(current);
            if (current[0] != "") {
                current[0] = current[0].trim();
                current[1] = current[1].trim();
                try {
                    let rex = new RegExp(current[1], "gy");
                    if (definitions.has(rex)) {
                        console.log("rex reused");
                        throw new Error("redefining a symbol");
                    }
                    else if (symbols.has(current[0])) {
                        console.log("symbol reused");
                        throw new Error("redefining a symbol");
                    }
                    else {
                        symbols.add(current[0]);
                        definitions.add(rex);
                    }
                }
                catch (_a) {
                    console.log(sequence);
                    console.log(current[1] + "\n");
                }
            }
        }
    }
}
exports.Grammar = Grammar;
//# sourceMappingURL=Grammar.js.map