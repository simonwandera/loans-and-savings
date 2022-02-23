import React from 'react';
import { setNestedObjectValues, useFormik } from 'formik'

const AddInvestmentAccount = () => {

    const validate = values => {
        const errors = {}

        if (!values.InvestmentAmount) {
            errors.InvestmentAmount = 'Required'
        } else if (values.InvestmentAmount < 10000) {
            errors.InvestmentAmount = 'Ivnestment amount not be less than Ksh 10,000 '
        }

        if (!values.period) {
            errors.period = 'Required'
        }else if(values.period < 3){
            errors.period = "Savings period must not be less than 2 months"
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
            InvestmentAmount:'',
            period: '',
            reason: ''

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
                            <input onChange={formik.handleChange} className="form-control" id="InvestmentAmount" name='InvestmentAmount' type="number" placeholder="Enter Amount to Save" value={formik.values.InvestmentAmount} onBlur={formik.handleBlur} />
                            <label for="InvestmentAmount">Investment amount </label>
                            {formik.touched.InvestmentAmount && formik.errors.InvestmentAmount && <div className='text-danger'>{formik.errors.InvestmentAmount}</div>}
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 ">
                        <div className="form-floating mb-3">
                            <input onChange={formik.handleChange} className="form-control" id="period" name='period' type="number" placeholder="Enter Amount to Save" value={formik.values.period} onBlur={formik.handleBlur} />
                            <label for="Period">Period of investment in Months </label>
                            {formik.touched.period && formik.errors.period && <div className='text-danger'>{formik.errors.period}</div>}
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 ">
                        <div className="form-floating mb-3">
                            <input onChange={formik.handleChange} className="form-control" id="reason" name='reason' type="textarea" placeholder="Enter Amount to Save" value={formik.values.reason} onBlur={formik.handleBlur} />
                            <label for="reason">Reason </label>
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
export default AddInvestmentAccount;