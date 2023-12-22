import StyledRegister from "./StyledRegister";
import { useFormik } from "formik";
import * as Yup from 'yup';

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

const validationScheme = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Minimum 2 characters.')
        .max(50, 'Maximum 50 characters.')
        .required('Please fill this field.'),
    lastName: Yup.string()
        .min(2, 'Minimum 2 characters.')
        .max(50, 'Maximum 50 characters.')
        .required('Please fill this field.'),
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email.')
        .required('Please fill this field.'),
    password: Yup.string()
        .matches(/^(?=.*[a-z])/, 'Password must contain at least one lowercase letter.')
        .matches(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter.')
        .matches(/^(?=.*\d)/, 'Password must contain at least one digit.')
        .matches(/^(?=.*[@$!%*?&_])/, 'Password must contain at least one special character.')
        .min(8, 'Password must contain at least 8 characters.')
        .required('Please fill this field.'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match.')
        .required('Please fill this field.'),
    photoUrl: Yup.string()
        .url('Must be a valid URL')
});

const Register = () => {

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationScheme,
        onSubmit: values => {
            console.log(values)
        },
    });

    return ( 
    <StyledRegister>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.touched.name && formik.errors.name ? (<p>{formik.errors.name}</p>) : null}
                <div>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="lastName" id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.touched.lastName && formik.errors.lastName ? (<p>{formik.errors.lastName}</p>) : null}
                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.touched.email && formik.errors.email ? (<p>{formik.errors.email}</p>) : null}
                <div>
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.touched.password && formik.errors.password ? (<p>{formik.errors.password}</p>) : null}
                <div>
                    <label htmlFor="name">Repeat Password</label>
                    <input type="password" name="repeatPassword" id="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.touched.repeatPassword && formik.errors.repeatPassword ? (<p>{formik.errors.repeatPassword}</p>) : null}
                <div>
                    <label htmlFor="name">Photo Url</label>
                    <input type="text" name="photoUrl" id="photoUrl"
                    value={formik.values.photoUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {formik.touched.photoUrl && formik.errors.photoUrl ? (<p>{formik.errors.photoUrl}</p>) : null}
                <button type="submit">Submit</button>
            </form>
        </StyledRegister>
    );
}
 
export default Register;