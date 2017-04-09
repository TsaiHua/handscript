function sum(num1,num2){
	return num1 + num2;
}
 let anotherSum = sum
 console.log(anotherSum(1,2))

sum = null
console.log(anotherSum(3,1))
console.log(anotherSum instanceof Function)
console.log(sum instanceof Object)