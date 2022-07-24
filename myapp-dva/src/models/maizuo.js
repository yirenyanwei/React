import getCinemaListServer from "../services/maizuo"

export default {

    namespace: 'maizuo',
  
    state: {
        isShow:true,
        list:[]
    },
    //同步
    reducers:{
        show(prevState, action) {
            return {...prevState, isShow:true}
        },
        hide(prevState, action){
            return {...prevState, isShow:false}
        },
        changeCinemaList(prevState, action) {
            let cinemas = action.payload
            return {...prevState, list:cinemas}
        }
    },
    //异步 redux-saga
    effects:{
        *getCinemaList(action, {call, put}) {
            //异步请求
            let res = yield call(getCinemaListServer)
            console.log(res.data.data.cinemas)
            //put到同步中
            yield put({
                type:'changeCinemaList',
                payload:res.data.data.cinemas
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            console.log('初始化')
        },
      },
}