import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function withRouter(Component) {
    return function(props) {//组件
        const push = useNavigate()
        const match = useParams
        const location = useLocation()
        return <Component {...props} history={{push,match,location}}></Component>
    }
}