import {combineReducers, createStore, applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer,
})
//redux-persist持久化
const persistConfig = {
    key: 'yanwei',
    storage,
    whitelist: ['CityReducer'] // only navigation will be persisted
  }
   
  const persistedReducer = persistReducer(persistConfig, reducer)
//添加 redux-dev调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))
let persistor = persistStore(store)

export {store, persistor}