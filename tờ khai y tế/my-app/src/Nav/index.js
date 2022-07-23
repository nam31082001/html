import '../Nav/nav.css'
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" to="home">Khai di chuyển nội đia</NavLink>
            <NavLink activeClassName="active" to="news">Khai Báo Toàn Đân</NavLink>
        </div>
    )
}
export default Nav