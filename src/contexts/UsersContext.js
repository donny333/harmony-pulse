import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext = createContext();

const usersActionTypes = {
    load: "load_all_users",
    add: "add_a_user"
};

const reducer = (state, action) => {
    switch(action.type){
        case usersActionTypes.load:
            return action.data;
    }
}

const Users = ( { children } ) => {

    const [users,setUsers] = useReducer(reducer, []);

    if(users){
        console.log(users)
    }

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
                setCurrentUser
            }}
        >
            { children }
        </UsersContext.Provider>
    );
}

export default UsersContext;
export {Users};