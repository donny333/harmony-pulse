import { useContext } from "react";
import StyledTrainingCreate from "./StyledTrainingCreate";
import UsersContext from "../../../../contexts/UsersContext";
import { daysNamesLt, hourPickerArray, minutePickerArray } from "../../../../helpers/infoArrays";
import { useFormik } from "formik";
import * as Yup from "yup";

const TrainingCreate = () => {
    
    const {users} = useContext(UsersContext);
    
    const daysArray = Object.values(daysNamesLt)
    
    const allTrainers = users.filter(user => user.admin).slice().sort((a, b) => a.name.localeCompare(b.name)).map((user, i) => {
        return {...user, fakeId: `usr-${i}`}
    })
    
    const initialValues = {
        trainingName: '',
        trainerId: `${allTrainers[0].fakeId}`,
        trainingDay: "1",
        trainingStartHour: hourPickerArray[0],
        trainingStartMinute: minutePickerArray[0],
        trainingEndHour: hourPickerArray[0],
        trainingEndMinute: minutePickerArray[0],
    }

    const validationScheme = Yup.object().shape({
        trainingName: Yup.string()
            .required('Please fill this field')
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationScheme,
        onSubmit: values => {
            console.log(values)
        }
    });
    
    return ( 
    <StyledTrainingCreate>
        <h1>Create a training</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="trainingName">Training Name</label>
                <input 
                    type="text" 
                    id="trainingName"
                    name="trainingName"
                    onChange={formik.handleChange}
                    value={formik.values.trainingName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.trainingName && formik.errors.trainingName ? (<p className="validationError">{formik.errors.trainingName}</p>) : null}
            </div>
            <div>
                <label htmlFor="trainerId">Select trainer</label>
                <select 
                    name="trainerId" 
                    id="trainerId"
                    onChange={formik.handleChange}
                    value={formik.values.trainerId}
                    >
                    {
                        allTrainers.map((user, i) => {
                            return (
                                <option value={user.fakeId} key={i}>{`${user.name} ${user.lastName}`}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="trainingDay">Training day</label>
                <select 
                    name="trainingDay" 
                    id="trainingDay"
                    onChange={formik.handleChange}
                    value={formik.values.trainingDay}
                    >
                    {
                        daysArray.map((day, i) => {
                            return (
                                <option key={i+1} value={i+1}>{day}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="trainingStart">Training start time</label>
                <select 
                    name="trainingStartHour" 
                    id="trainingStartHour"
                    onChange={formik.handleChange}
                    value={formik.values.trainingStartHour}
                    >
                    {
                        hourPickerArray.map((hour, i) => {
                            return <option key={i} value={hour}>{hour}</option>
                        })
                    }
                </select>
                <select 
                    name="trainingStartMinute" 
                    id="trainingStartMinute"
                    onChange={formik.handleChange}
                    value={formik.values.trainingStartMinute}
                    >
                    {
                        minutePickerArray.map((minute, i) => {
                            return <option key={i} value={minute}>{minute}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="trainingEnd">Training end time</label>
                <select 
                    name="trainingEndHour" 
                    id="trainingEndHour"
                    onChange={formik.handleChange}
                    value={formik.values.trainingEndHour}
                    >
                    {
                        hourPickerArray.map((hour, i) => {
                            return <option key={i} value={hour}>{hour}</option>
                        })
                    }
                </select>
                <select 
                    name="trainingEndMinute" 
                    id="trainingEndMinute"
                    onChange={formik.handleChange}
                    value={formik.values.trainingEndMinute}
                    >
                    {
                        minutePickerArray.map((minute, i) => {
                            return <option key={i} value={minute}>{minute}</option>
                        })
                    }
                </select>
            </div>
            <button type="submit">Create a training</button>
        </form>
    </StyledTrainingCreate>
    );
}
 
export default TrainingCreate;