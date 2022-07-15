class Bus {
    public name = 'yanwei' //公有属性 作用域类内+子类+外部
    private _list:any = [] //私有变量 作用域类内
    protected age = 20 //受保护变量 作用域类内+子类
    subscribe(cb:any) {
        this._list.push(cb)
    }
    dispatch() {
        this._list.forEach((cb:any)=>{
            cb&&cb()
        })
    }
}
class Child extends Bus {
    print() {
        this.age
    }
}
var obj = new Bus()

//-------------类与接口
interface IFunc {
    getName:()=>string
}
//实现接口
class A implements IFunc {
    getName(){
        return 'AAA'
    }
}
class B implements IFunc {
    getName(){
        return 'BBB'
    }
}
function init(obj:IFunc) {
    console.log(obj.getName())
}
var a = new A()
init(a)

export default {}