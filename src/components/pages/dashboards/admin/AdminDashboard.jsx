import { useContext } from "react";
import UsersContext from "../../../../contexts/UsersContext";
import StyledAdminDashboard from "./StyledAdminDashboard";

const Contacts = () => {

    const {users} = useContext(UsersContext);

    console.log(users)

    return ( 
    <StyledAdminDashboard>
        <div className="club">
            <h1>Laukinė Vyšnia</h1>
                <div className="trainingInfo">
                    <h4>Vaikų žaidybinė joga</h4>
                    <p>Saulė Demidenkaitė</p>
                    <p>Šeštadienis</p>
                    <p>12:30 - 14:00</p>
                    <button>Start Training</button>
                </div>
        </div>
    </StyledAdminDashboard>
    );
}
 
export default Contacts;