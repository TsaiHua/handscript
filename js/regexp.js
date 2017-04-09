let re = null;
let str = `Ctjfkdjfk
		fjdkfca
		tat`
console.log(str)

for (var i = 0; i <10; i++) {
	re = new RegExp('cat', 'gim')
	// re = /cat/g
	console.log(re.test(str))
}