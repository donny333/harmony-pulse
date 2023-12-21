import StyledRegister from "./StyledRegister";
import { Formik } from "formik";

let users = {
    "id": 1,
    "name": "name",
    "lastName": "surname",
    "email": "a@gmail.com",
    "password": "password",
    "admin": false,
    "photoUrl": "url"
}

let values = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    photoUrl: ''
}

const Register = () => {
    return ( 
    <StyledRegister>
            <h1>Register page</h1>
            <Formik
                initialValues={values}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            />
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (

            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="lastName" id="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                    <input type="text" name="password" id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Repeat Password</label>
                    <input type="text" name="repeatPassword" id="repeatPassword"
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="name">Photo Url</label>
                    <input type="text" name="photoUrl" id="photoUrl"
                    value={values.photoUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            )}
        </StyledRegister>
    );
}
 
export default Register;