// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014n\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0006\u000bH",
    "\n\u000b\r\u000b\u000e\u000bI\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f`\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0006",
    "\u0013i\n\u0013\r\u0013\u000e\u0013j\u0003\u0013\u0003\u0013\u0002\u0002",
    "\u0014\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\u0003\u0002\u0006\u0003\u0002",
    "2;\u0004\u0002>>@@\u0005\u0002\'\',,11\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002s\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0003\'\u0003\u0002\u0002\u0002\u0005)\u0003\u0002\u0002\u0002",
    "\u0007/\u0003\u0002\u0002\u0002\t1\u0003\u0002\u0002\u0002\u000b3\u0003",
    "\u0002\u0002\u0002\r6\u0003\u0002\u0002\u0002\u000f;\u0003\u0002\u0002",
    "\u0002\u0011B\u0003\u0002\u0002\u0002\u0013D\u0003\u0002\u0002\u0002",
    "\u0015G\u0003\u0002\u0002\u0002\u0017K\u0003\u0002\u0002\u0002\u0019",
    "N\u0003\u0002\u0002\u0002\u001bR\u0003\u0002\u0002\u0002\u001d_\u0003",
    "\u0002\u0002\u0002\u001fa\u0003\u0002\u0002\u0002!c\u0003\u0002\u0002",
    "\u0002#e\u0003\u0002\u0002\u0002%h\u0003\u0002\u0002\u0002\'(\u0007",
    "=\u0002\u0002(\u0004\u0003\u0002\u0002\u0002)*\u0007y\u0002\u0002*+",
    "\u0007j\u0002\u0002+,\u0007k\u0002\u0002,-\u0007n\u0002\u0002-.\u0007",
    "g\u0002\u0002.\u0006\u0003\u0002\u0002\u0002/0\u0007*\u0002\u00020\b",
    "\u0003\u0002\u0002\u000212\u0007+\u0002\u00022\n\u0003\u0002\u0002\u0002",
    "34\u0007k\u0002\u000245\u0007h\u0002\u00025\f\u0003\u0002\u0002\u0002",
    "67\u0007g\u0002\u000278\u0007n\u0002\u000289\u0007u\u0002\u00029:\u0007",
    "g\u0002\u0002:\u000e\u0003\u0002\u0002\u0002;<\u0007t\u0002\u0002<=",
    "\u0007g\u0002\u0002=>\u0007v\u0002\u0002>?\u0007w\u0002\u0002?@\u0007",
    "t\u0002\u0002@A\u0007p\u0002\u0002A\u0010\u0003\u0002\u0002\u0002BC",
    "\u0007}\u0002\u0002C\u0012\u0003\u0002\u0002\u0002DE\u0007\u007f\u0002",
    "\u0002E\u0014\u0003\u0002\u0002\u0002FH\t\u0002\u0002\u0002GF\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002J\u0016\u0003\u0002\u0002\u0002KL\u0007q\u0002",
    "\u0002LM\u0007t\u0002\u0002M\u0018\u0003\u0002\u0002\u0002NO\u0007c",
    "\u0002\u0002OP\u0007p\u0002\u0002PQ\u0007f\u0002\u0002Q\u001a\u0003",
    "\u0002\u0002\u0002RS\u0007p\u0002\u0002ST\u0007q\u0002\u0002TU\u0007",
    "v\u0002\u0002U\u001c\u0003\u0002\u0002\u0002VW\u0007@\u0002\u0002W`",
    "\u0007?\u0002\u0002XY\u0007>\u0002\u0002Y`\u0007?\u0002\u0002Z`\t\u0003",
    "\u0002\u0002[\\\u0007#\u0002\u0002\\`\u0007?\u0002\u0002]^\u0007?\u0002",
    "\u0002^`\u0007?\u0002\u0002_V\u0003\u0002\u0002\u0002_X\u0003\u0002",
    "\u0002\u0002_Z\u0003\u0002\u0002\u0002_[\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002`\u001e\u0003\u0002\u0002\u0002ab\u0007-\u0002\u0002",
    "b \u0003\u0002\u0002\u0002cd\t\u0004\u0002\u0002d\"\u0003\u0002\u0002",
    "\u0002ef\u0007/\u0002\u0002f$\u0003\u0002\u0002\u0002gi\t\u0005\u0002",
    "\u0002hg\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jh\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\b",
    "\u0013\u0002\u0002m&\u0003\u0002\u0002\u0002\u0006\u0002I_j\u0003\b",
    "\u0002\u0002"].join("");


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
grammarKSLexer.LBR = 8;
grammarKSLexer.RBR = 9;
grammarKSLexer.NUM = 10;
grammarKSLexer.OR = 11;
grammarKSLexer.AND = 12;
grammarKSLexer.NOT = 13;
grammarKSLexer.RELOP = 14;
grammarKSLexer.PLUS = 15;
grammarKSLexer.MULOP = 16;
grammarKSLexer.MINUS = 17;
grammarKSLexer.WHITESPACE = 18;

grammarKSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

grammarKSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

grammarKSLexer.prototype.literalNames = [ null, "';'", "'while'", "'('", 
                                          "')'", "'if'", "'else'", "'return'", 
                                          "'{'", "'}'", null, "'or'", "'and'", 
                                          "'not'", null, "'+'", null, "'-'" ];

grammarKSLexer.prototype.symbolicNames = [ null, "SEMI", "WHILE", "LP", 
                                           "RP", "IF", "ELSE", "RETURN", 
                                           "LBR", "RBR", "NUM", "OR", "AND", 
                                           "NOT", "RELOP", "PLUS", "MULOP", 
                                           "MINUS", "WHITESPACE" ];

grammarKSLexer.prototype.ruleNames = [ "SEMI", "WHILE", "LP", "RP", "IF", 
                                       "ELSE", "RETURN", "LBR", "RBR", "NUM", 
                                       "OR", "AND", "NOT", "RELOP", "PLUS", 
                                       "MULOP", "MINUS", "WHITESPACE" ];

grammarKSLexer.prototype.grammarFileName = "grammarKS.txt";


exports.grammarKSLexer = grammarKSLexer;

