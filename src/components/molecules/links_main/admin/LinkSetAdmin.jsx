import StyledLinksMain from "../StyledLinksMain";
import { NavLink } from "react-router-dom";

const LinkSetUser = () => {
    return ( 
        <StyledLinksMain>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={""}>Logout</NavLink>
        </StyledLinksMain>
     );
}
 
export default LinkSetUser;