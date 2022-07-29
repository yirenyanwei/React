export default {
    namespace:'city',//命名空间，访问数据用
    state: {
        cityName:'北京',
        cityId:'110100',
    },
    reducers: {
        changeCity(prevState:any,action:any) {
            // console.log(action)
            let payload = action.payload
            let newState = {...prevState, cityName:payload.cityName,cityId:payload.cityId}
            return newState
        }
    }
}