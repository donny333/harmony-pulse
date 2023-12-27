import { createContext, useReducer, useEffect } from "react";

const ClubsContext = createContext();

const clubsActioTypes = {
    load: 'load_all_clubs'
}

const reducer = (state, action) =>{
    switch(action.type){
        case clubsActioTypes.load:
            return action.data;
        default:
            return state;
    }
}

const Clubs = ( { children } ) => {

    const [clubs, setClubs] = useReducer(reducer, []);

    useEffect(()=>{
        fetch('http://localhost:8080/clubs')
            .then(res => res.json())
            .then(data => setClubs({
                type: clubsActioTypes.load,
                data: data
            }))
    }, [])

    console.log(clubs);

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