import StyledRegister from "./StyledRegister";

let users = {
    "id": 1,
    "name": "name",
    "lastName": "surname",
    "email": "a@gmail.com",
    "password": "password",
    "admin": false,
    "photo": "link"
}

const Register = () => {
    return ( 
    <StyledRegister>
        <h1>Register page</h1>
        <form action="">
            <input type="text" name="name" id="name"/>
        </form>
    </StyledRegister>
    );
}
 
export default Register;