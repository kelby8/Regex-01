export class Grammar {
    constructor(grammar: string) {

        let sequence: string = grammar;
        let symbols: Set<string> = new Set();
        let definitions: Set<RegExp> = new Set();
        let trial: string[] = sequence.split("\n");
        for (let i = 0; i < trial.length; ++i) {
            let current: string[] = trial[i].split("->");
            console.log(current)
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
                catch{
                    console.log(sequence);
                    console.log(current[1] + "\n");
                }
            }
        }
    }
}