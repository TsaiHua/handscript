var add = function(a,b){
  if(typeof a!=="number"||b!=="number"){
    throw {name:"typeerror",message:"must add number!"}
  }
  return a+b;
}
function tryIt(){
  try {
    add('tot')
  } catch (err) {
    console.log(err.name + '::' + err.message)
  }
}
tryIt()
// console.log(add(1,null))
// console.log(add(1,2))


// var my = {
//   value:0,
//   increment:function(inc){return this.value += typeof inc ==="number"?inc:1;}
// }

// var one = my.increment()
// console.log(one)
// var two = my.increment()
// console.log(two)
// var again = my.increment(3)
// console.log(again)

// 定义个构造器
// var Person = function(name){
//   this.name = name;
//   this.toString = 22;
// }

// 在原型上扩充
// Person.prototype.showName = function(){
//   return this.name
// }
// new一个实例
// var guy = new Person('jack')
// console.log(guy.showName())

// guy.age = 18
// console.log(guy)
// for(var prop in guy){
//   console.log(prop)
// }


// let add = (a,b)=>a+b;
// var arr = [1.2,3,4,5]
// var sum = add.apply(null,arr)
// console.log(sum) //4.2