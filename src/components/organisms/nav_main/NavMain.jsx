import { useContext } from "react";
import StyledNavMain from "./StyledNavMain";
import { NavLink } from "react-router-dom";
import UsersContext from "../../../contexts/UsersContext";
import LinkSetLoggedOut from "../../molecules/links_main/logeedout/LinkSetLoggedOut";
import LinkSetUser from "../../molecules/links_main/user/LinkSetUser";
import LinkSetAdmin from "../../molecules/links_main/admin/LinkSetAdmin"


const NavMain = () => {

    const {currentUser, setCurrentUser} =useContext(UsersContext);

    return ( 
        <StyledNavMain>
            {
                ! currentUser ?
                <LinkSetLoggedOut/>
                : currentUser.admin ?
                <LinkSetAdmin/> :
                <LinkSetUser />
            
            }
        </StyledNavMain>
    );
}
 
export default NavMain;