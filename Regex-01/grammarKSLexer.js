// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002!\u00fe\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002F\n\u0002\f\u0002\u000e\u0002I\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006",
    "\fm\n\f\r\f\u000e\fn\u0003\f\u0003\f\u0007\fs\n\f\f\f\u000e\fv\u000b",
    "\f\u0003\f\u0003\f\u0006\fz\n\f\r\f\u000e\f{\u0003\f\u0006\f\u007f\n",
    "\f\r\f\u000e\f\u0080\u0005\f\u0083\n\f\u0003\r\u0006\r\u0086\n\r\r\r",
    "\u000e\r\u0087\u0003\r\u0003\r\u0006\r\u008c\n\r\r\r\u000e\r\u008d\u0005",
    "\r\u0090\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00a6\n\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u00c2\n\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0007\u0018\u00c8\n\u0018\f\u0018\u000e\u0018",
    "\u00cb\u000b\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0007\u001f\u00f3\n\u001f",
    "\f\u001f\u000e\u001f\u00f6\u000b\u001f\u0003 \u0006 \u00f9\n \r \u000e",
    " \u00fa\u0003 \u0003 \u0002\u0002!\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!\u0003\u0002\n\u0003\u0002\f\f\u0003\u00022;\u0004\u0002",
    ">>@@\u0004\u0002,,11\u0003\u0002$$\u0005\u0002C\\aac|\u0006\u00022;",
    "C\\aac|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u0111\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0003A\u0003\u0002\u0002",
    "\u0002\u0005L\u0003\u0002\u0002\u0002\u0007N\u0003\u0002\u0002\u0002",
    "\tT\u0003\u0002\u0002\u0002\u000bV\u0003\u0002\u0002\u0002\rX\u0003",
    "\u0002\u0002\u0002\u000f[\u0003\u0002\u0002\u0002\u0011`\u0003\u0002",
    "\u0002\u0002\u0013g\u0003\u0002\u0002\u0002\u0015i\u0003\u0002\u0002",
    "\u0002\u0017\u0082\u0003\u0002\u0002\u0002\u0019\u008f\u0003\u0002\u0002",
    "\u0002\u001b\u0091\u0003\u0002\u0002\u0002\u001d\u0094\u0003\u0002\u0002",
    "\u0002\u001f\u0098\u0003\u0002\u0002\u0002!\u00a5\u0003\u0002\u0002",
    "\u0002#\u00a7\u0003\u0002\u0002\u0002%\u00a9\u0003\u0002\u0002\u0002",
    "\'\u00ab\u0003\u0002\u0002\u0002)\u00ad\u0003\u0002\u0002\u0002+\u00af",
    "\u0003\u0002\u0002\u0002-\u00c1\u0003\u0002\u0002\u0002/\u00c3\u0003",
    "\u0002\u0002\u00021\u00ce\u0003\u0002\u0002\u00023\u00d4\u0003\u0002",
    "\u0002\u00025\u00da\u0003\u0002\u0002\u00027\u00df\u0003\u0002\u0002",
    "\u00029\u00e4\u0003\u0002\u0002\u0002;\u00ea\u0003\u0002\u0002\u0002",
    "=\u00f0\u0003\u0002\u0002\u0002?\u00f8\u0003\u0002\u0002\u0002AB\u0007",
    "1\u0002\u0002BC\u00071\u0002\u0002CG\u0003\u0002\u0002\u0002DF\n\u0002",
    "\u0002\u0002ED\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003",
    "\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002",
    "IG\u0003\u0002\u0002\u0002JK\b\u0002\u0002\u0002K\u0004\u0003\u0002",
    "\u0002\u0002LM\u0007=\u0002\u0002M\u0006\u0003\u0002\u0002\u0002NO\u0007",
    "y\u0002\u0002OP\u0007j\u0002\u0002PQ\u0007k\u0002\u0002QR\u0007n\u0002",
    "\u0002RS\u0007g\u0002\u0002S\b\u0003\u0002\u0002\u0002TU\u0007*\u0002",
    "\u0002U\n\u0003\u0002\u0002\u0002VW\u0007+\u0002\u0002W\f\u0003\u0002",
    "\u0002\u0002XY\u0007k\u0002\u0002YZ\u0007h\u0002\u0002Z\u000e\u0003",
    "\u0002\u0002\u0002[\\\u0007g\u0002\u0002\\]\u0007n\u0002\u0002]^\u0007",
    "u\u0002\u0002^_\u0007g\u0002\u0002_\u0010\u0003\u0002\u0002\u0002`a",
    "\u0007t\u0002\u0002ab\u0007g\u0002\u0002bc\u0007v\u0002\u0002cd\u0007",
    "w\u0002\u0002de\u0007t\u0002\u0002ef\u0007p\u0002\u0002f\u0012\u0003",
    "\u0002\u0002\u0002gh\u0007}\u0002\u0002h\u0014\u0003\u0002\u0002\u0002",
    "ij\u0007\u007f\u0002\u0002j\u0016\u0003\u0002\u0002\u0002km\u00042;",
    "\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nl\u0003\u0002",
    "\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pt\u0007",
    "0\u0002\u0002qs\u00042;\u0002rq\u0003\u0002\u0002\u0002sv\u0003\u0002",
    "\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\u0083",
    "\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wy\u00070\u0002\u0002",
    "xz\u00042;\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002",
    "{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0083\u0003\u0002",
    "\u0002\u0002}\u007f\u00042;\u0002~}\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0003\u0002\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082l",
    "\u0003\u0002\u0002\u0002\u0082w\u0003\u0002\u0002\u0002\u0082~\u0003",
    "\u0002\u0002\u0002\u0083\u0018\u0003\u0002\u0002\u0002\u0084\u0086\t",
    "\u0003\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0088\u0090\u0003\u0002\u0002\u0002\u0089\u008b\u0007",
    "/\u0002\u0002\u008a\u008c\t\u0003\u0002\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0003\u0002",
    "\u0002\u0002\u008f\u0085\u0003\u0002\u0002\u0002\u008f\u0089\u0003\u0002",
    "\u0002\u0002\u0090\u001a\u0003\u0002\u0002\u0002\u0091\u0092\u0007q",
    "\u0002\u0002\u0092\u0093\u0007t\u0002\u0002\u0093\u001c\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0007c\u0002\u0002\u0095\u0096\u0007p\u0002",
    "\u0002\u0096\u0097\u0007f\u0002\u0002\u0097\u001e\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0007p\u0002\u0002\u0099\u009a\u0007q\u0002\u0002",
    "\u009a\u009b\u0007v\u0002\u0002\u009b \u0003\u0002\u0002\u0002\u009c",
    "\u009d\u0007@\u0002\u0002\u009d\u00a6\u0007?\u0002\u0002\u009e\u009f",
    "\u0007>\u0002\u0002\u009f\u00a6\u0007?\u0002\u0002\u00a0\u00a6\t\u0004",
    "\u0002\u0002\u00a1\u00a2\u0007#\u0002\u0002\u00a2\u00a6\u0007?\u0002",
    "\u0002\u00a3\u00a4\u0007?\u0002\u0002\u00a4\u00a6\u0007?\u0002\u0002",
    "\u00a5\u009c\u0003\u0002\u0002\u0002\u00a5\u009e\u0003\u0002\u0002\u0002",
    "\u00a5\u00a0\u0003\u0002\u0002\u0002\u00a5\u00a1\u0003\u0002\u0002\u0002",
    "\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\"\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0007?\u0002\u0002\u00a8$\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\u0007-\u0002\u0002\u00aa&\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\t\u0005\u0002\u0002\u00ac(\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007",
    "/\u0002\u0002\u00ae*\u0003\u0002\u0002\u0002\u00af\u00b0\u0007.\u0002",
    "\u0002\u00b0,\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007k\u0002\u0002",
    "\u00b2\u00b3\u0007p\u0002\u0002\u00b3\u00c2\u0007v\u0002\u0002\u00b4",
    "\u00b5\u0007u\u0002\u0002\u00b5\u00b6\u0007v\u0002\u0002\u00b6\u00b7",
    "\u0007t\u0002\u0002\u00b7\u00b8\u0007k\u0002\u0002\u00b8\u00b9\u0007",
    "p\u0002\u0002\u00b9\u00c2\u0007i\u0002\u0002\u00ba\u00bb\u0007\"\u0002",
    "\u0002\u00bb\u00bc\u0007f\u0002\u0002\u00bc\u00bd\u0007q\u0002\u0002",
    "\u00bd\u00be\u0007w\u0002\u0002\u00be\u00bf\u0007d\u0002\u0002\u00bf",
    "\u00c0\u0007n\u0002\u0002\u00c0\u00c2\u0007g\u0002\u0002\u00c1\u00b1",
    "\u0003\u0002\u0002\u0002\u00c1\u00b4\u0003\u0002\u0002\u0002\u00c1\u00ba",
    "\u0003\u0002\u0002\u0002\u00c2.\u0003\u0002\u0002\u0002\u00c3\u00c9",
    "\u0007$\u0002\u0002\u00c4\u00c5\u0007^\u0002\u0002\u00c5\u00c8\u0007",
    "$\u0002\u0002\u00c6\u00c8\n\u0006\u0002\u0002\u00c7\u00c4\u0003\u0002",
    "\u0002\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003\u0002",
    "\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002",
    "\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0007$\u0002\u0002\u00cd0\u0003\u0002\u0002",
    "\u0002\u00ce\u00cf\u0007r\u0002\u0002\u00cf\u00d0\u0007t\u0002\u0002",
    "\u00d0\u00d1\u0007k\u0002\u0002\u00d1\u00d2\u0007p\u0002\u0002\u00d2",
    "\u00d3\u0007v\u0002\u0002\u00d32\u0003\u0002\u0002\u0002\u00d4\u00d5",
    "\u0007k\u0002\u0002\u00d5\u00d6\u0007p\u0002\u0002\u00d6\u00d7\u0007",
    "r\u0002\u0002\u00d7\u00d8\u0007w\u0002\u0002\u00d8\u00d9\u0007v\u0002",
    "\u0002\u00d94\u0003\u0002\u0002\u0002\u00da\u00db\u0007q\u0002\u0002",
    "\u00db\u00dc\u0007r\u0002\u0002\u00dc\u00dd\u0007g\u0002\u0002\u00dd",
    "\u00de\u0007p\u0002\u0002\u00de6\u0003\u0002\u0002\u0002\u00df\u00e0",
    "\u0007t\u0002\u0002\u00e0\u00e1\u0007g\u0002\u0002\u00e1\u00e2\u0007",
    "c\u0002\u0002\u00e2\u00e3\u0007f\u0002\u0002\u00e38\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0007y\u0002\u0002\u00e5\u00e6\u0007t\u0002\u0002",
    "\u00e6\u00e7\u0007k\u0002\u0002\u00e7\u00e8\u0007v\u0002\u0002\u00e8",
    "\u00e9\u0007g\u0002\u0002\u00e9:\u0003\u0002\u0002\u0002\u00ea\u00eb",
    "\u0007e\u0002\u0002\u00eb\u00ec\u0007n\u0002\u0002\u00ec\u00ed\u0007",
    "q\u0002\u0002\u00ed\u00ee\u0007u\u0002\u0002\u00ee\u00ef\u0007g\u0002",
    "\u0002\u00ef<\u0003\u0002\u0002\u0002\u00f0\u00f4\t\u0007\u0002\u0002",
    "\u00f1\u00f3\t\b\u0002\u0002\u00f2\u00f1\u0003\u0002\u0002\u0002\u00f3",
    "\u00f6\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f4",
    "\u00f5\u0003\u0002\u0002\u0002\u00f5>\u0003\u0002\u0002\u0002\u00f6",
    "\u00f4\u0003\u0002\u0002\u0002\u00f7\u00f9\t\t\u0002\u0002\u00f8\u00f7",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00f8",
    "\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\b \u0002\u0002\u00fd@\u0003\u0002",
    "\u0002\u0002\u0012\u0002Gnt{\u0080\u0082\u0087\u008d\u008f\u00a5\u00c1",
    "\u00c7\u00c9\u00f4\u00fa\u0003\b\u0002\u0002"].join("");


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
grammarKSLexer.COMMENT = 1;
grammarKSLexer.SEMI = 2;
grammarKSLexer.WHILE = 3;
grammarKSLexer.LP = 4;
grammarKSLexer.RP = 5;
grammarKSLexer.IF = 6;
grammarKSLexer.ELSE = 7;
grammarKSLexer.RETURN = 8;
grammarKSLexer.LBR = 9;
grammarKSLexer.RBR = 10;
grammarKSLexer.FPNUM = 11;
grammarKSLexer.NUM = 12;
grammarKSLexer.OR = 13;
grammarKSLexer.AND = 14;
grammarKSLexer.NOT = 15;
grammarKSLexer.RELOP = 16;
grammarKSLexer.EQ = 17;
grammarKSLexer.PLUS = 18;
grammarKSLexer.MULOP = 19;
grammarKSLexer.MINUS = 20;
grammarKSLexer.CMA = 21;
grammarKSLexer.TYPE = 22;
grammarKSLexer.STRING_CONSTANT = 23;
grammarKSLexer.PRINT = 24;
grammarKSLexer.INPUT = 25;
grammarKSLexer.OPEN = 26;
grammarKSLexer.READ = 27;
grammarKSLexer.WRITE = 28;
grammarKSLexer.CLOSE = 29;
grammarKSLexer.ID = 30;
grammarKSLexer.WHITESPACE = 31;

grammarKSLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

grammarKSLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

grammarKSLexer.prototype.literalNames = [ null, null, "';'", "'while'", 
                                          "'('", "')'", "'if'", "'else'", 
                                          "'return'", "'{'", "'}'", null, 
                                          null, "'or'", "'and'", "'not'", 
                                          null, "'='", "'+'", null, "'-'", 
                                          "','", null, null, "'print'", 
                                          "'input'", "'open'", "'read'", 
                                          "'write'", "'close'" ];

grammarKSLexer.prototype.symbolicNames = [ null, "COMMENT", "SEMI", "WHILE", 
                                           "LP", "RP", "IF", "ELSE", "RETURN", 
                                           "LBR", "RBR", "FPNUM", "NUM", 
                                           "OR", "AND", "NOT", "RELOP", 
                                           "EQ", "PLUS", "MULOP", "MINUS", 
                                           "CMA", "TYPE", "STRING_CONSTANT", 
                                           "PRINT", "INPUT", "OPEN", "READ", 
                                           "WRITE", "CLOSE", "ID", "WHITESPACE" ];

grammarKSLexer.prototype.ruleNames = [ "COMMENT", "SEMI", "WHILE", "LP", 
                                       "RP", "IF", "ELSE", "RETURN", "LBR", 
                                       "RBR", "FPNUM", "NUM", "OR", "AND", 
                                       "NOT", "RELOP", "EQ", "PLUS", "MULOP", 
                                       "MINUS", "CMA", "TYPE", "STRING_CONSTANT", 
                                       "PRINT", "INPUT", "OPEN", "READ", 
                                       "WRITE", "CLOSE", "ID", "WHITESPACE" ];

grammarKSLexer.prototype.grammarFileName = "grammarKS.txt";


exports.grammarKSLexer = grammarKSLexer;
