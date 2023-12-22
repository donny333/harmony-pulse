import StyledLinksMain from "../StyledLinksMain";
import { NavLink } from "react-router-dom";

const LinkSetLoggedOut = () => {
    return ( 
        <StyledLinksMain>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
        </StyledLinksMain>
     );
}
 
export default LinkSetLoggedOut;