import { useFormik } from "formik";
import StyledLogin from "./StyledLogin";

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values =>{
            console.log(values)
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
        </form>
    </StyledLogin>
    );
}
 
export default Login;