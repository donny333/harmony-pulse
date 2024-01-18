import { createContext, useEffect, useState } from "react"
import {collection, getDocs, setDoc} from "firebase/firestore"
import { database } from "../database.js";

let data = [];
const querySnapshot = await getDocs(collection(database, "users"));
querySnapshot.forEach((doc) => {
    data.push(doc.data())
});

const UsersFBContext = createContext();


const UsersFB = ( { children } ) => {
    
    const [usersFB, setUsersFB] = useState(data);

    return(
        <UsersFBContext.Provider
            value={{

            }}
        >
            { children }
        </UsersFBContext.Provider>
    );

}

export default UsersFBContext;
export { UsersFB }