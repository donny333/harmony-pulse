import { useContext } from "react";
import UsersContext from "../../../../contexts/UsersContext";
import StyledAdminDashboard from "./StyledAdminDashboard";
import ClubsContext from "../../../../contexts/ClubsContext";

const daysNamesLt = {
    day1: "Pirmadienis",
    day2: "Antradienis",
    day3: "Trečiadienis",
    day4: "Ketvirtadienis",
    day5: "Penktadienis",
    day6: "Šeštadienis",
    day7: "Sekmadienis",
};

const Contacts = () => {

    const {users} = useContext(UsersContext);

    const {clubs} = useContext(ClubsContext);

    return ( 
    <StyledAdminDashboard>
        {
            clubs.map(club => {
                return (
                <div className="club" key={club.id}>
                    <h1>{club.clubName}</h1>
                    {club.trainings.map(training =>{

                        const trainer = users.find(user =>
                            training.trainerId === user.id
                        );

                        const trainersFullName = `${trainer.name} ${trainer.lastName}`;

                        const trainingDay = `day${training.trainingDay}`;

                        const trainingDayName = daysNamesLt[trainingDay];

                        return (
                            <div className="trainingInfo" key={training.trainingId}>
                                <h4>{training.trainingName}</h4>
                                <p>{trainersFullName}</p>
                                <p>{trainingDayName}</p>
                                <p>{`${training.trainingStart} - ${training.trainingEnd}`}</p>
                                <button>Start Training</button>
                            </div>
                        );
                    })}
                </div>);
            })
        }
    </StyledAdminDashboard>
    );
}
 
export default Contacts;