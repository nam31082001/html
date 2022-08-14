import { NavLink } from "react-router-dom"
const Nav = () => {
    return (

        <div class="topnav">
            <NavLink to="/" activeClassName="selected">Home</NavLink>
            <NavLink to="/cartProduct" activeClassName="selected">Cart</NavLink>
           
        </div>


    )
}
export default Nav