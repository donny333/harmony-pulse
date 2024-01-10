import { useFormik } from "formik";
import StyledLogin from "./StyledLogin";
import { useContext, useState } from "react";
import UsersContext from "../../../contexts/UsersContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {

    const {users, setCurrentUser} = useContext(UsersContext);

    const navigate = useNavigate();

    const [ wrongData, setWrongData ] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values =>{
            const userExists = users.find((existingUser) => existingUser.email === values.email && existingUser.password === values.password);
            
            if (userExists) {
                setCurrentUser(userExists);
                setWrongData(false);
                navigate('/dashboard');
            } else {
                setWrongData(true)
            }
        }
    });

    return ( 
    <StyledLogin>
        <h1>Login page</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                />
            </div>
            <button type="submit">Log in</button>
            { wrongData ? <p>Username or password does not match.</p> : null}
        </form>
    </StyledLogin>
    );
}
 
export default Login;