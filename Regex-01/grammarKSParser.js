// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarKSListener = require('./grammarKSListener').grammarKSListener;
var grammarFileName = "grammarKS.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003 \u00dc\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005>\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006K\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\te\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\fs\n\f\f\f\u000e\f",
    "v\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r~\n",
    "\r\f\r\u000e\r\u0081\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u0086\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u008d\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u0098\n\u0010\f\u0010\u000e\u0010\u009b\u000b\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u00a3\n\u0011\f\u0011\u000e\u0011\u00a6\u000b\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ab\n\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00b5\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00da\n\u0016\u0003\u0016",
    "\u0002\u0006\u0016\u0018\u001e \u0017\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*\u0002\u0002",
    "\u0002\u00de\u0002,\u0003\u0002\u0002\u0002\u00044\u0003\u0002\u0002",
    "\u0002\u00066\u0003\u0002\u0002\u0002\b=\u0003\u0002\u0002\u0002\nJ",
    "\u0003\u0002\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eP\u0003\u0002",
    "\u0002\u0002\u0010d\u0003\u0002\u0002\u0002\u0012f\u0003\u0002\u0002",
    "\u0002\u0014j\u0003\u0002\u0002\u0002\u0016l\u0003\u0002\u0002\u0002",
    "\u0018w\u0003\u0002\u0002\u0002\u001a\u0085\u0003\u0002\u0002\u0002",
    "\u001c\u008c\u0003\u0002\u0002\u0002\u001e\u008e\u0003\u0002\u0002\u0002",
    " \u009c\u0003\u0002\u0002\u0002\"\u00aa\u0003\u0002\u0002\u0002$\u00b4",
    "\u0003\u0002\u0002\u0002&\u00b6\u0003\u0002\u0002\u0002(\u00b9\u0003",
    "\u0002\u0002\u0002*\u00d9\u0003\u0002\u0002\u0002,-\u0005\u0004\u0003",
    "\u0002-.\u0005\u0012\n\u0002.\u0003\u0003\u0002\u0002\u0002/0\u0005",
    "\u0006\u0004\u000201\u0007\u0003\u0002\u000212\u0005\u0004\u0003\u0002",
    "25\u0003\u0002\u0002\u000235\u0003\u0002\u0002\u00024/\u0003\u0002\u0002",
    "\u000243\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002\u000267\u0007",
    "\u001d\u0002\u000278\u0007\u001f\u0002\u00028\u0007\u0003\u0002\u0002",
    "\u00029:\u0005\n\u0006\u0002:;\u0005\b\u0005\u0002;>\u0003\u0002\u0002",
    "\u0002<>\u0003\u0002\u0002\u0002=9\u0003\u0002\u0002\u0002=<\u0003\u0002",
    "\u0002\u0002>\t\u0003\u0002\u0002\u0002?@\u0005(\u0015\u0002@A\u0007",
    "\u0003\u0002\u0002AK\u0003\u0002\u0002\u0002BK\u0005\u0010\t\u0002C",
    "K\u0005\u000e\b\u0002DE\u0005&\u0014\u0002EF\u0007\u0003\u0002\u0002",
    "FK\u0003\u0002\u0002\u0002GH\u0005\f\u0007\u0002HI\u0007\u0003\u0002",
    "\u0002IK\u0003\u0002\u0002\u0002J?\u0003\u0002\u0002\u0002JB\u0003\u0002",
    "\u0002\u0002JC\u0003\u0002\u0002\u0002JD\u0003\u0002\u0002\u0002JG\u0003",
    "\u0002\u0002\u0002K\u000b\u0003\u0002\u0002\u0002LM\u0007\u001f\u0002",
    "\u0002MN\u0007\u0019\u0002\u0002NO\u0005\u0014\u000b\u0002O\r\u0003",
    "\u0002\u0002\u0002PQ\u0007\u0005\u0002\u0002QR\u0007\u0006\u0002\u0002",
    "RS\u0005\u0014\u000b\u0002ST\u0007\u0007\u0002\u0002TU\u0005\u0012\n",
    "\u0002U\u000f\u0003\u0002\u0002\u0002VW\u0007\b\u0002\u0002WX\u0007",
    "\u0006\u0002\u0002XY\u0005\u0014\u000b\u0002YZ\u0007\u0007\u0002\u0002",
    "Z[\u0005\u0012\n\u0002[e\u0003\u0002\u0002\u0002\\]\u0007\b\u0002\u0002",
    "]^\u0007\u0006\u0002\u0002^_\u0005\u0014\u000b\u0002_`\u0007\u0007\u0002",
    "\u0002`a\u0005\u0012\n\u0002ab\u0007\t\u0002\u0002bc\u0005\u0012\n\u0002",
    "ce\u0003\u0002\u0002\u0002dV\u0003\u0002\u0002\u0002d\\\u0003\u0002",
    "\u0002\u0002e\u0011\u0003\u0002\u0002\u0002fg\u0007\u0012\u0002\u0002",
    "gh\u0005\b\u0005\u0002hi\u0007\u0013\u0002\u0002i\u0013\u0003\u0002",
    "\u0002\u0002jk\u0005\u0016\f\u0002k\u0015\u0003\u0002\u0002\u0002lm",
    "\b\f\u0001\u0002mn\u0005\u0018\r\u0002nt\u0003\u0002\u0002\u0002op\f",
    "\u0004\u0002\u0002pq\u0007\u0015\u0002\u0002qs\u0005\u0018\r\u0002r",
    "o\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002u\u0017\u0003\u0002\u0002\u0002vt\u0003",
    "\u0002\u0002\u0002wx\b\r\u0001\u0002xy\u0005\u001a\u000e\u0002y\u007f",
    "\u0003\u0002\u0002\u0002z{\f\u0004\u0002\u0002{|\u0007\u0016\u0002\u0002",
    "|~\u0005\u001a\u000e\u0002}z\u0003\u0002\u0002\u0002~\u0081\u0003\u0002",
    "\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002",
    "\u0002\u0002\u0080\u0019\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007\u0017\u0002\u0002\u0083\u0086\u0005\u001a",
    "\u000e\u0002\u0084\u0086\u0005\u001c\u000f\u0002\u0085\u0082\u0003\u0002",
    "\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u001b\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0005\u001e\u0010\u0002\u0088\u0089\u0007\u0018",
    "\u0002\u0002\u0089\u008a\u0005\u001e\u0010\u0002\u008a\u008d\u0003\u0002",
    "\u0002\u0002\u008b\u008d\u0005\u001e\u0010\u0002\u008c\u0087\u0003\u0002",
    "\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u001d\u0003\u0002",
    "\u0002\u0002\u008e\u008f\b\u0010\u0001\u0002\u008f\u0090\u0005 \u0011",
    "\u0002\u0090\u0099\u0003\u0002\u0002\u0002\u0091\u0092\f\u0005\u0002",
    "\u0002\u0092\u0093\u0007\u001a\u0002\u0002\u0093\u0098\u0005 \u0011",
    "\u0002\u0094\u0095\f\u0004\u0002\u0002\u0095\u0096\u0007\u001c\u0002",
    "\u0002\u0096\u0098\u0005 \u0011\u0002\u0097\u0091\u0003\u0002\u0002",
    "\u0002\u0097\u0094\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u001f\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002",
    "\u0002\u009c\u009d\b\u0011\u0001\u0002\u009d\u009e\u0005\"\u0012\u0002",
    "\u009e\u00a4\u0003\u0002\u0002\u0002\u009f\u00a0\f\u0004\u0002\u0002",
    "\u00a0\u00a1\u0007\u001b\u0002\u0002\u00a1\u00a3\u0005\"\u0012\u0002",
    "\u00a2\u009f\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002",
    "\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002",
    "\u00a5!\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0007\u001c\u0002\u0002\u00a8\u00ab\u0005\"\u0012\u0002",
    "\u00a9\u00ab\u0005$\u0013\u0002\u00aa\u00a7\u0003\u0002\u0002\u0002",
    "\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab#\u0003\u0002\u0002\u0002",
    "\u00ac\u00b5\u0007\u0014\u0002\u0002\u00ad\u00ae\u0007\u0006\u0002\u0002",
    "\u00ae\u00af\u0005\u0014\u000b\u0002\u00af\u00b0\u0007\u0007\u0002\u0002",
    "\u00b0\u00b5\u0003\u0002\u0002\u0002\u00b1\u00b5\u0007\u001e\u0002\u0002",
    "\u00b2\u00b5\u0007\u001f\u0002\u0002\u00b3\u00b5\u0005(\u0015\u0002",
    "\u00b4\u00ac\u0003\u0002\u0002\u0002\u00b4\u00ad\u0003\u0002\u0002\u0002",
    "\u00b4\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002",
    "\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5%\u0003\u0002\u0002\u0002",
    "\u00b6\u00b7\u0007\n\u0002\u0002\u00b7\u00b8\u0005\u0014\u000b\u0002",
    "\u00b8\'\u0003\u0002\u0002\u0002\u00b9\u00ba\u0005*\u0016\u0002\u00ba",
    ")\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007\u000b\u0002\u0002\u00bc",
    "\u00bd\u0007\u0006\u0002\u0002\u00bd\u00be\u0005\u0014\u000b\u0002\u00be",
    "\u00bf\u0007\u0007\u0002\u0002\u00bf\u00da\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0007\f\u0002\u0002\u00c1\u00c2\u0007\u0006\u0002\u0002\u00c2",
    "\u00da\u0007\u0007\u0002\u0002\u00c3\u00c4\u0007\r\u0002\u0002\u00c4",
    "\u00c5\u0007\u0006\u0002\u0002\u00c5\u00c6\u0005\u0014\u000b\u0002\u00c6",
    "\u00c7\u0007\u0007\u0002\u0002\u00c7\u00da\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0007\u000f\u0002\u0002\u00c9\u00ca\u0007\u0006\u0002\u0002\u00ca",
    "\u00cb\u0005\u0014\u000b\u0002\u00cb\u00cc\u0007\u0007\u0002\u0002\u00cc",
    "\u00da\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007\u0010\u0002\u0002\u00ce",
    "\u00cf\u0007\u0006\u0002\u0002\u00cf\u00d0\u0005\u0014\u000b\u0002\u00d0",
    "\u00d1\u0007\u0011\u0002\u0002\u00d1\u00d2\u0005\u0014\u000b\u0002\u00d2",
    "\u00d3\u0007\u0007\u0002\u0002\u00d3\u00da\u0003\u0002\u0002\u0002\u00d4",
    "\u00d5\u0007\u000e\u0002\u0002\u00d5\u00d6\u0007\u0006\u0002\u0002\u00d6",
    "\u00d7\u0005\u0014\u000b\u0002\u00d7\u00d8\u0007\u0007\u0002\u0002\u00d8",
    "\u00da\u0003\u0002\u0002\u0002\u00d9\u00bb\u0003\u0002\u0002\u0002\u00d9",
    "\u00c0\u0003\u0002\u0002\u0002\u00d9\u00c3\u0003\u0002\u0002\u0002\u00d9",
    "\u00c8\u0003\u0002\u0002\u0002\u00d9\u00cd\u0003\u0002\u0002\u0002\u00d9",
    "\u00d4\u0003\u0002\u0002\u0002\u00da+\u0003\u0002\u0002\u0002\u0010",
    "4=Jdt\u007f\u0085\u008c\u0097\u0099\u00a4\u00aa\u00b4\u00d9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", null, "'while'", "'('", "')'", "'if'", 
                     "'else'", "'return'", "'print'", "'input'", "'open'", 
                     "'close'", "'read'", "'write'", "','", "'{'", "'}'", 
                     null, "'or'", "'and'", "'not'", null, "'='", "'+'", 
                     null, "'-'" ];

var symbolicNames = [ null, "SEMI", "COMMENT", "WHILE", "LP", "RP", "IF", 
                      "ELSE", "RETURN", "PRINT", "INPUT", "OPEN", "CLOSE", 
                      "READ", "WRITE", "CMA", "LBR", "RBR", "NUM", "OR", 
                      "AND", "NOT", "RELOP", "EQ", "PLUS", "MULOP", "MINUS", 
                      "TYPE", "STRING_CONSTANT", "ID", "WHITESPACE" ];

var ruleNames =  [ "program", "var_decl_list", "var_decl", "stmts", "stmt", 
                   "assign", "loop", "cond", "braceblock", "expr", "orexp", 
                   "andexp", "notexp", "rel", "sum", "term", "neg", "factor", 
                   "return_stmt", "func_call", "builtin_func_call" ];

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
grammarKSParser.COMMENT = 2;
grammarKSParser.WHILE = 3;
grammarKSParser.LP = 4;
grammarKSParser.RP = 5;
grammarKSParser.IF = 6;
grammarKSParser.ELSE = 7;
grammarKSParser.RETURN = 8;
grammarKSParser.PRINT = 9;
grammarKSParser.INPUT = 10;
grammarKSParser.OPEN = 11;
grammarKSParser.CLOSE = 12;
grammarKSParser.READ = 13;
grammarKSParser.WRITE = 14;
grammarKSParser.CMA = 15;
grammarKSParser.LBR = 16;
grammarKSParser.RBR = 17;
grammarKSParser.NUM = 18;
grammarKSParser.OR = 19;
grammarKSParser.AND = 20;
grammarKSParser.NOT = 21;
grammarKSParser.RELOP = 22;
grammarKSParser.EQ = 23;
grammarKSParser.PLUS = 24;
grammarKSParser.MULOP = 25;
grammarKSParser.MINUS = 26;
grammarKSParser.TYPE = 27;
grammarKSParser.STRING_CONSTANT = 28;
grammarKSParser.ID = 29;
grammarKSParser.WHITESPACE = 30;

grammarKSParser.RULE_program = 0;
grammarKSParser.RULE_var_decl_list = 1;
grammarKSParser.RULE_var_decl = 2;
grammarKSParser.RULE_stmts = 3;
grammarKSParser.RULE_stmt = 4;
grammarKSParser.RULE_assign = 5;
grammarKSParser.RULE_loop = 6;
grammarKSParser.RULE_cond = 7;
grammarKSParser.RULE_braceblock = 8;
grammarKSParser.RULE_expr = 9;
grammarKSParser.RULE_orexp = 10;
grammarKSParser.RULE_andexp = 11;
grammarKSParser.RULE_notexp = 12;
grammarKSParser.RULE_rel = 13;
grammarKSParser.RULE_sum = 14;
grammarKSParser.RULE_term = 15;
grammarKSParser.RULE_neg = 16;
grammarKSParser.RULE_factor = 17;
grammarKSParser.RULE_return_stmt = 18;
grammarKSParser.RULE_func_call = 19;
grammarKSParser.RULE_builtin_func_call = 20;


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

ProgramContext.prototype.var_decl_list = function() {
    return this.getTypedRuleContext(Var_decl_listContext,0);
};

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
        this.state = 42;
        this.var_decl_list();
        this.state = 43;
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


function Var_decl_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_var_decl_list;
    return this;
}

Var_decl_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_decl_listContext.prototype.constructor = Var_decl_listContext;

Var_decl_listContext.prototype.var_decl = function() {
    return this.getTypedRuleContext(Var_declContext,0);
};

Var_decl_listContext.prototype.SEMI = function() {
    return this.getToken(grammarKSParser.SEMI, 0);
};

Var_decl_listContext.prototype.var_decl_list = function() {
    return this.getTypedRuleContext(Var_decl_listContext,0);
};

Var_decl_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterVar_decl_list(this);
	}
};

Var_decl_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitVar_decl_list(this);
	}
};




grammarKSParser.Var_decl_listContext = Var_decl_listContext;

grammarKSParser.prototype.var_decl_list = function() {

    var localctx = new Var_decl_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, grammarKSParser.RULE_var_decl_list);
    try {
        this.state = 50;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 45;
            this.var_decl();
            this.state = 46;
            this.match(grammarKSParser.SEMI);
            this.state = 47;
            this.var_decl_list();
            break;
        case grammarKSParser.LBR:
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


function Var_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_var_decl;
    return this;
}

Var_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_declContext.prototype.constructor = Var_declContext;

Var_declContext.prototype.TYPE = function() {
    return this.getToken(grammarKSParser.TYPE, 0);
};

Var_declContext.prototype.ID = function() {
    return this.getToken(grammarKSParser.ID, 0);
};

Var_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterVar_decl(this);
	}
};

Var_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitVar_decl(this);
	}
};




grammarKSParser.Var_declContext = Var_declContext;

grammarKSParser.prototype.var_decl = function() {

    var localctx = new Var_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, grammarKSParser.RULE_var_decl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(grammarKSParser.TYPE);
        this.state = 53;
        this.match(grammarKSParser.ID);
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
    this.enterRule(localctx, 6, grammarKSParser.RULE_stmts);
    try {
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.WHILE:
        case grammarKSParser.IF:
        case grammarKSParser.RETURN:
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.CLOSE:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.stmt();
            this.state = 56;
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

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
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
    this.enterRule(localctx, 8, grammarKSParser.RULE_stmt);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.CLOSE:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.func_call();
            this.state = 62;
            this.match(grammarKSParser.SEMI);
            break;
        case grammarKSParser.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.cond();
            break;
        case grammarKSParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
            this.loop();
            break;
        case grammarKSParser.RETURN:
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.return_stmt();
            this.state = 67;
            this.match(grammarKSParser.SEMI);
            break;
        case grammarKSParser.ID:
            this.enterOuterAlt(localctx, 5);
            this.state = 69;
            this.assign();
            this.state = 70;
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


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarKSParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(grammarKSParser.ID, 0);
};

AssignContext.prototype.EQ = function() {
    return this.getToken(grammarKSParser.EQ, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarKSListener ) {
        listener.exitAssign(this);
	}
};




grammarKSParser.AssignContext = AssignContext;

grammarKSParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, grammarKSParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(grammarKSParser.ID);
        this.state = 75;
        this.match(grammarKSParser.EQ);
        this.state = 76;
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
    this.enterRule(localctx, 12, grammarKSParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(grammarKSParser.WHILE);
        this.state = 79;
        this.match(grammarKSParser.LP);
        this.state = 80;
        this.expr();
        this.state = 81;
        this.match(grammarKSParser.RP);
        this.state = 82;
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
    this.enterRule(localctx, 14, grammarKSParser.RULE_cond);
    try {
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.match(grammarKSParser.IF);
            this.state = 85;
            this.match(grammarKSParser.LP);
            this.state = 86;
            this.expr();
            this.state = 87;
            this.match(grammarKSParser.RP);
            this.state = 88;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this.match(grammarKSParser.IF);
            this.state = 91;
            this.match(grammarKSParser.LP);
            this.state = 92;
            this.expr();
            this.state = 93;
            this.match(grammarKSParser.RP);
            this.state = 94;
            this.braceblock();
            this.state = 95;
            this.match(grammarKSParser.ELSE);
            this.state = 96;
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
    this.enterRule(localctx, 16, grammarKSParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(grammarKSParser.LBR);
        this.state = 101;
        this.stmts();
        this.state = 102;
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
    this.enterRule(localctx, 18, grammarKSParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
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
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, grammarKSParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_orexp);
                this.state = 109;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 110;
                this.match(grammarKSParser.OR);
                this.state = 111;
                this.andexp(0); 
            }
            this.state = 116;
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
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, grammarKSParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_andexp);
                this.state = 120;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 121;
                this.match(grammarKSParser.AND);
                this.state = 122;
                this.notexp(); 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
    this.enterRule(localctx, 24, grammarKSParser.RULE_notexp);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.match(grammarKSParser.NOT);
            this.state = 129;
            this.notexp();
            break;
        case grammarKSParser.LP:
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.CLOSE:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.NUM:
        case grammarKSParser.MINUS:
        case grammarKSParser.STRING_CONSTANT:
        case grammarKSParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
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
    this.enterRule(localctx, 26, grammarKSParser.RULE_rel);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.sum(0);
            this.state = 134;
            this.match(grammarKSParser.RELOP);
            this.state = 135;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
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
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, grammarKSParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 151;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 149;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_sum);
                    this.state = 143;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 144;
                    this.match(grammarKSParser.PLUS);
                    this.state = 145;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_sum);
                    this.state = 146;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 147;
                    this.match(grammarKSParser.MINUS);
                    this.state = 148;
                    this.term(0);
                    break;

                } 
            }
            this.state = 153;
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
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, grammarKSParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 162;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, grammarKSParser.RULE_term);
                this.state = 157;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 158;
                this.match(grammarKSParser.MULOP);
                this.state = 159;
                this.neg(); 
            }
            this.state = 164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
    this.enterRule(localctx, 32, grammarKSParser.RULE_neg);
    try {
        this.state = 168;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 165;
            this.match(grammarKSParser.MINUS);
            this.state = 166;
            this.neg();
            break;
        case grammarKSParser.LP:
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.CLOSE:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
        case grammarKSParser.NUM:
        case grammarKSParser.STRING_CONSTANT:
        case grammarKSParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
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

FactorContext.prototype.STRING_CONSTANT = function() {
    return this.getToken(grammarKSParser.STRING_CONSTANT, 0);
};

FactorContext.prototype.ID = function() {
    return this.getToken(grammarKSParser.ID, 0);
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
    this.enterRule(localctx, 34, grammarKSParser.RULE_factor);
    try {
        this.state = 178;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.match(grammarKSParser.NUM);
            break;
        case grammarKSParser.LP:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.match(grammarKSParser.LP);
            this.state = 172;
            this.expr();
            this.state = 173;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.STRING_CONSTANT:
            this.enterOuterAlt(localctx, 3);
            this.state = 175;
            this.match(grammarKSParser.STRING_CONSTANT);
            break;
        case grammarKSParser.ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 176;
            this.match(grammarKSParser.ID);
            break;
        case grammarKSParser.PRINT:
        case grammarKSParser.INPUT:
        case grammarKSParser.OPEN:
        case grammarKSParser.CLOSE:
        case grammarKSParser.READ:
        case grammarKSParser.WRITE:
            this.enterOuterAlt(localctx, 5);
            this.state = 177;
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
    this.enterRule(localctx, 36, grammarKSParser.RULE_return_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(grammarKSParser.RETURN);
        this.state = 181;
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
    this.enterRule(localctx, 38, grammarKSParser.RULE_func_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
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
    this.enterRule(localctx, 40, grammarKSParser.RULE_builtin_func_call);
    try {
        this.state = 215;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarKSParser.PRINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.match(grammarKSParser.PRINT);
            this.state = 186;
            this.match(grammarKSParser.LP);
            this.state = 187;
            this.expr();
            this.state = 188;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.INPUT:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(grammarKSParser.INPUT);
            this.state = 191;
            this.match(grammarKSParser.LP);
            this.state = 192;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.OPEN:
            this.enterOuterAlt(localctx, 3);
            this.state = 193;
            this.match(grammarKSParser.OPEN);
            this.state = 194;
            this.match(grammarKSParser.LP);
            this.state = 195;
            this.expr();
            this.state = 196;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.READ:
            this.enterOuterAlt(localctx, 4);
            this.state = 198;
            this.match(grammarKSParser.READ);
            this.state = 199;
            this.match(grammarKSParser.LP);
            this.state = 200;
            this.expr();
            this.state = 201;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.WRITE:
            this.enterOuterAlt(localctx, 5);
            this.state = 203;
            this.match(grammarKSParser.WRITE);
            this.state = 204;
            this.match(grammarKSParser.LP);
            this.state = 205;
            this.expr();
            this.state = 206;
            this.match(grammarKSParser.CMA);
            this.state = 207;
            this.expr();
            this.state = 208;
            this.match(grammarKSParser.RP);
            break;
        case grammarKSParser.CLOSE:
            this.enterOuterAlt(localctx, 6);
            this.state = 210;
            this.match(grammarKSParser.CLOSE);
            this.state = 211;
            this.match(grammarKSParser.LP);
            this.state = 212;
            this.expr();
            this.state = 213;
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
	case 10:
			return this.orexp_sempred(localctx, predIndex);
	case 11:
			return this.andexp_sempred(localctx, predIndex);
	case 14:
			return this.sum_sempred(localctx, predIndex);
	case 15:
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
