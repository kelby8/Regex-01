// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarKSListener = require('./grammarKSListener').grammarKSListener;
var grammarFileName = "grammarKS.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b\u00c2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "-\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00047\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006M\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0007\t[\n\t\f\t\u000e\t^\u000b\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\nf\n\n\f\n\u000e\ni\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000bn\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\fu\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0007\r\u0080\n\r\f\r\u000e\r\u0083\u000b",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u008b\n\u000e\f\u000e\u000e\u000e\u008e\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0093\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u009b\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00c0\n\u0013\u0003\u0013\u0002\u0006\u0010",
    "\u0012\u0018\u001a\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$\u0002\u0002\u0002\u00c3\u0002&\u0003",
    "\u0002\u0002\u0002\u0004,\u0003\u0002\u0002\u0002\u00066\u0003\u0002",
    "\u0002\u0002\b8\u0003\u0002\u0002\u0002\nL\u0003\u0002\u0002\u0002\f",
    "N\u0003\u0002\u0002\u0002\u000eR\u0003\u0002\u0002\u0002\u0010T\u0003",
    "\u0002\u0002\u0002\u0012_\u0003\u0002\u0002\u0002\u0014m\u0003\u0002",
    "\u0002\u0002\u0016t\u0003\u0002\u0002\u0002\u0018v\u0003\u0002\u0002",
    "\u0002\u001a\u0084\u0003\u0002\u0002\u0002\u001c\u0092\u0003\u0002\u0002",
    "\u0002\u001e\u009a\u0003\u0002\u0002\u0002 \u009c\u0003\u0002\u0002",
    "\u0002\"\u009f\u0003\u0002\u0002\u0002$\u00bf\u0003\u0002\u0002\u0002",
    "&\'\u0005\f\u0007\u0002\'\u0003\u0003\u0002\u0002\u0002()\u0005\u0006",
    "\u0004\u0002)*\u0005\u0004\u0003\u0002*-\u0003\u0002\u0002\u0002+-\u0003",
    "\u0002\u0002\u0002,(\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002",
    "-\u0005\u0003\u0002\u0002\u0002./\u0005\"\u0012\u0002/0\u0007\u0003",
    "\u0002\u000207\u0003\u0002\u0002\u000217\u0005\n\u0006\u000227\u0005",
    "\b\u0005\u000234\u0005 \u0011\u000245\u0007\u0003\u0002\u000257\u0003",
    "\u0002\u0002\u00026.\u0003\u0002\u0002\u000261\u0003\u0002\u0002\u0002",
    "62\u0003\u0002\u0002\u000263\u0003\u0002\u0002\u00027\u0007\u0003\u0002",
    "\u0002\u000289\u0007\u0004\u0002\u00029:\u0007\u0005\u0002\u0002:;\u0005",
    "\u000e\b\u0002;<\u0007\u0006\u0002\u0002<=\u0005\f\u0007\u0002=\t\u0003",
    "\u0002\u0002\u0002>?\u0007\u0007\u0002\u0002?@\u0007\u0005\u0002\u0002",
    "@A\u0005\u000e\b\u0002AB\u0007\u0006\u0002\u0002BC\u0005\f\u0007\u0002",
    "CM\u0003\u0002\u0002\u0002DE\u0007\u0007\u0002\u0002EF\u0007\u0005\u0002",
    "\u0002FG\u0005\u000e\b\u0002GH\u0007\u0006\u0002\u0002HI\u0005\f\u0007",
    "\u0002IJ\u0007\b\u0002\u0002JK\u0005\f\u0007\u0002KM\u0003\u0002\u0002",
    "\u0002L>\u0003\u0002\u0002\u0002LD\u0003\u0002\u0002\u0002M\u000b\u0003",
    "\u0002\u0002\u0002NO\u0007\u0011\u0002\u0002OP\u0005\u0004\u0003\u0002",
    "PQ\u0007\u0012\u0002\u0002Q\r\u0003\u0002\u0002\u0002RS\u0005\u0010",
    "\t\u0002S\u000f\u0003\u0002\u0002\u0002TU\b\t\u0001\u0002UV\u0005\u0012",
    "\n\u0002V\\\u0003\u0002\u0002\u0002WX\f\u0004\u0002\u0002XY\u0007\u0014",
    "\u0002\u0002Y[\u0005\u0012\n\u0002ZW\u0003\u0002\u0002\u0002[^\u0003",
    "\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "]\u0011\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_`\b\n\u0001",
    "\u0002`a\u0005\u0014\u000b\u0002ag\u0003\u0002\u0002\u0002bc\f\u0004",
    "\u0002\u0002cd\u0007\u0015\u0002\u0002df\u0005\u0014\u000b\u0002eb\u0003",
    "\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002h\u0013\u0003\u0002\u0002\u0002ig\u0003\u0002",
    "\u0002\u0002jk\u0007\u0016\u0002\u0002kn\u0005\u0014\u000b\u0002ln\u0005",
    "\u0016\f\u0002mj\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002n",
    "\u0015\u0003\u0002\u0002\u0002op\u0005\u0018\r\u0002pq\u0007\u0017\u0002",
    "\u0002qr\u0005\u0018\r\u0002ru\u0003\u0002\u0002\u0002su\u0005\u0018",
    "\r\u0002to\u0003\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002u\u0017",
    "\u0003\u0002\u0002\u0002vw\b\r\u0001\u0002wx\u0005\u001a\u000e\u0002",
    "x\u0081\u0003\u0002\u0002\u0002yz\f\u0005\u0002\u0002z{\u0007\u0018",
    "\u0002\u0002{\u0080\u0005\u001a\u000e\u0002|}\f\u0004\u0002\u0002}~",
    "\u0007\u001a\u0002\u0002~\u0080\u0005\u001a\u000e\u0002\u007fy\u0003",
    "\u0002\u0002\u0002\u007f|\u0003\u0002\u0002\u0002\u0080\u0083\u0003",
    "\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003",
    "\u0002\u0002\u0002\u0082\u0019\u0003\u0002\u0002\u0002\u0083\u0081\u0003",
    "\u0002\u0002\u0002\u0084\u0085\b\u000e\u0001\u0002\u0085\u0086\u0005",
    "\u001c\u000f\u0002\u0086\u008c\u0003\u0002\u0002\u0002\u0087\u0088\f",
    "\u0004\u0002\u0002\u0088\u0089\u0007\u0019\u0002\u0002\u0089\u008b\u0005",
    "\u001c\u000f\u0002\u008a\u0087\u0003\u0002\u0002\u0002\u008b\u008e\u0003",
    "\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003",
    "\u0002\u0002\u0002\u008d\u001b\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u0007\u001a\u0002\u0002\u0090\u0093\u0005",
    "\u001c\u000f\u0002\u0091\u0093\u0005\u001e\u0010\u0002\u0092\u008f\u0003",
    "\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u001d\u0003",
    "\u0002\u0002\u0002\u0094\u009b\u0007\u0013\u0002\u0002\u0095\u0096\u0007",
    "\u0005\u0002\u0002\u0096\u0097\u0005\u000e\b\u0002\u0097\u0098\u0007",
    "\u0006\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u009b\u0005",
    "\"\u0012\u0002\u009a\u0094\u0003\u0002\u0002\u0002\u009a\u0095\u0003",
    "\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u001f\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0007\t\u0002\u0002\u009d\u009e\u0005",
    "\u000e\b\u0002\u009e!\u0003\u0002\u0002\u0002\u009f\u00a0\u0005$\u0013",
    "\u0002\u00a0#\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\n\u0002\u0002",
    "\u00a2\u00a3\u0007\u0005\u0002\u0002\u00a3\u00a4\u0005\u000e\b\u0002",
    "\u00a4\u00a5\u0007\u0006\u0002\u0002\u00a5\u00c0\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\u0007\u000b\u0002\u0002\u00a7\u00a8\u0007\u0005\u0002\u0002",
    "\u00a8\u00c0\u0007\u0006\u0002\u0002\u00a9\u00aa\u0007\f\u0002\u0002",
    "\u00aa\u00ab\u0007\u0005\u0002\u0002\u00ab\u00ac\u0005\u000e\b\u0002",
    "\u00ac\u00ad\u0007\u0006\u0002\u0002\u00ad\u00c0\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0007\r\u0002\u0002\u00af\u00b0\u0007\u0005\u0002\u0002",
    "\u00b0\u00b1\u0005\u000e\b\u0002\u00b1\u00b2\u0007\u0006\u0002\u0002",
    "\u00b2\u00c0\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u000e\u0002\u0002",
    "\u00b4\u00b5\u0007\u0005\u0002\u0002\u00b5\u00b6\u0005\u000e\b\u0002",
    "\u00b6\u00b7\u0007\u000f\u0002\u0002\u00b7\u00b8\u0005\u000e\b\u0002",
    "\u00b8\u00b9\u0007\u0006\u0002\u0002\u00b9\u00c0\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0007\u0010\u0002\u0002\u00bb\u00bc\u0007\u0005\u0002\u0002",
    "\u00bc\u00bd\u0005\u000e\b\u0002\u00bd\u00be\u0007\u0006\u0002\u0002",
    "\u00be\u00c0\u0003\u0002\u0002\u0002\u00bf\u00a1\u0003\u0002\u0002\u0002",
    "\u00bf\u00a6\u0003\u0002\u0002\u0002\u00bf\u00a9\u0003\u0002\u0002\u0002",
    "\u00bf\u00ae\u0003\u0002\u0002\u0002\u00bf\u00b3\u0003\u0002\u0002\u0002",
    "\u00bf\u00ba\u0003\u0002\u0002\u0002\u00c0%\u0003\u0002\u0002\u0002",
    "\u000f,6L\\gmt\u007f\u0081\u008c\u0092\u009a\u00bf"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'while'", "'('", "')'", "'if'", "'else'", 
                     "'return'", "'print'", "'input'", "'open'", "'read'", 
                     "'write'", "','", "'close'", "'{'", "'}'", null, "'or'", 
                     "'and'", "'not'", null, "'+'", null, "'-'" ];

var symbolicNames = [ null, "SEMI", "WHILE", "LP", "RP", "IF", "ELSE", "RETURN", 
                      "PRINT", "INPUT", "OPEN", "READ", "WRITE", "CMA", 
                      "CLOSE", "LBR", "RBR", "NUM", "OR", "AND", "NOT", 
                      "RELOP", "PLUS", "MULOP", "MINUS", "WHITESPACE" ];

var ruleNames =  [ "program", "stmts", "stmt", "loop", "cond", "braceblock", 
                   "expr", "orexp", "andexp", "notexp", "rel", "sum", "term", 
                   "neg", "factor", "return_stmt", "func_call", "builtin_func_call" ];

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
grammarKSParser.PRINT = 8;
grammarKSParser.INPUT = 9;
grammarKSParser.OPEN = 10;
grammarKSParser.READ = 11;
grammarKSParser.WRITE = 12;
grammarKSParser.CMA = 13;
grammarKSParser.CLOSE = 14;
grammarKSParser.LBR = 15;
grammarKSParser.RBR = 16;
grammarKSParser.NUM = 17;
grammarKSParser.OR = 18;
grammarKSParser.AND = 19;
grammarKSParser.NOT = 20;
grammarKSParser.RELOP = 21;
grammarKSParser.PLUS = 22;
grammarKSParser.MULOP = 23;
grammarKSParser.MINUS = 24;
grammarKSParser.WHITESPACE = 25;

grammarKSParser.RULE_program = 0;
grammarKSParser.RULE_stmts = 1;
grammarKSParser.RULE_stmt = 2;
grammarKSParser.RULE_loop = 3;
grammarKSParser.RULE_cond = 4;
grammarKSParser.RULE_braceblock = 5;
grammarKSParser.RULE_expr = 6;
grammarKSParser.RULE_orexp = 7;
grammarKSParser.RULE_andexp = 8;
grammarKSParser.RULE_notexp = 9;
grammarKSParser.RULE_rel = 10;
grammarKSParser.RULE_sum = 11;
grammarKSParser.RULE_term = 12;
grammarKSParser.RULE_neg = 13;
grammarKSParser.RULE_factor = 14;
grammarKSParser.RULE_return_stmt = 15;
grammarKSParser.RULE_func_call = 16;
grammarKSParser.RULE_builtin_func_call = 17;


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
        this.state = 36;
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
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.WHILE:
        case grammarKSParser.IF:
        case grammarKSParser.RETURN:
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.CLOSE:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.stmt();
            this.state = 39;
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

StmtContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(grammarKSParser.SEMI, 0);
};

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.return_stmt = function() {
    return this.getTypedRuleContext(Return_stmtContext,0);
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
        this.state = 52;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.CLOSE:
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.func_call();
            this.state = 45;
            this.match(grammarKSParser.SEMI);
            break;
        case grammarKSParser.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            this.cond();
            break;
        case grammarKSParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 48;
            this.loop();
            break;
        case grammarKSParser.RETURN:
            this.enterOuterAlt(localctx, 4);
            this.state = 49;
            this.return_stmt();
            this.state = 50;
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
        this.state = 54;
        this.match(grammarKSParser.WHILE);
        this.state = 55;
        this.match(grammarKSParser.LP);
        this.state = 56;
        this.expr();
        this.state = 57;
        this.match(grammarKSParser.RP);
        this.state = 58;
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
        this.state = 74;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.match(grammarKSParser.IF);
            this.state = 61;
            this.match(grammarKSParser.LP);
            this.state = 62;
            this.expr();
            this.state = 63;
            this.match(grammarKSParser.RP);
            this.state = 64;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.match(grammarKSParser.IF);
            this.state = 67;
            this.match(grammarKSParser.LP);
            this.state = 68;
            this.expr();
            this.state = 69;
            this.match(grammarKSParser.RP);
            this.state = 70;
            this.braceblock();
            this.state = 71;
            this.match(grammarKSParser.ELSE);
            this.state = 72;
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
        this.state = 76;
        this.match(grammarKSParser.LBR);
        this.state = 77;
        this.stmts();
        this.state = 78;
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

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
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
        this.state = 80;
        this.orexp(0);
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


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(grammarKSParser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitOrexp(this);
	}
};



grammarKSParser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, grammarKSParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_orexp);
                this.state = 85;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 86;
                this.match(grammarKSParser.OR);
                this.state = 87;
                this.andexp(0); 
            }
            this.state = 92;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(grammarKSParser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitAndexp(this);
	}
};



grammarKSParser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, grammarKSParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 101;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_andexp);
                this.state = 96;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 97;
                this.match(grammarKSParser.AND);
                this.state = 98;
                this.notexp(); 
            }
            this.state = 103;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(grammarKSParser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitNotexp(this);
	}
};




grammarKSParser.NotexpContext = NotexpContext;

grammarKSParser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, grammarKSParser.RULE_notexp);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.match(grammarKSParser.NOT);
            this.state = 105;
            this.notexp();
            break;
        case grammarKSParser.LP:
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.CLOSE:
        case grammarKSParser.NUM:
        case grammarKSParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.rel();
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


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(grammarKSParser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitRel(this);
	}
};




grammarKSParser.RelContext = RelContext;

grammarKSParser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, grammarKSParser.RULE_rel);
    try {
        this.state = 114;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.sum(0);
            this.state = 110;
            this.match(grammarKSParser.RELOP);
            this.state = 111;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.sum(0);
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


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(grammarKSParser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(grammarKSParser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitSum(this);
	}
};



grammarKSParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, grammarKSParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 127;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 125;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_sum);
                    this.state = 119;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 120;
                    this.match(grammarKSParser.PLUS);
                    this.state = 121;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_sum);
                    this.state = 122;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 123;
                    this.match(grammarKSParser.MINUS);
                    this.state = 124;
                    this.term(0);
                    break;

                } 
            }
            this.state = 129;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(grammarKSParser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitTerm(this);
	}
};



grammarKSParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, grammarKSParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 138;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_term);
                this.state = 133;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 134;
                this.match(grammarKSParser.MULOP);
                this.state = 135;
                this.neg(); 
            }
            this.state = 140;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(grammarKSParser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitNeg(this);
	}
};




grammarKSParser.NegContext = NegContext;

grammarKSParser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, grammarKSParser.RULE_neg);
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.match(grammarKSParser.MINUS);
            this.state = 142;
            this.neg();
            break;
        case grammarKSParser.LP:
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.CLOSE:
        case grammarKSParser.NUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.factor();
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


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.NUM = function() {
    return this.getToken(grammarKSParser.NUM, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(grammarKSParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(grammarKSParser.RP, 0);
};

FactorContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitFactor(this);
	}
};




grammarKSParser.FactorContext = FactorContext;

grammarKSParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, grammarKSParser.RULE_factor);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 146;
            this.match(grammarKSParser.NUM);
            break;
        case grammarKSParser.LP:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.match(grammarKSParser.LP);
            this.state = 148;
            this.expr();
            this.state = 149;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.CLOSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 151;
            this.func_call();
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
    this.enterRule(localctx, 30, grammarKSParser.RULE_return_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(grammarKSParser.RETURN);
        this.state = 155;
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


function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_func_call;
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.builtin_func_call = function() {
    return this.getTypedRuleContext(Builtin_func_callContext,0);
};

Func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterFunc_call(this);
	}
};

Func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitFunc_call(this);
	}
};




grammarKSParser.Func_callContext = Func_callContext;

grammarKSParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, grammarKSParser.RULE_func_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.builtin_func_call();
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


function Builtin_func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_builtin_func_call;
    return this;
}

Builtin_func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Builtin_func_callContext.prototype.constructor = Builtin_func_callContext;

Builtin_func_callContext.prototype.PRINT = function() {
    return this.getToken(grammarKSParser.PRINT, 0);
};

Builtin_func_callContext.prototype.LP = function() {
    return this.getToken(grammarKSParser.LP, 0);
};

Builtin_func_callContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Builtin_func_callContext.prototype.RP = function() {
    return this.getToken(grammarKSParser.RP, 0);
};

Builtin_func_callContext.prototype.INPUT = function() {
    return this.getToken(grammarKSParser.INPUT, 0);
};

Builtin_func_callContext.prototype.OPEN = function() {
    return this.getToken(grammarKSParser.OPEN, 0);
};

Builtin_func_callContext.prototype.READ = function() {
    return this.getToken(grammarKSParser.READ, 0);
};

Builtin_func_callContext.prototype.WRITE = function() {
    return this.getToken(grammarKSParser.WRITE, 0);
};

Builtin_func_callContext.prototype.CMA = function() {
    return this.getToken(grammarKSParser.CMA, 0);
};

Builtin_func_callContext.prototype.CLOSE = function() {
    return this.getToken(grammarKSParser.CLOSE, 0);
};

Builtin_func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterBuiltin_func_call(this);
	}
};

Builtin_func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitBuiltin_func_call(this);
	}
};




grammarKSParser.Builtin_func_callContext = Builtin_func_callContext;

grammarKSParser.prototype.builtin_func_call = function() {

    var localctx = new Builtin_func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, grammarKSParser.RULE_builtin_func_call);
    try {
        this.state = 189;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.PRINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 159;
            this.match(grammarKSParser.PRINT);
            this.state = 160;
            this.match(grammarKSParser.LP);
            this.state = 161;
            this.expr();
            this.state = 162;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.INPUT:
            this.enterOuterAlt(localctx, 2);
            this.state = 164;
            this.match(grammarKSParser.INPUT);
            this.state = 165;
            this.match(grammarKSParser.LP);
            this.state = 166;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.OPEN:
            this.enterOuterAlt(localctx, 3);
            this.state = 167;
            this.match(grammarKSParser.OPEN);
            this.state = 168;
            this.match(grammarKSParser.LP);
            this.state = 169;
            this.expr();
            this.state = 170;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.READ:
            this.enterOuterAlt(localctx, 4);
            this.state = 172;
            this.match(grammarKSParser.READ);
            this.state = 173;
            this.match(grammarKSParser.LP);
            this.state = 174;
            this.expr();
            this.state = 175;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.WRITE:
            this.enterOuterAlt(localctx, 5);
            this.state = 177;
            this.match(grammarKSParser.WRITE);
            this.state = 178;
            this.match(grammarKSParser.LP);
            this.state = 179;
            this.expr();
            this.state = 180;
            this.match(grammarKSParser.CMA);
            this.state = 181;
            this.expr();
            this.state = 182;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.CLOSE:
            this.enterOuterAlt(localctx, 6);
            this.state = 184;
            this.match(grammarKSParser.CLOSE);
            this.state = 185;
            this.match(grammarKSParser.LP);
            this.state = 186;
            this.expr();
            this.state = 187;
            this.match(grammarKSParser.RP);
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


grammarKSParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.orexp_sempred(localctx, predIndex);
	case 8:
			return this.andexp_sempred(localctx, predIndex);
	case 11:
			return this.sum_sempred(localctx, predIndex);
	case 12:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

grammarKSParser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

grammarKSParser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

grammarKSParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

grammarKSParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.grammarKSParser = grammarKSParser;
