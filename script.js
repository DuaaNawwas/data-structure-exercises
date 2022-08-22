// -----------------------exercise 1 --------------------------------
// stack :
// create a function that takes a string as a parameter and return true if the string has
// Balanced Brackets and false if it hasn't (using stack)
// ex :
// "ab(cd{ef}gh)" => true
// "ab(cd{ef)" => false

// function checkBracketBalance(string) {
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
// 			testArr.push(string[i]);
// 		} else if (
// 			(testArr[testArr.length - 1] == "(" && string[i] == ")") ||
// 			(testArr[testArr.length - 1] == "{" && string[i] == "}") ||
// 			(testArr[testArr.length - 1] == "[" && string[i] == "]")
// 		) {
// 			testArr.pop();
// 		}
// 	}
// 	console.log(testArr);
// 	if (testArr.length != 0) return false;

// 	return true;
// }
let testArr = [];

// i have the same problem with this code
function checkBracketBalance(string) {
	for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case "(":
			case "{":
			case "[":
				testArr.push(string[i]);
				break;
			case ")":
				let out = testArr.pop();
				if (out !== "(") return false;
				break;
			case "}":
				let out2 = testArr.pop();
				if (out2 !== "{") return false;
				break;
			case "]":
				let out3 = testArr.pop();

				if (out3 !== "[") return false;
				break;
		}
	}
	// console.log(testArr);
	if (testArr.length === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(checkBracketBalance("ab(cd{ef}gh)"));
console.log(checkBracketBalance("ab(cd{ef)"));
console.log(checkBracketBalance("({)")); // false
console.log(checkBracketBalance("({})")); // does not work for some reason!!! returns false

// queue:
// write a function that takes an integer K and a queue of integers you have to reverse the order
// of the first K elements of the queue, leaving the other elements in the same relative order.
// ex:
// k=3
// 1 2 3 4 5 ====> 3 2 1 4 5
console.log("----------");
let numArr = [];
function reverseFunction(k, arr) {
	for (let i = 0; i < k; i++) {
		numArr.push(arr.shift());
	}
	console.log(arr);
	console.log(numArr);
	for (let i = 0; i < k; i++) {
		arr.unshift(numArr.shift());
	}
	return arr;
}
console.log(reverseFunction(3, [1, 2, 3, 4, 5, 6]));

// LinkedList:
// create a function that takes a linkedlist of letters as a parameter and check if it is palindrome or not
// "A palindrome is a word or phrase that reads the same backward as forward"
// ex:
// m => o => o => m  ..... true
// m => o => o => n  ..... false

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	insert(value) {
		this.length++;
		let node = new Node(value);

		if (this.tail) {
			this.tail.next = node;
			this.tail = node;
			return node;
		}

		this.head = this.tail = node;
		return node;
	}

	insertHead(value) {
		this.length++;
		let node = new Node(value);

		if (this.head) {
			node.next = this.head;
			this.head = node;
			return node;
		}

		this.head = this.tail = node;
		return node;
	}
}

// function to add linked list words
function newLinkedListWord(word) {
	let listWord = new LinkedList();
	listWord.insertHead(word[0]);
	for (let x = 1; x < word.length; x++) {
		listWord.insert(word[x]);
	}
	return listWord;
}
// manually adding words
let wordOne = new LinkedList();
wordOne.insertHead("m");
wordOne.insert("o");
wordOne.insert("o");
wordOne.insert("n");
let wordTwo = new LinkedList();
wordTwo.insertHead("m");
wordTwo.insert("o");
wordTwo.insert("o");
wordTwo.insert("m");

function palindrome(llist) {
	let head = llist.head;
	let letterList = [];
	while (head) {
		letterList.push(head.value);
		head = head.next;
	}

	let left = 0;
	let right = letterList.length - 1;
	while (left <= right) {
		if (letterList[left] !== letterList[right]) {
			return false;
		}
		left++, right--;
	}

	return true;
}

console.log("-----------------");
console.log(palindrome(wordOne));
console.log(palindrome(wordTwo));
console.log(palindrome(newLinkedListWord("happy")));
console.log(palindrome(newLinkedListWord("mum")));

// recursion:
// 1- create a function that takes a number and return an array of Fibonacci numbers of this number
// Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// ex:
// 8
// [0,1,1,2,3,5,8,13,21]
let result = [];

function fibonacci(number) {
	if (number == 1) {
		return [0, 1];
	} else {
		result = fibonacci(number - 1);
		result.push(result[result.length - 1] + result[result.length - 2]);
		return result;
	}
}
console.log(fibonacci(8));
// 2-create a function that takes a number and return the factorial of this number
// ex:
// 5
// 120

function factorial(x) {
	if (x === 0) {
		return 1;
	} else {
		return x * factorial(x - 1);
	}
}

console.log(factorial(5));
