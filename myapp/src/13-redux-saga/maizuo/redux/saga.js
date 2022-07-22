import {takeEvery,call, put} from 'redux-saga/effects'
import axios from 'axios'
function *watchSaga() {
    yield takeEvery('getCinemaList', getCinemaList)
}
function *getCinemaList() {
    //异步处理
    //call发异步请求
    let res = yield call(getListAction)
    //put函数发新的action
    yield put({
        type:'changeCinemaList',
        payload:res
    })
}

function getListAction() {
    return axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        console.log('cinemaList' ,res.data)
        return res.data.data.cinemas
    })
}

export default watchSaga