import axios from 'axios'
//获取影院列表
function getCinemaListAction() {
    return (dispatch)=>{
        //请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log('cinemaList' ,res.data)
            dispatch({
                type: 'change-cinemas',
                payload: res.data.data.cinemas
            })
        })
    }
}
//promise写法
function getCinemaListActionPromise() {
    //请求数据
   return axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        console.log('cinemaList' ,res.data)
        return {
            type: 'change-cinemas',
            payload: res.data.data.cinemas
        }
    })
}
export default getCinemaListActionPromise