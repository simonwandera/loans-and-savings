import React from 'react';
import { setNestedObjectValues, useFormik } from 'formik'

const AddSavingsAccount = () => {

    const validate = values => {
        const errors = {}

        if (!values.committmentAmount) {
            errors.committmentAmount = 'Required'
        } else if (values.committmentAmount < 100) {
            errors.committmentAmount = 'Commitment amount not be less than Ksh 100 '
        }

        if (!values.period) {
            errors.period = 'Required'
        }else if(values.period < 3){
            errors.period = "Savings period must not be less than 2 months"
        }

        if (!values.frequency) {
            errors.frequency = 'Required'
        }else if(values.frequency === '1'){
            errors.frequency = 'Please select a valid frequency of saving'
        }

        if (!values.start_date) {
            errors.start_date = 'Required'
        }

        if (!values.reason) {
            errors.reason = 'Required'
        }else if(values.reason.length < 10){
            errors.reason = 'Reason too short'
        }
        return errors
    }

    const onSubmit = values => {

        console.log(values)

    }

    const formik = useFormik({
        initialValues: {
            committmentAmount: '',
            frequency: '',
            start_date: '',
            period: '',
            reason:''

        },
        validate,
        onSubmit
    })

    return (

        <div>
            <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

                <div className="row mb-3">

                    <div className="col-lg-4 col-md-6 ">
                        <div className="form-floating mb-3">
                            <input onChange={formik.handleChange} className="form-control" id="committmentAmount" name='committmentAmount' type="number" placeholder="Enter Amount to Save" value={formik.values.committmentAmount} onBlur={formik.handleBlur} />
                            <label for="committmentAmount">Commitment amount </label>
                            {formik.touched.committmentAmount && formik.errors.committmentAmount && <div className='text-danger'>{formik.errors.committmentAmount}</div>}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className="form-floating mb-3">
                            {/* <input onChange={formik.handleChange} className="form-control" id="occupation" name='occupation' type="select" placeholder="Enter Amount to Save" value={formik.values.occupation} onBlur={formik.handleBlur} /> */}
                            <select onChange={formik.handleChange} className='form-control' name="frequency" id="frequency" value={formik.values.frequency} onBlur={formik.handleBlur}>
                                <option value='1'>Select Frequency</option>
                                <option value='Daily'>Daily</option>
                                <option value='Weekly'>Weekly</option>
                                <option value='Monthly'>Monthly</option>
                            </select>
                            <label for="frequency"> Frequency Of Saving </label>
                            {formik.touched.frequency && formik.errors.frequency && <div className='text-danger'>{formik.errors.frequency}</div>}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className="form-floating mb-3">
                            <input onChange={formik.handleChange} className="form-control" id="start_date" name='start_date' type="date" placeholder="Enter Amount to Save" value={formik.values.start_date} onBlur={formik.handleBlur} />
                            <label for="start_date">Start Start </label>
                            {formik.touched.start_date && formik.errors.start_date && <div className='text-danger'>{formik.errors.start_date}</div>}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className="form-floating mb-3">
                            <input onChange={formik.handleChange} className="form-control" id="period" name='period' type="number" placeholder="Enter Amount to Save" value={formik.values.period} onBlur={formik.handleBlur} />
                            <label for="Period">Period in Months </label>
                            {formik.touched.period && formik.errors.period && <div className='text-danger'>{formik.errors.period}</div>}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 ">
                        <div className="form-floating mb-3">
                            <input onChange={formik.handleChange} className="form-control" id="reason" name='reason' type="textarea" placeholder="Enter Amount to Save" value={formik.values.reason} onBlur={formik.handleBlur} />
                            <label for="Period">Reason </label>
                            {formik.touched.reason && formik.errors.reason && <div className='text-danger'>{formik.errors.reason}</div>}
                        </div>
                    </div>

                    <div className="mt-4 mb-0 justify-content-center">
                    {/* {formik.errors && <div className='text-danger'>Please Correct on highligted errors before submitting</div>} */}
                        <div className="d-grid col-lg-5">
                            <button className="btn btn-primary btn-block py-3" type="Submit">Create Account</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>

    )

}
export default AddSavingsAccount;