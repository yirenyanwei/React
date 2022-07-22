//saga任务
import {take,fork,call,put,takeEvery} from 'redux-saga/effects'
function *watchSaga1() {
    /**  第一种写法
    while(true) {
        //take 监听组件发来的action
        yield take('getList1')
        //fork 同步执行异步处理函数
        yield fork(getList)
    }
    */
   //第二种写法
   yield takeEvery('getList1', getList)
}
function *getList() {
    //异步处理
    //call发异步请求
    let res = yield call(getListAction)
    //put函数发新的action
    yield put({
        type:'changeList1',
        payload:res
    })
}
function getListAction() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['111','222','333'])
        },1000)
    })
}

export default watchSaga1
export {getList as getList1}