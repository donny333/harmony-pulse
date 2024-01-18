import { createContext, useEffect, useReducer, useState } from "react";
import {doc, setDoc} from "firebase/firestore";
import { database } from "../database.js";

const UsersContext = createContext();

const usersActionTypes = {
    load: "load_all_users",
    add: "add_a_user"
};

const reducer = (state, action) => {
    switch(action.type){
        case usersActionTypes.load:
            return action.data;
        case usersActionTypes.add:
            fetch('http://localhost:8080/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data];
        default:
            return state;
    }
}

const Users = ( { children } ) => {

    const [users,setUsers] = useReducer(reducer, []);

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers({
                type: usersActionTypes.load,
                data: data
            }))
    }, [])

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