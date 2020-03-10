import { Token } from "./token"
import { Tokenizer } from "./Tokenizer"

class TreeNode {
    sym: string;
    token: Token;
    children: TreeNode[];
    parent: TreeNode;
    constructor(sym: string, token: Token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
        this.parent = null;
    }
    addChild(child: TreeNode) {
        this.children.push(child);
        child.parent = this;
    }

}

function associativity(A: string): string{
    if (A == "POWOP") {
        return "right"
    }
    return "left"
}

function precedence(A: string): number{
    if (A == "FUNC-CALL") {
        return 6
    }
    if (A == "POWOP") {
        return 5
    }
    if (A == "NEGATE") {
        return 4
    }
    if (A == "MULOP") {
        return 3
    }
    if (A == "ADDOP") {
        return 2
    }
    if (A == "COMMA") {
        return 1
    }
    return 0
}

//operandStack: TreeNode[]
//operatorStack: TreeNode[]

function doOperation(operandStack: TreeNode[], operatorStack: TreeNode[]) {
    let opNode = operatorStack.pop()
    let c1 = operandStack.pop()
    if (precedence(opNode.sym) != 4) {
        let c2 = operandStack.pop()
        opNode.addChild(c2)
    }
    opNode.addChild(c1)
    operandStack.push(opNode)
}

export function parse(input: string): TreeNode{
    let operandStack = []
    let operatorStack = []
    let root = null
    let tokenizer = new Tokenizer(input);
    while (!tokenizer.atEnd()) {
        let t = tokenizer.next()
        if (t.lexeme == "-") {
            let p = tokenizer.previous()
            if (p == null || p == "(" || (p != "NUM" && p != "SYM")){
                t.sym = "NEGATE"
            }
        }
        let sym = t.sym
        if (sym == "NUM" || sym == "ID") {
            root = new TreeNode(t.sym, t)
            operandStack.push(root)
        }
        else if (t.sym == "(") {
            root = new TreeNode(t.sym, t)
            operatorStack.push(root)
        }
        else if (t.sym == ")") {
            let temp = operatorStack.pop()
            operatorStack.push(temp)
            while (temp.sym != "(") {
                doOperation(operandStack, operatorStack)
                temp = operatorStack.pop()
                operatorStack.push(temp)
            }
            operatorStack.pop()
        }
        else {
            let assoc = associativity(sym)
            while (true) {
                if (operatorStack.length == 0) {
                    break
                }
                let A = operatorStack.pop()
                operatorStack.push(A)
                if (assoc == "left" && precedence(A.sym) >= precedence(sym)) {
                    doOperation(operandStack, operatorStack)
                }
                else if (assoc == "right" && precedence(A.sym) > precedence(sym)) {
                    doOperation(operandStack, operatorStack)
                }
                else {
                    break
                }
            }
            root = new TreeNode(t.sym, t)
            operatorStack.push(root)
        }
    }
    while (operatorStack.length != 0) {
        doOperation(operandStack, operatorStack)
    }
    while (root.parent != null) {
        root = root.parent;
    }
    return root
}