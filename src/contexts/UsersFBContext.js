import { createContext, useEffect, useState } from "react"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, addDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuF0Vx169rMmf8aDeQiPP9s5GLrqp0SnI",
  authDomain: "harmony-pulse.firebaseapp.com",
  projectId: "harmony-pulse",
  storageBucket: "harmony-pulse.appspot.com",
  messagingSenderId: "682905692111",
  appId: "1:682905692111:web:0040c3d3f3747be4bad4ba",
  measurementId: "G-VV5553DVMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

const querySnapshot = await getDocs(collection(database, "users"));
querySnapshot.forEach((doc) => {
    console.log(doc.data())
});





// further context
const UsersFBContext = createContext();


const UsersFB = ( { children } ) => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])



    if(users.length > 0){
        users.forEach(user => {
            console.log(user)
            try {
                const docRef =addDoc(collection(database, "users"), {...user}) 
            } catch (e) {
                console.log("Error adding document: " + e)
            }
        })
    }

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