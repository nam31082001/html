import { NavLink } from "react-router-dom"

const Nav =()=> {
    return (
        <div className="topnav">
           <NavLink to="/" activeClassName="selected">About</NavLink>
           <NavLink to="/users" activeClassName="selected">About</NavLink>
            
        </div>
    )
}
export default Nav