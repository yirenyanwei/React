function test(a:string, b:string, c?:number):string {
    let res = a.substring(0,1)+b.substring(0,1)
    console.log(res)
    return res
}
test('aaa','bbb')

//-----------接口定义函数
interface IFunc{
    (a:string,b:string,c?:number):string
}
var myfunct:IFunc = function(a:string,b:string,c?:number) {
    return ''
}

//---------函数对象结合
interface IObj {
    name:string,
    age:number,
    setName:(name:string)=>string
}
var obj:IObj = {
    name:'yanwei',
    age:20,
    setName(name:string) {
        this.name = name
        return name
    }
}

export default {}