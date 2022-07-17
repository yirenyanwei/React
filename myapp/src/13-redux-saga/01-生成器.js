//es6生成器函数
console.log('生成器')
function *test() {
    console.log('111')
    let res = yield 'return-111';//中断
    console.log('222', res)
    res = yield 'return-222';
    console.log('333', res)
}
var generate = test()
var res = generate.next()
let idx = 0
while(!res.done) {//结束标志
    console.log(res.value)//返回值
    res = generate.next('bbb'+idx)
    idx++
}