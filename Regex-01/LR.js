"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grammar_1 = require("./Grammar");
class LR0Item {
    constructor(lhs, rhs, dpos) {
        this.lhs = lhs;
        this.rhs = rhs;
        this.dpos = dpos;
    }
    toString() {
        let l1 = this.rhs.slice(0, this.dpos);
        let l2 = this.rhs.slice(this.dpos);
        //Unicode 2192 = arrow, 2022=bullet
        return this.lhs + " \u2192 " + l1.join(" ") + " \u2022 " + l2.join(" ");
    }
}
class NFAState {
    constructor(lr0item) {
        this.item = lr0item;
        this.transitions = new Map();
    }
    addTransition(sym, stateIndex) {
        if (!this.transitions.has(sym))
            this.transitions.set(sym, []);
        this.transitions.get(sym).push(stateIndex);
    }
}
class State {
}
function getStateWithLabel(I2, allStates, toDo, stateMap) {
    let I2s = I2.toString();
    let q2i;
    if (stateMap.has(I2s))
        q2i = stateMap.get(I2s);
    else {
        q2i = allStates.length;
        allStates.push(new NFAState(I2));
        toDo.push(q2i);
        stateMap.set(I2s, q2i);
    }
    return q2i;
}
function makeTransitions(q, allStates, toDo, stateMap, g) {
    if (q.item.dpos == q.item.rhs.length) {
        return; //nothing to do
    }
    let sym = q.item.rhs[q.item.dpos + 1];
    let temp = q.item;
    temp.dpos += 1;
    let I2 = temp;
    let q2i = getStateWithLabel(I2, allStates, toDo, stateMap);
    q.addTransition(sym, q2i);
    let nonterminal = false;
    let index = null;
    for (let n = 0; n < g.nonterminals.length; n++) {
        if (g.nonterminals[n][0] == sym) {
            nonterminal = true;
            index = n;
            break;
        }
    }
    if (nonterminal) {
        for (let P = 0; P < g.nonterminals[index][1].length; P++) {
            let I2 = new LR0Item(sym, g.nonterminals[index][1], P);
            let q2i = getStateWithLabel(I2, allStates, toDo, stateMap);
            q.addTransition("", q2i);
        }
    }
}
function makeNFA(input) {
    let g = new Grammar_1.Grammar(input);
    let allStates = [];
    let M = new Map();
    //let I1 = new LR0Item("X", ["Y"], 0);
    //M.set(I1.toString(), 42);
    //let I2 = new LR0Item("X", ["Y"], 0);
    //console.log(M.has(I2.toString()));
    let startState = new NFAState(new LR0Item("S'", ["startSymbol"], 0));
    allStates.push(startState);
    //list of indices in allStates: The states we need to process
    let toDo = [0];
    while (toDo.length > 0) {
        let qi = toDo.pop();
        let q = allStates[qi];
        makeTransitions(q, allStates, toDo, M, g);
    }
    return allStates;
}
exports.makeNFA = makeNFA;
//# sourceMappingURL=LR.js.map