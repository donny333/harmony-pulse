import StyledNavMain from "./StyledNavMain";
import { NavLink } from "react-router-dom";


const NavMain = () => {
    return ( 
        <StyledNavMain>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
        </StyledNavMain>
    );
}
 
export default NavMain;