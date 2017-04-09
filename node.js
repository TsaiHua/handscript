function displayInfo(args) {
	let output = ''
	if (typeof args.name === 'string') {
		output += 'Name:' + args.name + '\n'
	}
	if (typeof args.age === 'number') {
		output += 'Age:' + args.age + '\n'
	}
	console.log(output)
}
displayInfo({name:'toto',age:24})
displayInfo({age:'re'})
// for (propName in global) {
// 	console.log(propName)
// }


// 路在前端

// let s = false
// s = -s;
// console.log(s)
// console.log(s === +0)
// console.log(-0 === +0)


// let obj = {name:'tot',age:12,valueOf:function(){
// 	return 666;
// }}
// obj++
// console.log(obj.valueOf())
// console.log(obj)

// let str = '123'
// str++
// console.log(str)
// console.log(typeof str)


// let num = 29
// let num2 = (num--) + 2
// console.log(num)
// console.log(num4)


// const http = require('http')
// const hostname = '127.0.0.1'
// const port = '3030'
// const server = http.createServer((req,res)=>{
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end(`Hello ${hostname},totsai`)
// })
// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`)
// })
