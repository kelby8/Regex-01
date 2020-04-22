"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = require("./Token");
class Tokenizer {
    constructor(input) {
        this.setInput(input);
    }
    setInput(inputData) {
        this.inputData = inputData;
        this.idx = 0;
        this.prev = null;
        this.current = null;
        this.peekindex = 0;
        this.currentLine = 1;
        this.peekline = 1;
    }
    next() {
        if (this.inputData[this.idx] == " ") {
            this.idx += 1;
            this.peekindex += 1;
            return this.next();
        }
        if (this.current != null) {
            this.prev = this.current;
        }
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            return new Token_1.Token("$", undefined, this.currentLine);
        }
        let lexeme = this.inputData[this.idx];
        let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (num.includes(lexeme)) {
            let T = new Token_1.Token("NUM", lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        if (lexeme == "+" || lexeme == "-") {
            let T = new Token_1.Token("ADDOP", lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        else if (lexeme == ",") {
            let T = new Token_1.Token("COMMA", lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        else if (lexeme == "(" || lexeme == ")") {
            let T = new Token_1.Token(lexeme, lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        else if (lexeme == "*") {
            let sym = "MULOP";
            if (this.idx + 1 < this.inputData.length) {
                if (this.inputData[this.idx + 1] == "*") {
                    sym = "POWOP";
                    lexeme = "**";
                    this.idx += 1;
                    this.peekindex += 1;
                }
            }
            let T = new Token_1.Token(sym, lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        else if (lexeme == "/") {
            let sym = "MULOP";
            let T = new Token_1.Token(sym, lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        else if (lexeme == "~") {
            let sym = "BITNOT";
            let T = new Token_1.Token(sym, lexeme, this.currentLine);
            this.current = T;
            this.idx += 1;
            this.peekindex += 1;
            return T;
        }
        else {
            let sym = "ID";
            let operators = ["~", "/", "*", "(", ")", ",", "+", "-"];
            let X = 1;
            while (!operators.includes(this.inputData[this.idx + X]) && this.idx + X < this.inputData.length) {
                lexeme += this.inputData[this.idx + X];
                X++;
            }
            lexeme = lexeme.trim();
            let T = new Token_1.Token(sym, lexeme, this.currentLine);
            this.current = T;
            this.idx += X;
            this.peekindex += X;
            return T;
        }
    }
    atEnd() {
        if (this.idx >= this.inputData.length) {
            return true;
        }
        else {
            return false;
        }
    }
    previous() {
        if (this.prev == null) {
            return null;
        }
        return this.prev.sym;
    }
    peek() {
        if (this.inputData[this.peekindex] == " ") {
            this.peekindex += 1;
            return this.peek();
        }
        if (this.peekindex >= this.inputData.length) {
            //special "end of file" metatoken
            let end = this.peekline;
            this.peekindex = this.idx;
            this.peekline = this.currentLine;
            return new Token_1.Token("$", undefined, end);
        }
        let lexeme = this.inputData[this.peekindex];
        let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (num.includes(lexeme)) {
            let T = new Token_1.Token("NUM", lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T;
        }
        if (lexeme == "+" || lexeme == "-") {
            let T = new Token_1.Token("ADDOP", lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T;
        }
        else if (lexeme == ",") {
            let T = new Token_1.Token("COMMA", lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T;
        }
        else if (lexeme == "(" || lexeme == ")") {
            let T = new Token_1.Token(lexeme, lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T;
        }
        else if (lexeme == "*") {
            let sym = "MULOP";
            if (this.idx + 1 < this.inputData.length) {
                if (this.inputData[this.idx + 1] == "*") {
                    sym = "POWOP";
                    lexeme = "**";
                }
            }
            let T = new Token_1.Token(sym, lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T;
        }
        else if (lexeme == "/") {
            let sym = "MULOP";
            let T = new Token_1.Token(sym, lexeme, this.currentLine);
            this.peekindex = this.idx;
            return T;
        }
    }
}
exports.Tokenizer = Tokenizer;
//# sourceMappingURL=Tokenizer- alternate.js.map