import request from "../utils/request";

export default function getCinemaListServer() {
    //返回promise
    return request('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
        {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
}