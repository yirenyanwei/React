import {observable,configure,action} from 'mobx'
configure({
    enforceActions: "always"
})

const store = observable({
    isTabbarShow:true,
    list:[],
    cityName:'北京',
    changeShow() {
        this.isTabbarShow = true
    },
    changeHide(){
        this.isTabbarShow = false
    }
}, {
    changeShow: action,
    changeHide: action,//标记方法是action，专门修改可观察的value
    
})
export default store