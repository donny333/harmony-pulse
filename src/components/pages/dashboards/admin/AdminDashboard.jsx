import { useContext } from "react";
import UsersContext from "../../../../contexts/UsersContext";
import ClubsContext from "../../../../contexts/ClubsContext";
import TrainingsContext from "../../../../contexts/TrainingsContext";
import StyledAdminDashboard from "./StyledAdminDashboard";
import { daysNamesLt } from "../../../../helpers/infoArrays";


const Contacts = () => {

    const {users, currentUser} = useContext(UsersContext);

    const {clubs} = useContext(ClubsContext);

    const {trainings} = useContext(TrainingsContext);

    const availableClubs = clubs.filter(club => club.adminId.includes(currentUser.id));
    
    return ( 
    <StyledAdminDashboard>
        {   
            availableClubs.length > 0 ?
            availableClubs.map(club => 
                <div className="club" key={club.id}>
                    <h1>{club.clubName}</h1>
                    {trainings.map(training =>{

                        const trainer = users.find(user =>
                            training.trainerId === user.id
                        );

                        const trainersFullName = `${trainer.name} ${trainer.lastName}`;

                        const trainingDay = `day${training.trainingDay}`;

                        const trainingDayName = daysNamesLt[trainingDay];

                        return (
                            <div className="trainingInfo" key={training.id}>
                                <h4>{training.trainingName}</h4>
                                <p>{trainersFullName}</p>
                                <p>{trainingDayName}</p>
                                <p>{`${training.trainingStart} - ${training.trainingEnd}`}</p>
                                <button>Start Training</button>
                            </div>
                        );
                    })}
                </div>                
            ) :
            <div className="club">
                <h1>You can't administer any club yet.</h1>
                <p>For any questions please contact your club administrator.</p>
            </div>
        }
    </StyledAdminDashboard>
    );
}
 
export default Contacts;