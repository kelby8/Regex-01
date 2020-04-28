// Generated from grammarKS.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by grammarKSParser.
function grammarKSListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

grammarKSListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
grammarKSListener.prototype.constructor = grammarKSListener;

// Enter a parse tree produced by grammarKSParser#program.
grammarKSListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#program.
grammarKSListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#stmts.
grammarKSListener.prototype.enterStmts = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#stmts.
grammarKSListener.prototype.exitStmts = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#stmt.
grammarKSListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#stmt.
grammarKSListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#loop.
grammarKSListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#loop.
grammarKSListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#cond.
grammarKSListener.prototype.enterCond = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#cond.
grammarKSListener.prototype.exitCond = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#braceblock.
grammarKSListener.prototype.enterBraceblock = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#braceblock.
grammarKSListener.prototype.exitBraceblock = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#expr.
grammarKSListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#expr.
grammarKSListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by grammarKSParser#return_stmt.
grammarKSListener.prototype.enterReturn_stmt = function(ctx) {
};

// Exit a parse tree produced by grammarKSParser#return_stmt.
grammarKSListener.prototype.exitReturn_stmt = function(ctx) {
};



exports.grammarKSListener = grammarKSListener;