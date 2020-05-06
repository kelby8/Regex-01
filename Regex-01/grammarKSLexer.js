// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001b\u00a0\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0006\u0012z",
    "\n\u0012\r\u0012\u000e\u0012{\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0092",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0006\u001a\u009b\n\u001a\r\u001a\u000e\u001a",
    "\u009c\u0003\u001a\u0003\u001a\u0002\u0002\u001b\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b\u0003\u0002",
    "\u0006\u0003\u00022;\u0004\u0002>>@@\u0005\u0002\'\',,11\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002\u00a5\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
    "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002",
    "\u0002\u00023\u0003\u0002\u0002\u0002\u00035\u0003\u0002\u0002\u0002",
    "\u00057\u0003\u0002\u0002\u0002\u0007=\u0003\u0002\u0002\u0002\t?\u0003",
    "\u0002\u0002\u0002\u000bA\u0003\u0002\u0002\u0002\rD\u0003\u0002\u0002",
    "\u0002\u000fI\u0003\u0002\u0002\u0002\u0011P\u0003\u0002\u0002\u0002",
    "\u0013V\u0003\u0002\u0002\u0002\u0015\\\u0003\u0002\u0002\u0002\u0017",
    "a\u0003\u0002\u0002\u0002\u0019f\u0003\u0002\u0002\u0002\u001bl\u0003",
    "\u0002\u0002\u0002\u001dn\u0003\u0002\u0002\u0002\u001ft\u0003\u0002",
    "\u0002\u0002!v\u0003\u0002\u0002\u0002#y\u0003\u0002\u0002\u0002%}\u0003",
    "\u0002\u0002\u0002\'\u0080\u0003\u0002\u0002\u0002)\u0084\u0003\u0002",
    "\u0002\u0002+\u0091\u0003\u0002\u0002\u0002-\u0093\u0003\u0002\u0002",
    "\u0002/\u0095\u0003\u0002\u0002\u00021\u0097\u0003\u0002\u0002\u0002",
    "3\u009a\u0003\u0002\u0002\u000256\u0007=\u0002\u00026\u0004\u0003\u0002",
    "\u0002\u000278\u0007y\u0002\u000289\u0007j\u0002\u00029:\u0007k\u0002",
    "\u0002:;\u0007n\u0002\u0002;<\u0007g\u0002\u0002<\u0006\u0003\u0002",
    "\u0002\u0002=>\u0007*\u0002\u0002>\b\u0003\u0002\u0002\u0002?@\u0007",
    "+\u0002\u0002@\n\u0003\u0002\u0002\u0002AB\u0007k\u0002\u0002BC\u0007",
    "h\u0002\u0002C\f\u0003\u0002\u0002\u0002DE\u0007g\u0002\u0002EF\u0007",
    "n\u0002\u0002FG\u0007u\u0002\u0002GH\u0007g\u0002\u0002H\u000e\u0003",
    "\u0002\u0002\u0002IJ\u0007t\u0002\u0002JK\u0007g\u0002\u0002KL\u0007",
    "v\u0002\u0002LM\u0007w\u0002\u0002MN\u0007t\u0002\u0002NO\u0007p\u0002",
    "\u0002O\u0010\u0003\u0002\u0002\u0002PQ\u0007r\u0002\u0002QR\u0007t",
    "\u0002\u0002RS\u0007k\u0002\u0002ST\u0007p\u0002\u0002TU\u0007v\u0002",
    "\u0002U\u0012\u0003\u0002\u0002\u0002VW\u0007k\u0002\u0002WX\u0007p",
    "\u0002\u0002XY\u0007r\u0002\u0002YZ\u0007w\u0002\u0002Z[\u0007v\u0002",
    "\u0002[\u0014\u0003\u0002\u0002\u0002\\]\u0007q\u0002\u0002]^\u0007",
    "r\u0002\u0002^_\u0007g\u0002\u0002_`\u0007p\u0002\u0002`\u0016\u0003",
    "\u0002\u0002\u0002ab\u0007t\u0002\u0002bc\u0007g\u0002\u0002cd\u0007",
    "c\u0002\u0002de\u0007f\u0002\u0002e\u0018\u0003\u0002\u0002\u0002fg",
    "\u0007y\u0002\u0002gh\u0007t\u0002\u0002hi\u0007k\u0002\u0002ij\u0007",
    "v\u0002\u0002jk\u0007g\u0002\u0002k\u001a\u0003\u0002\u0002\u0002lm",
    "\u0007.\u0002\u0002m\u001c\u0003\u0002\u0002\u0002no\u0007e\u0002\u0002",
    "op\u0007n\u0002\u0002pq\u0007q\u0002\u0002qr\u0007u\u0002\u0002rs\u0007",
    "g\u0002\u0002s\u001e\u0003\u0002\u0002\u0002tu\u0007}\u0002\u0002u ",
    "\u0003\u0002\u0002\u0002vw\u0007\u007f\u0002\u0002w\"\u0003\u0002\u0002",
    "\u0002xz\t\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|$\u0003",
    "\u0002\u0002\u0002}~\u0007q\u0002\u0002~\u007f\u0007t\u0002\u0002\u007f",
    "&\u0003\u0002\u0002\u0002\u0080\u0081\u0007c\u0002\u0002\u0081\u0082",
    "\u0007p\u0002\u0002\u0082\u0083\u0007f\u0002\u0002\u0083(\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0007p\u0002\u0002\u0085\u0086\u0007q\u0002",
    "\u0002\u0086\u0087\u0007v\u0002\u0002\u0087*\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0007@\u0002\u0002\u0089\u0092\u0007?\u0002\u0002\u008a",
    "\u008b\u0007>\u0002\u0002\u008b\u0092\u0007?\u0002\u0002\u008c\u0092",
    "\t\u0003\u0002\u0002\u008d\u008e\u0007#\u0002\u0002\u008e\u0092\u0007",
    "?\u0002\u0002\u008f\u0090\u0007?\u0002\u0002\u0090\u0092\u0007?\u0002",
    "\u0002\u0091\u0088\u0003\u0002\u0002\u0002\u0091\u008a\u0003\u0002\u0002",
    "\u0002\u0091\u008c\u0003\u0002\u0002\u0002\u0091\u008d\u0003\u0002\u0002",
    "\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092,\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007-\u0002\u0002\u0094.\u0003\u0002\u0002\u0002",
    "\u0095\u0096\t\u0004\u0002\u0002\u00960\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0007/\u0002\u0002\u00982\u0003\u0002\u0002\u0002\u0099\u009b",
    "\t\u0005\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f",
    "\b\u001a\u0002\u0002\u009f4\u0003\u0002\u0002\u0002\u0006\u0002{\u0091",
    "\u009c\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function grammarKSLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

grammarKSLexer.prototype = Object.create(antlr4.Lexer.prototype);
grammarKSLexer.prototype.constructor = grammarKSLexer;

Object.defineProperty(grammarKSLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

grammarKSLexer.EOF = antlr4.Token.EOF;
grammarKSLexer.SEMI = 1;
grammarKSLexer.WHILE = 2;
grammarKSLexer.LP = 3;
grammarKSLexer.RP = 4;
grammarKSLexer.IF = 5;
grammarKSLexer.ELSE = 6;
grammarKSLexer.RETURN = 7;
grammarKSLexer.PRINT = 8;
grammarKSLexer.INPUT = 9;
grammarKSLexer.OPEN = 10;
grammarKSLexer.READ = 11;
grammarKSLexer.WRITE = 12;
grammarKSLexer.CMA = 13;
grammarKSLexer.CLOSE = 14;
grammarKSLexer.LBR = 15;
grammarKSLexer.RBR = 16;
grammarKSLexer.NUM = 17;
grammarKSLexer.OR = 18;
grammarKSLexer.AND = 19;
grammarKSLexer.NOT = 20;
grammarKSLexer.RELOP = 21;
grammarKSLexer.PLUS = 22;
grammarKSLexer.MULOP = 23;
grammarKSLexer.MINUS = 24;
grammarKSLexer.WHITESPACE = 25;

grammarKSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

grammarKSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

grammarKSLexer.prototype.literalNames = [ null, "';'", "'while'", "'('", 
                                          "')'", "'if'", "'else'", "'return'", 
                                          "'print'", "'input'", "'open'", 
                                          "'read'", "'write'", "','", "'close'", 
                                          "'{'", "'}'", null, "'or'", "'and'", 
                                          "'not'", null, "'+'", null, "'-'" ];

grammarKSLexer.prototype.symbolicNames = [ null, "SEMI", "WHILE", "LP", 
                                           "RP", "IF", "ELSE", "RETURN", 
                                           "PRINT", "INPUT", "OPEN", "READ", 
                                           "WRITE", "CMA", "CLOSE", "LBR", 
                                           "RBR", "NUM", "OR", "AND", "NOT", 
                                           "RELOP", "PLUS", "MULOP", "MINUS", 
                                           "WHITESPACE" ];

grammarKSLexer.prototype.ruleNames = [ "SEMI", "WHILE", "LP", "RP", "IF", 
                                       "ELSE", "RETURN", "PRINT", "INPUT", 
                                       "OPEN", "READ", "WRITE", "CMA", "CLOSE", 
                                       "LBR", "RBR", "NUM", "OR", "AND", 
                                       "NOT", "RELOP", "PLUS", "MULOP", 
                                       "MINUS", "WHITESPACE" ];

grammarKSLexer.prototype.grammarFileName = "grammarKS.txt";


exports.grammarKSLexer = grammarKSLexer;

