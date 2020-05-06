declare var require: any;
let antlr4 = require('./antlr4')
let Lexer = require('./grammarKSLexer.js').grammarKSLexer;
let Parser = require('./grammarKSParser.js').grammarKSParser

let asmCode: string[] = [];

enum VarType {
    INTEGER
}

let labelCounter = 0;
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}

function convertStackTopToZeroOrOneInteger(type: VarType) {
    if (type == VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    } else {
        console.log("not an integer in convert")
        ICE()
    }
}

function ICE() {
    throw new Error("ICE: Internal Compilier Error");
}

function emit(instr: string) {
    asmCode.push(instr);
}

function programNodeCode(n: TreeNode) {
    //console.log(n)
    //program -> braceblock
    if (n.sym != "program") {
        console.log(n)
        console.log("n.sym isn't program n.sym =", n.sym.trim, "instead")
        ICE();
    }
    braceblockNodeCode(n.children[0]);
}

function braceblockNodeCode(n: TreeNode) {
    //console.log(n)
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}

function stmtsNodeCode(n: TreeNode) {
    //console.log(n)
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}

function stmtNodeCode(n: TreeNode) {
    //console.log(n)
    //stmt -> cond | loop | return-stmt SEMI
    let c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c); break;
        case "loop":
            loopNodeCode(c); break;
        case "return_stmt":
            returnstmtNodeCode(c); break;
        default:
            console.log(n)
            console.log("c.sym isn't cond loop or return_stmt c.sym=", c.sym)
            ICE();
    }
}

function returnstmtNodeCode(n: TreeNode) {
    //console.log(n)
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]); //...move result from expr to rax...
    emit("pop rax");
    emit("ret");
}

/*function exprNodeCode(n: TreeNode) {
    //console.log(n)
    //expr -> NUM
    let d = parseInt(n.children[0].token.lexeme, 10);
    emit(`push qword ${d}`);
}*/
function exprNodeCode(n: TreeNode): VarType {
    return orexpNodeCode(n.children[0]);
}

function orexpNodeCode(n: TreeNode): VarType {
    //orexp -> orexp OR andexp | andexp
    if (n.children.length === 1) {
        return andexpNodeCode(n.children[0]);
    }
    else {
        let orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        let lbl = label();
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl}`);
        emit("add rsp,8");      //discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;   //always integer, even if float operands
    }
}

function andexpNodeCode(n: TreeNode): VarType {
    //andexp: andexp AND notexp | notexp;
    if (n.children.length === 1) {
        return notexpNodeCode(n.children[0]);
    }
    else {
        let andexpType = andexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(andexpType);
        let lbl = label();
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("add rsp,8");      //discard left result (0)
        let notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
}

function notexpNodeCode(n: TreeNode): VarType {
    //notexp : NOT notexp | rel ;
    if (n.children.length === 1) {
        return relexpNodeCode(n.children[0]);
    }
    else {
        let notexpType = notexpNodeCode(n.children[1])
        convertStackTopToZeroOrOneInteger(notexpType);
        let lbl = label();
        let lbl2 = label();
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("add rsp,8");
        emit("push 0")
        emit(`jne ${lbl2}`);
        emit(`${lbl}:`);
        emit("add rsp,8");
        emit("push 1")
        emit(`${lbl2}:`);
        return VarType.INTEGER;
    }
}

function sumNodeCode(n: TreeNode): VarType {
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1)
        return termNodeCode(n.children[0]);
    else {
        let sumType = sumNodeCode(n.children[0]);
        let termType = termNodeCode(n.children[2]);
        if (sumType !== VarType.INTEGER || termType != VarType.INTEGER) {
            console.log("variable type is not int in sum")
            ICE()
        }
        emit("pop rbx");    //second operand
        emit("pop rax");    //first operand
        switch (n.children[1].sym) {
            case "PLUS":
                emit("add rax, rbx");
                break;
            case "MINUS":
                emit("sub rax, rbx");
                break;
            default:
                ICE
        }
        emit("push rax");
        return VarType.INTEGER;
    }
}

function termNodeCode(n: TreeNode): VarType {
    //term: term MULOP neg | neg;
    if (n.children.length == 1) {
        return negNodeCode(n.children[0])
    }
    else {
        let termType = termNodeCode(n.children[0]);
        let negType = negNodeCode(n.children[2]);
        if (termType !== VarType.INTEGER || negType != VarType.INTEGER) {
            console.log("variable type is not int in sum")
            ICE()
        }
        emit("pop rbx");    //second operand
        switch (n.children[1].token.lexeme) {
            case "*":
                emit("pop rax");    //first operand
                emit("imul rax, rbx");
                emit("push rax"); break;
            case "/":
                emit("pop rax");    //first operand
                emit("mov rdx, 0")
                emit("idiv rbx");
                emit("push rax"); break;
            case "%":
                emit("pop rax");    //first operand
                emit("mov rdx, 0")
                emit("idiv rbx");
                emit("push rdx"); break;
        }
        return VarType.INTEGER;
    }
}

function negNodeCode(n: TreeNode): VarType {
    //neg : MINUS neg | factor ;
    if (n.children.length == 1) {
        return factorNodeCode(n.children[0])
    }
    else {
        let negType = negNodeCode(n.children[1])
        emit("pop rax");
        emit("neg rax");
        emit("push rax");
        return VarType.INTEGER;
    }
}

function factorNodeCode(n: TreeNode): VarType {
    //factor -> NUM | LP expr RP
    let child = n.children[0];
    switch (child.sym) {
        case "NUM":
            let v = parseInt(child.token.lexeme, 10);
            emit(`push qword ${v}`)
            return VarType.INTEGER;
        case "LP":
            return exprNodeCode(n.children[1]);
        default:
            ICE();
    }
}

function relexpNodeCode(n: TreeNode): VarType {
    //rel sum RELOP sum | sum
    if (n.children.length === 1)
        return sumNodeCode(n.children[0]);
    else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== VarType.INTEGER || sum2Type != VarType.INTEGER) {
            console.log("not integers in relnode")
            ICE()
        }
        emit("pop rax"); //second operand
        //first operand still on stack
        emit("cmp [rsp],rax");    //do the compare
        switch (n.children[1].token.lexeme) {
            case ">=": emit("setge al"); break;
            case "<=": emit("setle al"); break;
            case ">": emit("setg  al"); break;
            case "<": emit("setl  al"); break;
            case "==": emit("sete  al"); break;
            case "!=": emit("setne al"); break;
            default: ICE()
        }
        emit("movzx qword rax, al");   //move with zero extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}

function condNodeCode(n: TreeNode) {
    //console.log(n)
    //cond -> IF LP expr RP braceblock |  IF LP expr RP braceblock ELSE braceblock

    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]);    // leaves result in stack
        emit("pop rax");                // pop stack into rax
        emit("cmp rax, 0");             //if rax is 0 its false
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
    } else {
        exprNodeCode(n.children[2]);
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
        //needs more here, maybe this?
        braceblockNodeCode(n.children[6]);
    }
}

function loopNodeCode(n: TreeNode) {
    //console.log(n)
    //loop : WHILE LP expr RP braceblock ;
    var startloopLabel = label();
    emit(`${startloopLabel}:`);
    exprNodeCode(n.children[2]);
    //check this
    emit("pop rax");
    emit("cmp rax, 0"); // if rax is 0 = false?
    var endloopLabel = label();
    emit(`je ${endloopLabel}`); // checks if result was 0 if so do action
    braceblockNodeCode(n.children[4]);
    emit(`jmp ${startloopLabel}`);
    emit(`${endloopLabel}:`);
}

function funccallNodeCode(n: TreeNode): VarType {
    return builtinfunccallNodeCode(n);
}

function makeAsm(root: TreeNode) {
    asmCode = [];
    labelCounter = 0;
    emit("% include \"doCall.asm\"")
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
    sym: string;
    line: number;
    lexeme: string;
    constructor(sym: string, line: number, lexeme: string) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`
    }
}

class TreeNode {
    sym: string;
    token: Token;
    children: TreeNode[];
    constructor(sym: string, token: Token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    toString() {
        return `${this.sym} ${this.token} ${this.children}`
    }
}

function walk(parser: any, node: any) {
    let p: any = node.getPayload();
    if (p.ruleIndex === undefined) {
        let line: number = p.line;
        let lexeme: string = p.text;
        let ty: number = p.type;
        let sym: string = parser.symbolicNames[ty]
        if (sym === null)
            sym = lexeme.toUpperCase();
        let T = new Token(sym, line, lexeme)
        return new TreeNode(sym, T)
    } else {
        let idx: number = p.ruleIndex;
        let sym: string = parser.ruleNames[idx]
        let N = new TreeNode(sym, undefined)
        for (let i = 0; i < node.getChildCount(); ++i) {
            let child: any = node.getChild(i)
            N.children.push(walk(parser, child));
        }
        return N;
    }
}

class ErrorHandler {
    syntaxError(rec: any, sym: any, line: number,
        column: number, msg: string, e: any) {
        console.log("Syntax error:", msg, "on line", line,
            "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}

export function parse(txt: string) {
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners()
    parser.addErrorListener(handler);
    //this assumes your start symbol is 'start'
    let antlrroot = parser.program();
    let root: TreeNode = walk(parser, antlrroot);
    return makeAsm(root)
    // ...
}