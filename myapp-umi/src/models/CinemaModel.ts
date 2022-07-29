export default {
    namespace:'cinema',
    state: {
        list:[]
    },
    //同步
    reducers: {
        changeList(prevState:any,action:any) {
            return {...prevState, list:action.payload}
        },
        clearList(prevState:any,action:any) {
            return {...prevState, list:[]}
        }
    },
    //异步
    effects: {
        *getList(action:any, obj:any):any {
            let {call,put} = obj
            var res = yield call(getCinemaList, action.payload.cityId)
            yield put({
                type:'changeList',
                payload: res
            })
        }
    }
}
function getCinemaList(cityId:string) {
    return fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=7445935`,
    {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res=>res.json())
    .then(res=>{
        return res.data.cinemas
    })
}