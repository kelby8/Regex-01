"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let antlr4 = require('./antlr4');
let Lexer = require('./grammarKSLexer.js').grammarKSLexer;
let Parser = require('./grammarKSParser.js').grammarKSParser;
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
    VarType[VarType["STRING"] = 1] = "STRING";
    VarType[VarType["VOID"] = 2] = "VOID";
})(VarType || (VarType = {}));
function ICE() {
    throw new Error("ICE: Internal Compilier Error");
}
function moveBytesFromStackToLocation(loc) {
    emit("pop rax");
    emit(`mov [${loc}], rax`);
}
function convertStackTopToZeroOrOneInteger(type) {
    if (type == VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else {
        console.log("not an integer in convert");
        ICE();
    }
}
let labelCounter = 0;
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
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
class VarInfo {
    //also the line number, if you want
    constructor(t, location) {
        this.location = location;
        this.type = t;
    }
}
class SymbolTable {
    constructor() {
        this.table = new Map();
    }
    get(name) {
        if (!this.table.has(name)) {
            console.log("non-existant");
            ICE();
        }
        return this.table.get(name);
    }
    set(name, v) {
        if (this.table.has(name)) {
            console.log("redeclaring", name);
            ICE();
        }
        this.table.set(name, v);
    }
    has(name) {
        return this.table.has(name);
    }
}
class ErrorHandler {
    syntaxError(rec, sym, line, column, msg, e) {
        console.log("Syntax error:", msg, "on line", line, "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}
let asmCode = [];
let symtable = new SymbolTable();
let stringPool = new Map();
function vardecllistNodeCode(n) {
    //var_decl_list : var_decl SEMI var_decl_list | ;
    if (n.children.length == 0) {
        return;
    }
    else {
        vardeclNodeCode(n.children[0]);
        vardecllistNodeCode(n.children[2]);
    }
}
function vardeclNodeCode(n) {
    //var-decl -> TYPE ID
    let vname = n.children[1].token.lexeme;
    let vtype = typeNodeCode(n.children[0]);
    symtable.set(vname, new VarInfo(vtype, label()));
}
function typeNodeCode(n) {
    //TYPE : 'int' | 'string' | 'double';
    switch (n.token.lexeme) {
        case "int":
            return VarType.INTEGER;
        case "string":
            return VarType.STRING;
        case "double":
            return VarType.INTEGER;
    }
}
function emit(instr) {
    asmCode.push(instr);
}
function assignNodeCode(n) {
    // assign -> ID EQ expr
    let t = exprNodeCode(n.children[2]);
    //console.log(n.children[2].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0])
    //console.log(t, "is what t is")
    let vname = n.children[0].token.lexeme;
    if (symtable.get(vname).type !== t) {
        console.log("Type mismatch");
        ICE();
    }
    moveBytesFromStackToLocation(symtable.get(vname).location);
}
function stringconstantNodeCode(n) {
    let s = n.token.lexeme;
    //...strip leading and trailing quotation marks...
    s = s.substring(1, s.length - 1);
    //...handle backslash escapes... ", n, and \let temp = s.split("\\\"")
    let i = 0;
    while (i < s.length) {
        if (s[i] == "\\") {
            if (s[i] + s[i + 1] == "\\\"") {
                let temp2 = s.substring(0, i);
                let t = "\"";
                let temp3 = s.substring(i + 2, s.length);
                s = temp2 + t + temp3;
            }
            else if (s[i] + s[i + 1] == "\\n") {
                let temp2 = s.substring(0, i);
                let t = "\n";
                let temp3 = s.substring(i + 2, s.length);
                s = temp2 + t + temp3;
            }
            else if (s[i] + s[i + 1] == "\\\\") {
                let temp2 = s.substring(0, i);
                let t = "\\";
                let temp3 = s.substring(i + 2, s.length);
                s = temp2 + t + temp3;
            }
        }
        i += 1;
    }
    if (!stringPool.has(s))
        stringPool.set(s, label());
    return stringPool.get(s); //return the label
}
function programNodeCode(n) {
    //console.log(n)
    //program -> var_decl_list braceblock
    if (n.sym != "program") {
        console.log("n.sym isn't program n.sym =", n.sym.trim, "instead");
        ICE();
    }
    vardecllistNodeCode(n.children[0]);
    braceblockNodeCode(n.children[1]);
}
function braceblockNodeCode(n) {
    //console.log(n)
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n) {
    //console.log(n)
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function stmtNodeCode(n) {
    //console.log(n)
    //stmt : func_call SEMI | cond | loop | return_stmt SEMI | assign SEMI ;
    let c = n.children[0];
    switch (c.sym) {
        case "func_call":
            funccallNodeCode(c);
            break;
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "return_stmt":
            returnstmtNodeCode(c);
            break;
        case "assign":
            assignNodeCode(c);
            break;
        default:
            console.log(n);
            console.log("c.sym isn't cond loop or return_stmt c.sym=", c.sym);
            ICE();
    }
}
function returnstmtNodeCode(n) {
    //console.log(n)
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]); //...move result from expr to rax...
    emit("pop rax");
    emit("ret");
}
function exprNodeCode(n) {
    return orexpNodeCode(n.children[0]);
}
function orexpNodeCode(n) {
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
        emit("add rsp,8"); //discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER; //always integer, even if float operands
    }
}
function andexpNodeCode(n) {
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
        emit("add rsp,8"); //discard left result (0)
        let notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
}
function notexpNodeCode(n) {
    //notexp : NOT notexp | rel ;
    if (n.children.length === 1) {
        return relexpNodeCode(n.children[0]);
    }
    else {
        let notexpType = notexpNodeCode(n.children[1]);
        convertStackTopToZeroOrOneInteger(notexpType);
        let lbl = label();
        let lbl2 = label();
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("add rsp,8");
        emit("push 0");
        emit(`jne ${lbl2}`);
        emit(`${lbl}:`);
        emit("add rsp,8");
        emit("push 1");
        emit(`${lbl2}:`);
        return VarType.INTEGER;
    }
}
function sumNodeCode(n) {
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1) {
        return termNodeCode(n.children[0]);
    }
    else {
        let sumType = sumNodeCode(n.children[0]);
        let termType = termNodeCode(n.children[2]);
        if (sumType != VarType.INTEGER || termType != VarType.INTEGER) {
            console.log("variable type is not int in sum");
            ICE();
        }
        emit("pop rbx"); //second operand
        emit("pop rax"); //first operand
        switch (n.children[1].sym) {
            case "PLUS":
                emit("add rax, rbx");
                break;
            case "MINUS":
                emit("sub rax, rbx");
                break;
            default:
                console.log("neither plus nor minus");
                ICE();
        }
        emit("push rax");
        return VarType.INTEGER;
    }
}
function termNodeCode(n) {
    //term: term MULOP neg | neg;
    if (n.children.length == 1) {
        return negNodeCode(n.children[0]);
    }
    else {
        let termType = termNodeCode(n.children[0]);
        let negType = negNodeCode(n.children[2]);
        if (termType !== VarType.INTEGER || negType != VarType.INTEGER) {
            console.log("variable type is not int in sum");
            ICE();
        }
        emit("pop rbx"); //second operand
        switch (n.children[1].token.lexeme) {
            case "*":
                emit("pop rax"); //first operand
                emit("imul rax, rbx");
                emit("push rax");
                break;
            case "/":
                emit("pop rax"); //first operand
                emit("mov rdx, 0");
                emit("idiv rbx");
                emit("push rax");
                break;
            case "%":
                emit("pop rax"); //first operand
                emit("mov rdx, 0");
                emit("idiv rbx");
                emit("push rdx");
                break;
        }
        return VarType.INTEGER;
    }
}
function negNodeCode(n) {
    //neg : MINUS neg | factor ;
    if (n.children.length == 1) {
        return factorNodeCode(n.children[0]);
    }
    else {
        negNodeCode(n.children[1]);
        emit("pop rax");
        emit("neg rax");
        emit("push rax");
        return VarType.INTEGER;
    }
}
function factorNodeCode(n) {
    //factor : NUM | LP expr RP | STRING_CONSTANT | ID  | func_call;
    switch (n.children[0].sym) {
        case "NUM": {
            let v = parseInt(n.children[0].token.lexeme, 10);
            emit(`push qword ${v}`);
            return VarType.INTEGER;
        }
        case "LP": {
            return exprNodeCode(n.children[1]);
        }
        case "ID": {
            if (!symtable.has(n.children[0].token.lexeme)) {
                console.log("no such variable");
                ICE();
            }
            let IDinfo = symtable.get(n.children[0].token.lexeme);
            switch (IDinfo.type) {
                case VarType.STRING: {
                    emit(`push qword ${IDinfo.location}`);
                    return VarType.STRING;
                }
                case VarType.INTEGER: {
                    emit(`push qword [${IDinfo.location}]`);
                    return VarType.INTEGER;
                }
            }
        }
        case "func_call": {
            let type = funccallNodeCode(n.children[0]);
            if (type === VarType.VOID) {
                console.log("Can't use void in expression");
                ICE();
            }
            emit("push rax");
            emit(";end of fator func_call");
            return type;
            break;
        }
        case "STRING_CONSTANT": {
            let address = stringconstantNodeCode(n.children[0]);
            emit(`push qword ${address}`);
            return VarType.STRING;
        }
        default: {
            console.log("improper entry", n.children[0].sym);
            ICE();
        }
    }
}
function relexpNodeCode(n) {
    //rel sum RELOP sum | sum
    if (n.children.length === 1) {
        return sumNodeCode(n.children[0]);
    }
    else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== VarType.INTEGER || sum2Type != VarType.INTEGER) {
            console.log("not integers in relnode");
            ICE();
        }
        emit("pop rax"); //second operand
        //first operand still on stack
        emit("cmp [rsp],rax"); //do the compare
        switch (n.children[1].token.lexeme) {
            case ">=":
                emit("setge al");
                break;
            case "<=":
                emit("setle al");
                break;
            case ">":
                emit("setg  al");
                break;
            case "<":
                emit("setl  al");
                break;
            case "==":
                emit("sete  al");
                break;
            case "!=":
                emit("setne al");
                break;
            default: ICE();
        }
        emit("movzx qword rax, al"); //move with zero extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}
function condNodeCode(n) {
    //console.log(n)
    //cond -> IF LP expr RP braceblock |  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]); // leaves result in stack
        emit("pop rax"); // pop stack into rax
        emit("cmp rax, 0"); //if rax is 0 its false
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
    }
    else {
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
function loopNodeCode(n) {
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
function outputSymbolTableInfo() {
    for (let vname of symtable.table.keys()) {
        let vinfo = symtable.get(vname);
        emit(`${vinfo.location}:`);
        emit("dq 0");
    }
}
function outputStringPoolInfo() {
    for (let key of stringPool.keys()) {
        let lbl = stringPool.get(key);
        emit(`${lbl}:`);
        for (let i = 0; i < key.length; ++i) {
            emit(`db ${key.charCodeAt(i)}`);
        }
        emit("db 0"); //null terminator
    }
}
function funccallNodeCode(n) {
    return builtinfunccallNodeCode(n.children[0]);
}
function builtinfunccallNodeCode(n) {
    //builtin-func-call -> PRINT LP expr RP | INPUT LP RP |
    //OPEN LP expr RP | READ LP expr RP | WRITE LP expr CMA expr RP |
    //CLOSE LP expr RP
    switch (n.children[0].sym) {
        case "OPEN": {
            let type = exprNodeCode(n.children[2]);
            if (type !== VarType.STRING) {
                console.log("needs to be a string");
                ICE();
            }
            //tmp = fopen( filename, "a" );
            emit("mov arg0, [rsp]"); //filename (string)
            emit("mov arg1, string_a"); //next slide
            emit("ffcall fopen");
            //fclose(tmp)
            emit("mov arg0, rax");
            emit("ffcall fclose");
            //fopen( filename, "r+" )
            emit("pop arg0"); //filename; remove from stack
            emit("mov arg1, string_rplus"); //next slide
            emit("ffcall fopen"); //result is in rax
            return VarType.INTEGER;
        }
        case "CLOSE": {
            let type = exprNodeCode(n.children[2]);
            if (type !== VarType.INTEGER) {
                console.log("Close requires numeric arg");
            }
            emit("pop arg0"); //argument for fclose
            emit("ffcall fclose");
            return VarType.VOID;
        }
        case "WRITE": {
            // WRITE LP expr CMA expr RP
            // fprintf( fp, "%s", str )  or  fprintf( fp, "%d", num )
            let handletype = exprNodeCode(n.children[2]);
            if (handletype !== VarType.INTEGER) {
                console.log("handletype must be integer");
                ICE();
            }
            let outputtype = exprNodeCode(n.children[4]);
            let fmt;
            if (outputtype === VarType.INTEGER) {
                fmt = "string_percent_d";
            }
            else if (outputtype === VarType.STRING) {
                fmt = "string_percent_s";
            }
            else {
                console.log("output is not an integer(0) or a string(1)");
                console.log(outputtype);
                ICE();
            }
            emit("pop arg2"); //the thing to print
            emit(`mov arg1, ${fmt}`);
            emit("pop arg0"); //the handle
            emit("ffvcall fprintf,0");
            //need to call fflush(NULL)
            emit("mov arg0, 0");
            emit("ffcall fflush");
            return VarType.INTEGER;
        }
        case "INPUT": {
            //INPUT LP RP
            //fgets( ptr, size, stream)
            //strtol( ptr, eptr, base )
            emit("mov arg0, fgets_buffer");
            emit("mov arg1, 64");
            emit("mov arg2, [stdin]");
            emit("ffcall fgets");
            //should do error checking...
            emit("mov arg0, fgets_buffer");
            emit("mov arg1, 0");
            emit("mov arg2, 10");
            emit("ffcall strtol"); //result is in rax
            return VarType.INTEGER;
        }
        case "PRINT": {
            //PRINT LP expr RP
            // printf("%s", str )  or  printf("%d", num )
            let outputtype = exprNodeCode(n.children[2]);
            let fmt;
            if (outputtype === VarType.INTEGER) {
                fmt = "string_percent_d";
            }
            else if (outputtype === VarType.STRING) {
                fmt = "string_percent_s";
            }
            else {
                console.log("output is not an integer(0) or a string(1)");
                console.log(outputtype);
                ICE();
            }
            emit("pop arg1"); //the thing to print
            emit(`mov arg0, ${fmt}`);
            emit("ffvcall printf,0");
            //need to call fflush(NULL)
            emit("mov arg0, 0");
            emit("ffcall fflush");
            return VarType.VOID;
        }
        case "READ": {
            let type = exprNodeCode(n.children[2]);
            if (type !== VarType.INTEGER) {
                console.log("needs to be a INTEGER");
                ICE();
            }
            //fseek(fp, 0, 2)
            //fgets( ptr, size, stream)
            //strtol( ptr, eptr, base )
            emit("mov arg0, fgets_buffer");
            emit("mov arg1, 64");
            emit("mov arg2, [rsp]");
            emit("ffcall fgets");
            //should do error checking...
            emit("mov arg0, fgets_buffer");
            emit("mov arg1, 0");
            emit("mov arg2, 10");
            emit("ffcall strtol"); //result is in rax
            return VarType.INTEGER;
        }
    }
}
function makeAsm(root) {
    symtable = new SymbolTable();
    stringPool = new Map();
    asmCode = [];
    labelCounter = 0;
    emit("%include \"doCall.asm\"");
    emit("mov arg0, 0");
    emit("mov arg1, string_r");
    emit("ffcall fdopen");
    emit("mov[stdin], rax");
    emit("mov arg0, 1");
    emit("mov arg1, string_w");
    emit("ffcall fdopen");
    emit("mov[stdout], rax");
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    emit("stdin: dq 0");
    emit("stdout: dq 0");
    emit("string_r: db 'r', 0");
    emit("string_w: db 'w', 0");
    emit("string_a: db 'a', 0");
    emit("string_rplus: db 'r+', 0");
    emit("string_percent_s: db '%s', 0");
    emit("string_percent_d: db '%d', 0");
    emit("fgets_buffer: times 64 db 0");
    outputSymbolTableInfo();
    outputStringPoolInfo();
    return asmCode.join("\n");
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