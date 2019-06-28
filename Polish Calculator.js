/*
 * Node.js / JavaScript Reverse Polish Notation (RPN) Calculator
 *
 * Accepts an single argument in RPN, evaluates it and prints the answer to stdout.
 * 
 */
//	for each token in the postfix expression:
//		if token is an operator:
//			operand_2 ← pop from the stack
//			operand_1 ← pop from the stack
//			result ← evaluate token with operand_1 and operand_2
//			push result back onto the stack
//		else if token is an operand:
//			push token onto the stack
//	result ← pop from the stack

var k;
var stack = [];
stack.push(0);
var stackCounter = 0;
var operatorResult;
var ARGV = process.argv[2].split(" ");
ARGV.pop();

for(k = 0; k < ARGV.length; k++){
	//console.dir(stackCounter);
	if(ARGV[k] == "+"){
		//console.log(stackCounter);
		operatorResult = Number(stack[stackCounter - 1]) + Number(stack[stackCounter]);
		stackCounter--;
		stack[stackCounter] = operatorResult;
		stack.pop();
	}else if(ARGV[k] == "-"){
		//console.log(stackCounter);
		operatorResult = Number(stack[stackCounter - 1]) - Number(stack[stackCounter]);
		stackCounter--;
		stack[stackCounter] = operatorResult;
		stack.pop();
	}else if(ARGV[k] == "/"){
		operatorResult = Number(stack[stackCounter - 1]) / Number(stack[stackCounter]);
		stackCounter--;
		stack[stackCounter] = operatorResult;
		stack.pop();
	}else if(ARGV[k] == "*"){
		operatorResult = Number(stack[stackCounter - 1]) * Number(stack[stackCounter]);
		stackCounter--;
		stack[stackCounter] = operatorResult;
		stack.pop();
	}else if(ARGV[k] == "^"){
		operatorResult = Math.pow(Number(stack[stackCounter - 1]), Number(stack[stackCounter]));
		stackCounter--;
		stack[stackCounter] = operatorResult;
		stack.pop();
	}else{
		//console.log(ARGV[k]);
		stack.push(ARGV[k]);
		stackCounter++;
	}
}
console.dir(stack[1]);
//console.dir(stack);