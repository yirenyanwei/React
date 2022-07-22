//saga任务
import {all,takeEvery} from 'redux-saga/effects'
import {getList1} from './saga/saga1'
import {getList2} from './saga/saga2'
function *watchSaga() {
    yield takeEvery('getList1', getList1)
    yield takeEvery('getList2', getList2)
}
export default watchSaga