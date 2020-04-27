// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarKSListener = require('./grammarKSListener').grammarKSListener;
var grammarFileName = "grammarKS.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\rA\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004 \n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u00066\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0002\u0002",
    "\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002<\u0002\u0012",
    "\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001f",
    "\u0003\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002\n5\u0003\u0002\u0002",
    "\u0002\f7\u0003\u0002\u0002\u0002\u000e;\u0003\u0002\u0002\u0002\u0010",
    "=\u0003\u0002\u0002\u0002\u0012\u0013\u0005\f\u0007\u0002\u0013\u0003",
    "\u0003\u0002\u0002\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015\u0016",
    "\u0005\u0004\u0003\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0019",
    "\u0003\u0002\u0002\u0002\u0018\u0014\u0003\u0002\u0002\u0002\u0018\u0017",
    "\u0003\u0002\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a ",
    "\u0005\n\u0006\u0002\u001b \u0005\b\u0005\u0002\u001c\u001d\u0005\u0010",
    "\t\u0002\u001d\u001e\u0007\u0003\u0002\u0002\u001e \u0003\u0002\u0002",
    "\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002",
    "\u0002\u001f\u001c\u0003\u0002\u0002\u0002 \u0007\u0003\u0002\u0002",
    "\u0002!\"\u0007\u0004\u0002\u0002\"#\u0007\u0005\u0002\u0002#$\u0005",
    "\u000e\b\u0002$%\u0007\u0006\u0002\u0002%&\u0005\f\u0007\u0002&\t\u0003",
    "\u0002\u0002\u0002\'(\u0007\u0007\u0002\u0002()\u0007\u0005\u0002\u0002",
    ")*\u0005\u000e\b\u0002*+\u0007\u0006\u0002\u0002+,\u0005\f\u0007\u0002",
    ",6\u0003\u0002\u0002\u0002-.\u0007\u0007\u0002\u0002./\u0007\u0005\u0002",
    "\u0002/0\u0005\u000e\b\u000201\u0007\u0006\u0002\u000212\u0005\f\u0007",
    "\u000223\u0007\b\u0002\u000234\u0005\f\u0007\u000246\u0003\u0002\u0002",
    "\u00025\'\u0003\u0002\u0002\u00025-\u0003\u0002\u0002\u00026\u000b\u0003",
    "\u0002\u0002\u000278\u0007\n\u0002\u000289\u0005\u0004\u0003\u00029",
    ":\u0007\u000b\u0002\u0002:\r\u0003\u0002\u0002\u0002;<\u0007\f\u0002",
    "\u0002<\u000f\u0003\u0002\u0002\u0002=>\u0007\t\u0002\u0002>?\u0005",
    "\u000e\b\u0002?\u0011\u0003\u0002\u0002\u0002\u0005\u0018\u001f5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'while'", "'('", "')'", "'if'", "'else'", 
                     "'return'", "'{'", "'}'" ];

var symbolicNames = [ null, "SEMI", "WHILE", "LP", "RP", "IF", "ELSE", "RETURN", 
                      "LBR", "RBR", "NUM", "WHITESPACE" ];

var ruleNames =  [ "program", "stmts", "stmt", "loop", "cond", "braceblock", 
                   "expr", "return_stmt" ];

function grammarKSParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

grammarKSParser.prototype = Object.create(antlr4.Parser.prototype);
grammarKSParser.prototype.constructor = grammarKSParser;

Object.defineProperty(grammarKSParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

grammarKSParser.EOF = antlr4.Token.EOF;
grammarKSParser.SEMI = 1;
grammarKSParser.WHILE = 2;
grammarKSParser.LP = 3;
grammarKSParser.RP = 4;
grammarKSParser.IF = 5;
grammarKSParser.ELSE = 6;
grammarKSParser.RETURN = 7;
grammarKSParser.LBR = 8;
grammarKSParser.RBR = 9;
grammarKSParser.NUM = 10;
grammarKSParser.WHITESPACE = 11;

grammarKSParser.RULE_program = 0;
grammarKSParser.RULE_stmts = 1;
grammarKSParser.RULE_stmt = 2;
grammarKSParser.RULE_loop = 3;
grammarKSParser.RULE_cond = 4;
grammarKSParser.RULE_braceblock = 5;
grammarKSParser.RULE_expr = 6;
grammarKSParser.RULE_return_stmt = 7;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitProgram(this);
	}
};




grammarKSParser.ProgramContext = ProgramContext;

grammarKSParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, grammarKSParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitStmts(this);
	}
};




grammarKSParser.StmtsContext = StmtsContext;

grammarKSParser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, grammarKSParser.RULE_stmts);
    try {
        this.state = 22;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.WHILE:
        case grammarKSParser.IF:
        case grammarKSParser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.stmt();
            this.state = 19;
            this.stmts();
            break;
        case grammarKSParser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.return_stmt = function() {
    return this.getTypedRuleContext(Return_stmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(grammarKSParser.SEMI, 0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitStmt(this);
	}
};




grammarKSParser.StmtContext = StmtContext;

grammarKSParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, grammarKSParser.RULE_stmt);
    try {
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.cond();
            break;
        case grammarKSParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.loop();
            break;
        case grammarKSParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 26;
            this.return_stmt();
            this.state = 27;
            this.match(grammarKSParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(grammarKSParser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(grammarKSParser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(grammarKSParser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitLoop(this);
	}
};




grammarKSParser.LoopContext = LoopContext;

grammarKSParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, grammarKSParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.match(grammarKSParser.WHILE);
        this.state = 32;
        this.match(grammarKSParser.LP);
        this.state = 33;
        this.expr();
        this.state = 34;
        this.match(grammarKSParser.RP);
        this.state = 35;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(grammarKSParser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(grammarKSParser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(grammarKSParser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(grammarKSParser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitCond(this);
	}
};




grammarKSParser.CondContext = CondContext;

grammarKSParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, grammarKSParser.RULE_cond);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.match(grammarKSParser.IF);
            this.state = 38;
            this.match(grammarKSParser.LP);
            this.state = 39;
            this.expr();
            this.state = 40;
            this.match(grammarKSParser.RP);
            this.state = 41;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 43;
            this.match(grammarKSParser.IF);
            this.state = 44;
            this.match(grammarKSParser.LP);
            this.state = 45;
            this.expr();
            this.state = 46;
            this.match(grammarKSParser.RP);
            this.state = 47;
            this.braceblock();
            this.state = 48;
            this.match(grammarKSParser.ELSE);
            this.state = 49;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(grammarKSParser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(grammarKSParser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitBraceblock(this);
	}
};




grammarKSParser.BraceblockContext = BraceblockContext;

grammarKSParser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, grammarKSParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(grammarKSParser.LBR);
        this.state = 54;
        this.stmts();
        this.state = 55;
        this.match(grammarKSParser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUM = function() {
    return this.getToken(grammarKSParser.NUM, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitExpr(this);
	}
};




grammarKSParser.ExprContext = ExprContext;

grammarKSParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, grammarKSParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(grammarKSParser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Return_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_return_stmt;
    return this;
}

Return_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_stmtContext.prototype.constructor = Return_stmtContext;

Return_stmtContext.prototype.RETURN = function() {
    return this.getToken(grammarKSParser.RETURN, 0);
};

Return_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Return_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterReturn_stmt(this);
	}
};

Return_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitReturn_stmt(this);
	}
};




grammarKSParser.Return_stmtContext = Return_stmtContext;

grammarKSParser.prototype.return_stmt = function() {

    var localctx = new Return_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, grammarKSParser.RULE_return_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(grammarKSParser.RETURN);
        this.state = 60;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.grammarKSParser = grammarKSParser;
