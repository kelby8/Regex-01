"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = require("./Token");
class Tokenizer {
    constructor(input) {
        this.grammar = input;
    }
    setInput(inputData) {
        this.inputData = inputData;
        this.idx = 0;
        this.peekindex = 0;
        this.currentLine = 1;
        this.peekline = 1;
    }
    next() {
        if (this.inputData[this.idx] == "\n") {
            this.idx += 1;
            this.currentLine += 1;
            this.peekindex += 1;
            this.peekline += 1;
            return this.next();
        }
        else if (this.inputData[this.idx] == " ") {
            this.idx += 1;
            this.peekindex += 1;
            return this.next();
        }
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            return new Token_1.Token("$", undefined, this.currentLine);
        }
        let last = null;
        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            let terminal = this.grammar.terminals[i];
            let sym = terminal[0];
            let rex = terminal[1]; //RegExp
            rex.lastIndex = this.idx; //tell where to start searching
            let m = rex.exec(this.inputData); //do the search
            if (m) {
                //m[0] contains matched text as string
                let lexeme = m[0];
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    last = m;
                    let T = new Token_1.Token(sym, lexeme, this.currentLine);
                    this.idx += lexeme.length;
                    this.peekindex += lexeme.length;
                    if (lexeme.includes("\n")) {
                        let temp = lexeme.split("\n");
                        this.currentLine += temp.length - 1;
                        this.peekline += temp.length - 1;
                    }
                    return T;
                }
                else {
                    //skip whitespace and get next real token
                    this.idx += lexeme.length;
                    this.peekindex += lexeme.length;
                    return this.next();
                }
            }
        }
        console.log(last);
        //no match; syntax error
        throw new Error("no match found");
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
        return "";
    }
    peek() {
        if (this.inputData[this.idx] == "\n") {
            this.peekindex += 1;
            this.peekline += 1;
            return this.peek();
        }
        else if (this.inputData[this.idx] == " ") {
            this.peekindex += 1;
            return this.peek();
        }
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            let end = this.peekline;
            this.peekindex = this.idx;
            this.peekline = this.currentLine;
            return new Token_1.Token("$", undefined, end);
        }
        let last = null;
        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            let terminal = this.grammar.terminals[i];
            let sym = terminal[0];
            let rex = terminal[1]; //RegExp
            rex.lastIndex = this.peekindex; //tell where to start searching
            let m = rex.exec(this.inputData); //do the search
            if (m) {
                //m[0] contains matched text as string
                let lexeme = m[0];
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    last = m;
                    let T = new Token_1.Token(sym, lexeme, this.currentLine);
                    this.idx += lexeme.length;
                    if (lexeme.includes("\n")) {
                        let temp = lexeme.split("\n");
                        this.peekline += temp.length - 1;
                    }
                    this.peekindex = this.idx;
                    this.peekline = this.currentLine;
                    return T;
                }
                else {
                    //skip whitespace and get next real token
                    this.peekindex += lexeme.length;
                    return this.peek();
                }
            }
        }
        console.log(last);
        //no match; syntax error
        throw new Error("no match found");
    }
}
exports.Tokenizer = Tokenizer;
//# sourceMappingURL=Tokenizer.js.map