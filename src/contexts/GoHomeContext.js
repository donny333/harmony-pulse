import { useFormik } from "formik";
import decideToGoToPanevezys from "tukas"; //IMPORT FUNCTION FROM TUKAS

const Input = () => {

    const formik = useFormik({
        initialValues: {
            leavingTime: ''
        },
        onSubmit: values =>{
            decideToGoToPanevezys(values.leavingTime)
        }
        /* ON SUBMIT SEE RESULTS ON CONSOLE */
    })

    return ( 
        <form>
            <label htmlFor="leavingTime">Leaving time</label>
            <input
                type="text" name="leavingTime" id="leavingTime"
                onChange={formik.handleChange}
            /> {/* INPUT FOR TIME */}
            <button type="submit">Submit Time</button> {/*SUBMIT LEAVING TIME*/}
        </form>
     );
}
 
export default Input;