import { createContext, useContext, useReducer } from "react";
import { database } from "../database";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const TrainingsContext = createContext();

let data = [];
const querySnapshot = await getDocs(collection(database, "trainings"));
querySnapshot.forEach((doc) => {
    data.push(doc.data())
});

const trainingsActionTypes = {
    add: "add_a_training"
}

const reducer = (state, action) => {
    switch(action.type){
        case trainingsActionTypes.add:
            console.log('I am adding a training')
        default:
            return state;
    }
}

const Trainings = ( { children } ) => {

    const [trainings, setTrainings] = useReducer(reducer, data);

    return (<TrainingsContext.Provider
        value = {{
            trainings
        }}
    >
        { children }
    </TrainingsContext.Provider>);
}

export default TrainingsContext;
export {Trainings};