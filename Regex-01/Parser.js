"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let antlr4 = require('./antlr4');
let Lexer = require('./grammarKSLexer.js').grammarKSLexer;
let Parser = require('./grammarKSParser.js').grammarKSParser;
let asmCode = [];
let labelCounter = 0;
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function ICE() {
    throw new Error("ICE: Internal Compilier Error");
}
function emit(instr) {
    asmCode.push(instr);
}
function programNodeCode(n) {
    //program -> braceblock
    if (n.sym != "program") {
        console.log(n);
        console.log("n.sym isn't program n.sym =", n.sym.trim, "instead");
        ICE();
    }
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n) {
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n) {
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function stmtNodeCode(n) {
    //stmt -> cond | loop | return-stmt SEMI
    let c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "return_stmt":
            returnstmtNodeCode(c);
            break;
        default:
            console.log(n);
            console.log("c.sym isn't cond loop or return_stmt c.sym=", c.sym);
            ICE();
    }
}
function returnstmtNodeCode(n) {
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]); //...move result from expr to rax...
    emit("ret");
}
function exprNodeCode(n) {
    //expr -> NUM
    let d = parseInt(n.children[0].token.lexeme, 10);
    emit(`mov rax, ${d}`);
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
    }
    else {
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
        //needs more here, maybe this?
        braceblockNodeCode(n.children[6]);
    }
}
function loopNodeCode(n) {
    //loop : WHILE LP expr RP braceblock ;
    exprNodeCode(n.children[2]);
    //check this
    emit("cmp rax, 0"); // if result is 0 = false?
    var endifLabel = label();
    emit(`je ${endifLabel}`); // checks if result was 0 if not do action
    braceblockNodeCode(n.children[4]);
    emit(`${endifLabel}:`);
}
function makeAsm(root) {
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    return asmCode.join("\n");
}
class Token {
    constructor(sym, line, lexeme) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`;
    }
}
class TreeNode {
    constructor(sym, token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    toString() {
        return `${this.sym} ${this.token} ${this.children}`;
    }
}
function walk(parser, node) {
    let p = node.getPayload();
    if (p.ruleIndex === undefined) {
        let line = p.line;
        let lexeme = p.text;
        let ty = p.type;
        let sym = parser.symbolicNames[ty];
        if (sym === null)
            sym = lexeme.toUpperCase();
        let T = new Token(sym, line, lexeme);
        return new TreeNode(sym, T);
    }
    else {
        let idx = p.ruleIndex;
        let sym = parser.ruleNames[idx];
        let N = new TreeNode(sym, undefined);
        for (let i = 0; i < node.getChildCount(); ++i) {
            let child = node.getChild(i);
            N.children.push(walk(parser, child));
        }
        return N;
    }
}
class ErrorHandler {
    syntaxError(rec, sym, line, column, msg, e) {
        console.log("Syntax error:", msg, "on line", line, "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}
function parse(txt) {
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners();
    parser.addErrorListener(handler);
    //this assumes your start symbol is 'start'
    let antlrroot = parser.program();
    let root = walk(parser, antlrroot);
    return makeAsm(root);
    // ...
}
exports.parse = parse;
//# sourceMappingURL=Parser.js.map