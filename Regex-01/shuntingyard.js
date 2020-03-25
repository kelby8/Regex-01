"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokenizer_1 = require("./Tokenizer");
class TreeNode {
    constructor(sym, token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
        this.parent = null;
    }
    addChild(child) {
        this.children.push(child);
        child.parent = this;
    }
}
function associativity(A) {
    if (A == "POWOP" || A == "BITNOT") {
        return "right";
    }
    return "left";
}
function precedence(A) {
    if (A == "FUNC-CALL") {
        return 7;
    }
    if (A == "POWOP") {
        return 6;
    }
    if (A == "BITNOT") {
        return 5;
    }
    if (A == "NEGATE") {
        return 4;
    }
    if (A == "MULOP") {
        return 3;
    }
    if (A == "ADDOP") {
        return 2;
    }
    if (A == "COMMA") {
        return 1;
    }
    return 0;
}
//operandStack: TreeNode[]
//operatorStack: TreeNode[]
function doOperation(operandStack, operatorStack) {
    let opNode = operatorStack.pop();
    //console.log(opNode)
    let c1 = operandStack.pop();
    //console.log(c1.sym)
    if (precedence(opNode.sym) != 4 && precedence(opNode.sym) != 5) {
        let c2 = operandStack.pop();
        //console.log(c2.sym)
        opNode.addChild(c2);
    }
    opNode.addChild(c1);
    operandStack.push(opNode);
    //console.log("dooperation")
    //console.log(operandStack)
}
function parse(input) {
    let operandStack = [];
    let operatorStack = [];
    let root = null;
    let tokenizer = new Tokenizer_1.Tokenizer(input);
    while (!tokenizer.atEnd()) {
        let t = tokenizer.next();
        //console.log(t)
        if (t.lexeme == "-") {
            let p = tokenizer.previous();
            if (p == null || p == "(" || (p != "NUM" && p != "SYM" && p != ")" && p != "ID")) {
                //console.log(p)
                t.sym = "NEGATE";
            }
        }
        let sym = t.sym;
        if (t.sym == "$") {
            break;
        }
        if (t.sym == "NUM" || t.sym == "ID") {
            root = new TreeNode(t.sym, t);
            operandStack.push(root);
            //console.log("NUM or ID")
            //console.log(operandStack)
        }
        else if (t.sym == "(") {
            root = new TreeNode(t.sym, t);
            operatorStack.push(root);
            //console.log("left parenthesis")
            //console.log(operatorStack)
        }
        else if (t.sym == "NEGATE") {
            root = new TreeNode(t.sym, t);
            operatorStack.push(root);
            //console.log("negate")
            //console.log(operatorStack)
        }
        else if (t.sym == "BITNOT") {
            root = new TreeNode(t.sym, t);
            operatorStack.push(root);
            //console.log("BITNOT")
            //console.log(operatorStack)
        }
        else if (t.sym == ")") {
            //console.log("right parenthesis")
            let temp = operatorStack.pop();
            operatorStack.push(temp);
            while (temp.sym != "(") {
                doOperation(operandStack, operatorStack);
                temp = operatorStack.pop();
                operatorStack.push(temp);
            }
            //console.log(operandStack)
            operatorStack.pop();
        }
        else {
            let assoc = associativity(sym);
            while (true) {
                if (operatorStack.length == 0) {
                    //console.log("break!!")
                    break;
                }
                let A = operatorStack.pop();
                operatorStack.push(A);
                //console.log("operator")
                //console.log(A)
                if (assoc == "left" && precedence(A.sym) >= precedence(sym)) {
                    doOperation(operandStack, operatorStack);
                    //console.log("dooperation")
                    //console.log(operandStack)
                }
                else if (assoc == "right" && precedence(A.sym) > precedence(sym)) {
                    doOperation(operandStack, operatorStack);
                    //console.log("dooperation")
                    //console.log(operandStack)
                }
                else {
                    break;
                }
            }
            root = new TreeNode(t.sym, t);
            operatorStack.push(root);
        }
    }
    while (operatorStack.length != 0) {
        doOperation(operandStack, operatorStack);
    }
    while (root.parent != null) {
        root = root.parent;
    }
    return root;
}
exports.parse = parse;
//# sourceMappingURL=shuntingyard.js.map