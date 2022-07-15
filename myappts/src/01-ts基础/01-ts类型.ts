/**
 * string number boolean
 * | any
 * string[]  Array<string>
 * interface
 */
//基础类型
var name:string = 'yanwei'
name.substring(0,1)
//多类型
var my:string | number = 100
my = 'yanwei'
//任意类型
var myany:any = []

//数组
var list:string[] = ['1']
list.push('100')
var list2:(number|string)[] = ['1',2]
//泛型定义数组
var list3:Array<string> = ['1']
var list4:Array<string|number> = ['1',2]

//对象
interface Iobj{
    name:string,
    age:number,
    location?:string,//可选属性
    [propName:string]:any, //不关心的其他属性propName固定的
}
var obj:Iobj = {
    name:'yanwei',
    age:18,
    //其他属性都会被[propName:string]:any 消化掉
    isScale:false,
    items:[]
}

export default {}