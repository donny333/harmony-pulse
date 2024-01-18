import { createContext, useReducer } from "react";
import { database } from "../database.js";
import {collection, getDocs} from "firebase/firestore"

const ClubsContext = createContext();

let data = [];
const querySnapshot = await getDocs(collection(database, "clubs"));
querySnapshot.forEach((doc) => {
    data.push(doc.data())
});

const clubsActioTypes = {
    load: 'load_all_clubs'
}

const reducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const Clubs = ( { children } ) => {

    const [clubs, setClubs] = useReducer(reducer, data);

    return ( 
    <ClubsContext.Provider
        value={{
            clubs
        }}
    >
        { children }
    </ClubsContext.Provider> );
}
 
export default ClubsContext;
export {Clubs};