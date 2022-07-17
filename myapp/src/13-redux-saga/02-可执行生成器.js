//链式自动执行
function getData1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data1')
            resolve('data1')
        }, 1000)
    })
}
function getData2(res) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data2')
            resolve('data2-'+res)
        }, 1000)
    })
}
function getData3(res) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data3')
            resolve('data3-'+res)
        }, 1000)
    })
}

function *gen() {
    let res = yield getData1()
    res = yield getData2(res)
    res = yield getData3(res)
    console.log(res)
}
function run(fn){
    let g = fn()
    function next(data){
        let result = g.next(data)
        if(result.done) {
            return result.value
        }
        //result.value promise
        result.value.then(res=>{
            next(res)
        })
    }
    next()
}
run(gen)