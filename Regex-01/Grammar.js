"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}
class Grammar {
    constructor(grammar) {
        this.sequence = grammar;
        this.symbols = new Set();
        this.definitions = new Set();
        this.terminals = [];
        this.nonterminals = [];
        this.used = [];
        this.Parameters = [];
        this.failed = false;
        let trial = this.sequence.split("\n");
        let NonTerminals = false;
        this.lambda = "lambda";
        for (let i = 0; i < trial.length; ++i) {
            if (trial[i] == "") {
                NonTerminals = true;
            }
            else {
                if (NonTerminals == false) { //TERMINALS SECTION
                    let current = trial[i].split("->");
                    if (current[0] != "") {
                        current[0] = current[0].trim();
                        current[1] = current[1].trim();
                        //console.log(current)
                        let rex = new RegExp(current[1], "gy");
                        if (this.definitions.has(rex)) {
                            //console.log("rex reused");
                            this.failed = true;
                            throw new Error("redefining a symbol");
                        }
                        else if (this.symbols.has(current[0])) {
                            //console.log("symbol reused");
                            this.failed = true;
                            throw new Error("redefining a symbol");
                        }
                        else {
                            this.symbols.add(current[0]);
                            this.definitions.add(rex);
                            this.terminals.push([current[0], rex]);
                        }
                    }
                }
                else { //NONTERMINALS SECTION
                    let current = trial[i].split("->");
                    if (current[0] != "") {
                        current[0] = current[0].trim();
                        let LHS = current[0];
                        current[1] = current[1].trim();
                        let RHS = current[1].split("|");
                        for (let k = 0; k < RHS.length; k++) {
                            RHS[k] = RHS[k].trim();
                        }
                        /*let t_lambda = false
                        let temp = []
                        for (let k = 0; k < RHS.length; k++) {
                            if (RHS[k] != this.lambda) {
                                temp.push(RHS[k])
                            }
                            else {
                                t_lambda = true
                            }
                        }
                        RHS = temp*/
                        let Both = false;
                        //console.log(current)
                        for (let z = 0; z < this.terminals.length; z++) {
                            if (this.terminals[z][0] == LHS) {
                                Both = true;
                                break;
                            }
                        }
                        //console.log(LHS, RHS)
                        if (Both) {
                            //console.log("symbol is both terminal and nonterminal");
                            this.failed = true;
                            throw new Error("symbol is both terminal and nonterminal");
                        }
                        else {
                            if (this.symbols.has(LHS)) {
                                for (let z = 0; z < this.nonterminals.length; z++) {
                                    if (this.nonterminals[z][0] == LHS) {
                                        let temp = [];
                                        for (let j = 0; j < RHS.length; j++) {
                                            let temp2 = RHS[j].split(" ");
                                            temp = temp2;
                                        }
                                        this.nonterminals[z][1].push(temp);
                                    }
                                }
                            }
                            else {
                                this.symbols.add(LHS);
                                let temp = [];
                                for (let j = 0; j < RHS.length; j++) {
                                    let temp2 = RHS[j].split(" ");
                                    temp.push(temp2);
                                }
                                //console.log(temp)
                                this.nonterminals.push([LHS, temp]);
                            }
                        }
                    }
                }
            }
        }
        for (let x = 0; x < this.nonterminals.length; x++) {
            let temp = this.nonterminals[x][1];
            for (let y = 0; y < temp.length; y++) {
                for (let z = 0; z < temp[y].length; z++) {
                    if (!this.used.includes(temp[y][z])) {
                        this.used.push(temp[y][z]);
                    }
                }
            }
        }
        if (this.used.length < this.nonterminals.length + this.terminals.length) {
            let missing = [];
            for (let y = 0; y < this.terminals.length; y++) {
                if (!this.used.includes(this.terminals[y][0])) {
                    missing.push(this.terminals[y][0]);
                }
            }
            for (let y = 0; y < this.nonterminals.length; y++) {
                if (!this.used.includes(this.nonterminals[y][0])) {
                    missing.push(this.nonterminals[y][0]);
                }
            }
            throw new Error("not all symbols used");
        }
        for (let x = 0; x < this.used.length; x++) {
            let found = false;
            let temp = this.used[x];
            for (let y = 0; y < this.terminals.length; y++) {
                if (this.terminals[y][0] == temp) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                for (let y = 0; y < this.nonterminals.length; y++) {
                    if (this.nonterminals[y][0] == temp) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                throw new Error("undefined symbol being used");
            }
        }
    }
    getNullable() {
        let nullable = [];
        let old = 0;
        while (old < 3) {
            for (let N = 0; N < this.nonterminals.length; N++) {
                if (!nullable.includes(this.nonterminals[N][0])) {
                    let LHS = this.nonterminals[N][0];
                    let RHS = this.nonterminals[N][1];
                    let t_nullable = true;
                    let t_lambda = false;
                    for (let z = 0; z < RHS.length; z++) {
                        let temp = RHS[z];
                        for (let L = 0; L < temp.length; L++) {
                            t_nullable = true;
                            if (temp[L] == this.lambda) {
                                t_lambda = true;
                                break;
                            }
                            if (!nullable.includes(temp[L]) && temp[L] != this.lambda) {
                                t_nullable = false;
                                break;
                            }
                        }
                        if (t_nullable) {
                            t_lambda = true;
                        }
                    }
                    if (t_lambda) {
                        nullable.push(this.nonterminals[N][0]);
                        old = 0;
                    }
                }
            }
            old += 1;
        }
        return nullable;
    }
    getFirst() {
        let first = new Map();
        for (let t = 0; t < this.terminals.length; t++) {
            let test = new Set();
            test.add(this.terminals[t][0]);
            first.set(this.terminals[t][0], test);
        }
        let old = 0;
        let nullables = this.getNullable();
        for (let t = 0; t < this.nonterminals.length; t++) {
            first.set(this.nonterminals[t][0], new Set);
        }
        while (old < 3) {
            for (let N = 0; N < this.nonterminals.length; N++) {
                let LHS = this.nonterminals[N][0];
                let RHS = this.nonterminals[N][1];
                for (let z = 0; z < RHS.length; z++) { //z is the specific production 
                    let RHS_temp = RHS[z];
                    for (let P = 0; P < RHS_temp.length; P++) { // p is part of the production
                        let production = RHS_temp[P];
                        if (first.has(LHS)) {
                            if (first.has(production)) {
                                let temp = first.get(LHS);
                                let pro_first = first.get(production);
                                let L = temp.size;
                                temp = union(temp, pro_first);
                                //console.log(temp)
                                if (L < temp.size) {
                                    first.set(LHS, temp);
                                    old = 0;
                                }
                            }
                            else {
                                if (first.has(production)) {
                                    first.set(LHS, new Set(production));
                                    old = 0;
                                }
                            }
                            if (!nullables.includes(production)) {
                                break;
                            }
                        }
                    }
                }
            }
            old += 1;
        }
        return first;
    }
    getFollow() {
        let follow = new Map(); //key = string, value = set of string
        let first = this.getFirst(); // get firsts
        let nullables = this.getNullable(); // get nullables
        //follow.set("S", new Set<string>("$")) //create follow for start
        for (let N = 0; N < this.nonterminals.length; N++) {
            if (N == 0) {
                follow.set(this.nonterminals[N][0], new Set("$"));
            }
            else {
                follow.set(this.nonterminals[N][0], new Set());
            }
        }
        let old = 0; //used to make sure we add to follow every time thats needed
        while (old < 3) {
            for (let N = 0; N < this.nonterminals.length; N++) {
                let LHS = this.nonterminals[N][0]; // nonterminal N
                let RHS = this.nonterminals[N][1]; // all productions of N
                for (let p = 0; p < RHS.length; p++) { // z and P are both part of productions
                    let RHS_temp = RHS[p]; // production P
                    for (let Z = 0; Z < RHS_temp.length; Z++) {
                        let x = RHS_temp[Z]; // X of P
                        let nonterminal = false; // this and the for loop check if non terminal and skips this part of the production if not a nonterminal
                        for (let X = 0; X < this.nonterminals.length; X++) {
                            if (this.nonterminals[X][0] == x) {
                                //console.log(x)
                                nonterminal = true;
                                break;
                            }
                        }
                        if (nonterminal) {
                            let breakout = false;
                            for (let Z2 = Z + 1; Z2 < RHS_temp.length; Z2++) {
                                let y = RHS_temp[Z2]; // Y is the part of the production after X that is being checked
                                if (x == "ADDOP") {
                                    //console.log("Z =", Z)
                                    //console.log("Z2 =", Z2)
                                    //console.log(x)
                                }
                                let lenfol = null; // this and the if statement are used to track a change in follow
                                if (follow.has(x)) {
                                    lenfol = follow.get(x).size;
                                }
                                if (first.has(y)) { // if we have y in first, union it with follow(x)
                                    //console.log("first")
                                    follow.set(x, union(follow.get(x), first.get(y)));
                                }
                                else {
                                    //console.log("FIRST DOES NOT HAVE!!!!", y)
                                }
                                if (lenfol != follow.get(x).size) {
                                    old = 0;
                                }
                                if (!nullables.includes(y)) { // if y is nullable breakout
                                    breakout = true;
                                    break;
                                }
                            }
                            if (!breakout) { // if we did not brokeout do this
                                let lenfol = null;
                                if (follow.has(x)) { // track if a change happened
                                    lenfol = follow.get(x).size;
                                }
                                if (follow.has(LHS)) { // if follow has LHS union them
                                    //console.log("Breakout")
                                    follow.set(x, union(follow.get(x), follow.get(LHS)));
                                }
                                else {
                                    //console.log("FOLLOW DOES NOT HAVE!!!!", LHS)
                                }
                                if (lenfol != follow.get(x).size) {
                                    old = 0;
                                }
                            }
                        }
                    }
                }
            }
            old++;
        }
        return follow;
    }
}
exports.Grammar = Grammar;
//# sourceMappingURL=Grammar.js.map