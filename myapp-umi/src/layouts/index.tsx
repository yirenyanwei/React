import {NavLink} from 'umi'
import './index.less'
export default function IndexLayout(props:any) {
    if(props.location.pathname == '/city' || props.location.pathname.includes('/detail')) {
        return <div>{props.children}</div>
    }
  return (
    <div>
        {props.children}
        {/* tabbar */}
        <ul>
            <li>
                <NavLink to='/film' activeClassName='active'>film</NavLink>
            </li>
            <li>
                <NavLink to='/cinema' activeClassName='active'>cinema</NavLink>
            </li>
            <li>
                <NavLink to='/center' activeClassName='active'>center</NavLink>
            </li>
        </ul>
    </div>
  )
}