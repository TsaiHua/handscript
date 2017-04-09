// 这个比较函数适用于大多数数据类型
function compare(val1,val2) {
	if (val1 < val2) {
		return -1;
	} else if (val1 > val2) {
		return 1;
	} else {
		return 0;
	}
}

// 降序排列
// function compare(val1,val2) {
// 	if (val1 < val2) {
// 		return 1;
// 	} else if (val1 > val2) {
// 		return -1;
// 	} else {
// 		return 0;
// 	}
// }

// example
var values = [1,3,2,33,1,4,44,3]
values.sort(compare)
console.log(values) // [ 1, 1, 2, 3, 3, 4, 33, 44 ]