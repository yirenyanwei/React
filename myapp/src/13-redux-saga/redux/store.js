import  {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import watchSaga from './saga-every'

const sageMiddleware = createSagaMiddleware()
let store = createStore(reducer, applyMiddleware(sageMiddleware))

sageMiddleware.run(watchSaga)//saga任务
export default store