//saga任务
import {take,fork,call,put,takeEvery} from 'redux-saga/effects'
function *watchSaga2() {
    /*
    while(true) {
        //take 监听组件发来的action
        yield take('getList2')
        //fork 同步执行异步处理函数
        yield fork(getList)
    }
    */
    yield takeEvery('getList2', getList)
}
function *getList() {
    //异步处理
    //call发异步请求
    let res = yield call(getListAction)
    let res2 = yield call(getListAction2, res)//阻塞调用call
    //put函数发新的action
    yield put({
        type:'changeList2',
        payload:res2
    })
}
function getListAction() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['111','222','333'])
        },1000)
    })
}
function getListAction2(data) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([...data, '111','222','333'])
        },1000)
    })
}

export default watchSaga2
export {getList as getList2}