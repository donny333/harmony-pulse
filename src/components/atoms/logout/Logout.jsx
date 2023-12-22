import { useContext } from "react";
import UsersContext from "../../../contexts/UsersContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const {setCurrentUser} = useContext(UsersContext);

    const navigate = useNavigate();

    const logout = () => {
        setCurrentUser(null);
        navigate('/login');
    }

    return ( <a onClick={() => logout()} href="">Logout</a> );
}
 
export default Logout;