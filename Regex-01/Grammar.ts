export class Grammar {
    sequence: string;
    symbols: Set<string>
    definitions: Set<RegExp>
    terminals: [string, RegExp][]
    nonterminals: [string, string[]][]
    Parameters: string[]
    used: string[]
    failed: boolean
    constructor(grammar: string) {
        this.sequence = grammar;

        this.symbols = new Set();
        this.definitions = new Set();
        this.terminals = [];
        this.nonterminals = [];
        this.used = [];
        this.Parameters = [];
        this.failed = false
        let trial: string[] = this.sequence.split("\n");
        let NonTerminals = false
        this.symbols.add("lambda");
        for (let i = 0; i < trial.length; ++i) {
            if (trial[i] == "") {
                NonTerminals = true
            }
            else {
                if (NonTerminals == false) { //TERMINALS SECTION
                    let current: string[] = trial[i].split("->");
                    if (current[0] != "") {
                        current[0] = current[0].trim();
                        if (current.length > 1) {
                            current[1] = current[1].trim();
                        }
                        else {
                            current.push("lambda")
                        }
                        //console.log(current)
                        let rex = new RegExp(current[1], "gy");
                        if (this.definitions.has(rex)) {
                            console.log("rex reused");
                            this.failed = true
                            throw new Error("redefining a symbol");
                        }
                        else if (this.symbols.has(current[0])) {
                            console.log("symbol reused");
                            this.failed = true
                            throw new Error("redefining a symbol");
                        }
                        else {
                            this.symbols.add(current[0]);
                            this.definitions.add(rex);
                            this.terminals.push([current[0], rex])
                        }
                    }
                }
                else { //NONTERMINALS SECTION
                    let current: string[] = trial[i].split("->");
                    if (current[0] != "") {
                        current[0] = current[0].trim();
                        let LHS = current[0];
                        current[1] = current[1].trim();
                        let RHS = current[1].split("|");
                        for (let k = 0; k < RHS.length; k++) {
                            RHS[k] = RHS[k].trim()
                        }
                        let Both = false;
                        //console.log(current)
                        for (let z = 0; z < this.terminals.length; z++) {
                            if (this.terminals[z][0] == LHS) {
                                Both = true;
                                break
                            }
                        }
                        //console.log(LHS, RHS)
                        if (Both) {
                            //console.log("symbol is both terminal and nonterminal");
                            this.failed = true
                            throw new Error("symbol is both terminal and nonterminal");
                        }
                        else {
                             if (this.symbols.has(LHS)) {
                                for (let z = 0; z < this.nonterminals.length; z++) {
                                    if (this.nonterminals[z][0] == LHS) {
                                        for (let j = 0; j < RHS.length; j++)
                                            this.nonterminals[z][1].push(RHS[j])
                                    }
                                 }
                             }
                             else {
                                this.symbols.add(LHS);
                                this.nonterminals.push([LHS, RHS]);
                             }
                             for (let z = 0; z < RHS.length; z++) {
                                let RHS_temp = RHS[z].split(" ");
                                 for (let j = 0; j < RHS_temp.length; j++) {
                                     if (this.Parameters.includes(RHS_temp[j].trim()) == false) {
                                         this.Parameters.push(RHS_temp[j].trim())
                                     }
                                     if (this.used.includes(RHS_temp[j].trim()) == false) {
                                         this.used.push(RHS_temp[j].trim());
                                     }
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let x = 0; x < this.Parameters.length; x++) {
            if (this.symbols.has(this.Parameters[x]) != true) {
                //console.log(this.Parameters[x]);
                this.failed = true
                throw new Error("undefined symbol in parameters");
            }
        }
        if (this.used.length != this.symbols.size && this.failed == false) {
            console.log(this.symbols);
            console.log(this.used);
            this.failed = true
            throw new Error("not all symbols are used");
        }
    }


    isNullable(N: string): boolean {
        let not = false
        for (let i = 0; i < this.nonterminals.length; i++) {
            if (N == this.nonterminals[i][0]) {
                for (let r = 0; r < this.nonterminals[i][1].length; r++) {
                    let temp = this.nonterminals[i][1][r].split(" ")
                    for (let z = 0; z < temp.length; z++) {
                        if (!this.isNullable(temp[z].trim())) {
                            return false
                        }
                    }
                }
                return true
            }
        }
        if (N == "lambda") {
            return true
        }
        else {
            return false
        }
    }


    getNullable(): [string, string[]][]{
        let nullable = []
        let old = 0
        while (old < 3) {
            for (let N = 0; N < this.nonterminals.length; N++) {
                if (!nullable.includes(this.nonterminals[N])) {
                    let LHS = this.nonterminals[N][0];
                    let RHS = this.nonterminals[N][1];
                    let productions = []
                    let t_nullable = true
                    for (let z = 0; z < RHS.length; z++) {
                        let RHS_temp = RHS[z].split(" ");
                        for (let P = 0; P < RHS_temp.length; P++) {
                            productions.push(RHS_temp[P].trim())
                        }
                    }
                    for (let z = 0; z < productions.length; z++) {
                        if (!this.isNullable(productions[z])) {
                            t_nullable = false
                            break
                        }
                    }
                    if (t_nullable) {
                        nullable.push(this.nonterminals[N])
                        old = 0
                    }
                }
            }
            old += 1
        }
        return nullable
    }
    getFirst(): Map<string, Set<string>> {
        let first = new Map();
        for (let t = 0; t < this.terminals.length; t++) {
            first.set(this.terminals[t], [this.terminals[t]])
        }
        let old = 0
        while (old < 3) {
            for (let N = 0; N < this.nonterminals.length; N++) {
                let RHS = this.nonterminals[N][1];
                for (let z = 0; z < RHS.length; z++) { // z and P are both part of productions
                    let RHS_temp = RHS[z].split(" ");
                    for (let P = 0; P < RHS_temp.length; P++) {
                        for (let x = 0; x < RHS_temp[P].length; x++) {
                            if (first.has(this.nonterminals[N][0])) {
                                let temp = first.get(this.nonterminals[N][0])
                                if (!temp.has(RHS_temp[P][x])) {
                                    temp.add(RHS_temp[P][x])
                                    first.set(this.nonterminals[N][0], RHS_temp[P][x])
                                    old = 0
                                }
                            }
                            else {
                                first.set(this.nonterminals[N][0], RHS_temp[P][x])
                                old = 0
                            }
                            if (!this.isNullable(RHS_temp[P][x])) {
                                break
                            }
                        }
                    }
                }
            }
            old += 1
        }
        return first
    }
    getFollow(): Map<string, Set<string>> {
        let follow = new Map() //key = string, value = set of string
        let first = this.getFirst()
        follow.set("start_symbol", ["$"])
        let old = 0
        while (old < 3) {
            for (let N = 0; N < this.nonterminals.length; N++) {
                let RHS = this.nonterminals[N][1];
                for (let z = 0; z < RHS.length; z++) { // z and P are both part of productions
                    let RHS_temp = RHS[z].split(" ");
                    for (let P = 0; P < RHS_temp.length; P++) {
                        for (let i = 0; i < RHS_temp[P].length; i++) {
                            let x = RHS_temp[P][i]
                            let nonterminal = false
                            for (let X = 0; X < this.nonterminals.length; X++) {
                                if (this.nonterminals[X][0] == x) {
                                    nonterminal = true
                                    break
                                }
                            }
                            if (nonterminal) {
                                let breakout = false
                                for (let y = 0; y < RHS_temp[P].length; y++) {
                                    if (y > i) {
                                        let temp = follow.get(x)
                                        let temp2 = first.get(RHS_temp[P][y])
                                        if (!temp.has(temp2)) {
                                            temp.add(temp2)
                                            follow.set(x, temp)
                                            old = 0
                                        }
                                        if (!this.isNullable(RHS_temp[P][y])) {
                                            breakout = true
                                            break
                                        }
                                    }
                                }
                                if (!breakout) {
                                    let temp = follow.get(x)
                                    let temp2 = follow.get(this.nonterminals[N])
                                    for (let v = 0; v < temp2.length; v++) {
                                        if (!temp.has(temp2[v])) {
                                            temp.add(temp2[v])
                                        }
                                    }
                                    follow.set(x, temp)
                                    old = 0
                                }
                            }
                        }
                    }
                }
            }
            old++
        }
        return follow
    }
}