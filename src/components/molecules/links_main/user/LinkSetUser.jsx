import Logout from "../../../atoms/logout/Logout";
import StyledLinksMain from "../StyledLinksMain";
import { NavLink } from "react-router-dom";

const LinkSetUser = () => {
    return ( 
        <StyledLinksMain>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <Logout/>
        </StyledLinksMain>
     );
}
 
export default LinkSetUser;