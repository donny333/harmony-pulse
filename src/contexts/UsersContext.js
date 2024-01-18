import { createContext, useEffect, useReducer, useState } from "react";
import { database } from "../database.js";
import {collection, getDocs, setDoc, doc} from "firebase/firestore"

const UsersContext = createContext();

let data = [];
const querySnapshot = await getDocs(collection(database, "users"));
querySnapshot.forEach((doc) => {
    data.push(doc.data())
});

const usersActionTypes = {
    add: "add_a_user"
};

const reducer = (state, action) => {
    switch(action.type){
        case usersActionTypes.add:
            const newUser = action.data;
            const ID = newUser.id;
            setDoc(doc(database, "users", ID), {...newUser});
            return [...state, action.data];
        default:
            return state;
    }
}

const Users = ( { children } ) => {

    const [users,setUsers] = useReducer(reducer, data);

    const [currentUser, setCurrentUser] = useState(null);

    return (
        <UsersContext.Provider
            value={{
                users,
                setUsers,
                currentUser,
                setCurrentUser,
                usersActionTypes
            }}
        >
            { children }
        </UsersContext.Provider>
    );
}

export default UsersContext;
export {Users};