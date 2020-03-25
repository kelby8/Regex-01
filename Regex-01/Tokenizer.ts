import { Token } from "./Token"

export class Tokenizer {
    inputData: string;
    currentLine: number;
    idx: number;    //index of next unparsed char in inputData
    peekindex: number;
    prev: Token;
    current: Token;
    peekline: number;

    constructor(input: string) {
        this.setInput(input);
    }
    setInput(inputData: string) {
        this.inputData = inputData
        this.idx = 0
        this.prev = null
        this.current = null
        this.peekindex = 0
        this.currentLine = 1
        this.peekline = 1
    }
    next(): Token {
        if (this.inputData[this.idx] == " ") {
            this.idx += 1
            this.peekindex += 1
            return this.next();
        }
        if (this.current != null) {
            this.prev = this.current
        }
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            return new Token("$", undefined, this.currentLine);
        }
        let lexeme = this.inputData[this.idx]
        let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if (num.includes(lexeme)) {
            let T: Token = new Token("NUM", lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        if (lexeme == "+" || lexeme == "-") {
            let T: Token = new Token("ADDOP", lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        else if (lexeme == ",") {
            let T: Token = new Token("COMMA", lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        else if (lexeme == "(" || lexeme == ")") {
            let T: Token = new Token(lexeme, lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        else if (lexeme == "*") {
            let sym = "MULOP"
            if (this.idx + 1 < this.inputData.length) {
                if (this.inputData[this.idx + 1] == "*") {
                    sym = "POWOP"
                    lexeme = "**"
                    this.idx += 1;
                    this.peekindex += 1;
                }
            }
            let T: Token = new Token(sym, lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        else if (lexeme == "/") {
            let sym = "MULOP"
            let T: Token = new Token(sym, lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        else if (lexeme == "~") {
            let sym = "BITNOT"
            let T: Token = new Token(sym, lexeme, this.currentLine);
            this.current = T
            this.idx += 1;
            this.peekindex += 1;
            return T
        }
        else {
            let sym = "ID"
            let operators = ["~", "/", "*", "(", ")", ",", "+", "-"]
            let X = 1
            while (!operators.includes(this.inputData[this.idx + X]) && this.idx + X < this.inputData.length) {
                lexeme += this.inputData[this.idx + X]
                X++
            }
            lexeme = lexeme.trim()
            let T: Token = new Token(sym, lexeme, this.currentLine);
            this.current = T
            this.idx += X;
            this.peekindex += X;
            return T
        }
    }
    atEnd(): boolean {
        if (this.idx >= this.inputData.length) {
            return true
        }
        else {
            return false
        }
    }
    previous(): string {
        if (this.prev == null) {
            return null
        }
        return this.prev.sym
    }
    peek(): Token {
        if (this.inputData[this.peekindex] == " ") {
            this.peekindex += 1
            return this.peek();
        }
        if (this.peekindex >= this.inputData.length) {
            //special "end of file" metatoken
            let end = this.peekline
            this.peekindex = this.idx
            this.peekline = this.currentLine
            return new Token("$", undefined, end);
        }
        let lexeme = this.inputData[this.peekindex]
        let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if (num.includes(lexeme)) {
            let T: Token = new Token("NUM", lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T
        }
        if (lexeme == "+" || lexeme == "-") {
            let T: Token = new Token("ADDOP", lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T
        }
        else if (lexeme == ",") {
            let T: Token = new Token("COMMA", lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T
        }
        else if (lexeme == "(" || lexeme == ")") {
            let T: Token = new Token(lexeme, lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T
        }
        else if (lexeme == "*") {
            let sym = "MULOP"
            if (this.idx + 1 < this.inputData.length) {
                if (this.inputData[this.idx + 1] == "*") {
                    sym = "POWOP"
                    lexeme = "**"
                }
            }
            let T: Token = new Token(sym, lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T
        }
        else if (lexeme == "/") {
            let sym = "MULOP"
            let T: Token = new Token(sym, lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T
        }
    }
}