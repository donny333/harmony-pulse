import StyledRegister from "./StyledRegister";
import { useFormik } from "formik";

let users = {
    "id": 1,
    "name": "name",
    "lastName": "surname",
    "email": "a@gmail.com",
    "password": "password",
    "admin": false,
    "photoUrl": "url"
}

let initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    photoUrl: ''
}

const Register = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            console.log(values)
        },
    });

    return ( 
    <StyledRegister>
            <h1>Register page</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="lastName" id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                    <input type="text" name="password" id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Repeat Password</label>
                    <input type="text" name="repeatPassword" id="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Photo Url</label>
                    <input type="text" name="photoUrl" id="photoUrl"
                    value={formik.values.photoUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </StyledRegister>
    );
}
 
export default Register;