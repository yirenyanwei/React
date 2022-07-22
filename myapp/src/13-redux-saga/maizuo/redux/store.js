import {combineReducers, createStore, applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import createSagaMiddleware from 'redux-saga'
import watchSaga from './saga'

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer,
})
//添加 redux-dev调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sageMiddleware = createSagaMiddleware()
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk, reduxPromise,sageMiddleware)))
// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))
sageMiddleware.run(watchSaga)
export default store