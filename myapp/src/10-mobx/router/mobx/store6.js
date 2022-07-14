import {observable,configure,action,runInAction,makeObservable} from 'mobx'
import axios from 'axios'
configure({
    enforceActions: "always"
})
//es7装饰器 其实是一个方法，传入参数，返回参数

class Store {
    isTabbarShow = true
    list = []
    constructor() {
        makeObservable(this, {
            isTabbarShow:observable,
            list:observable,
            changeShow:action,
            changeHide:action,
            getList:action
        })
    }
    changeShow() {
        this.isTabbarShow = true
    }
    changeHide(){
        this.isTabbarShow = false
    }
    getList() {
        //请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log('cinemaList' ,res.data)
            runInAction(()=>{
                this.list = res.data.data.cinemas
            })
        })
    }
}
const store = new Store()
export default store