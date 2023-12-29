import { useContext } from "react";
import StyledTrainingCreate from "./StyledTrainingCreate";
import UsersContext from "../../../../contexts/UsersContext";

const TrainingCreate = () => {

    const {users} = useContext(UsersContext);

    return ( 
    <StyledTrainingCreate>
        <h1>Create a training</h1>
        <form>
            <div>
                <label htmlFor="trainingName">Training Name</label>
                <input type="name" id="trainingName" name="trainingName"/>
            </div>
            <div>
                <label htmlFor="trainerId">Select trainer</label>
                <select name="trainerId" id="trainerId">
                    {
                        users.map(user => {
                            if (user.admin){
                                return (
                                    <option>{`${user.name} ${user.lastName}`}</option>
                                )
                            }

                        })
                    }
                    <option value="test">Something</option>
                </select>
            </div>
            <div>
                <label htmlFor="trainingDay">Training day</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div>
                <label htmlFor="trainingStart">Training start time</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div>
                <label htmlFor="trainingEnd">Training end time</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <button>Create a training</button>
        </form>
    </StyledTrainingCreate>
    );
}
 
export default TrainingCreate;