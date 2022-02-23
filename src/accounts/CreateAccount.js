import React from 'react';
import { setNestedObjectValues, useFormik } from 'formik'
import { Link } from 'react-router-dom';
import AddSavingsAccount from './AddSavingsAccount';
import AddInvestmentAccount from './AddInvestmentAccount';


const CreateAccount = () => {

    const validate = values => {
        const errors = {}

        return errors
    }

    const onSubmit = values => {

    }

    const formik = useFormik({
        initialValues: {
            accounttype: '',
        },
        validate,
        onSubmit
    })



    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="card shadow-lg border-0 rounded-lg mt-2">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Create account</h3></div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

                                    <div class="col-lg-4 col-md-6 ">
                                        <div class="form-floating mb-3">
                                            {/* <input onChange={formik.handleChange} class="form-control" id="occupation" name='occupation' type="select" placeholder="Enter Amount to Save" value={formik.values.occupation} onBlur={formik.handleBlur} /> */}
                                            <select onChange={formik.handleChange} className='form-control' name="accounttype" id="accounttype" value={formik.values.accounttype} onBlur={formik.handleBlur}>
                                                <option value='0'>--Select Account type--</option>
                                                <option value='1'>Savings Account</option>
                                                <option value='3'>Current Account</option>
                                                <option value='2'>Investment Account</option>
                                            </select>
                                            <label for="accounttype"> Account Type </label>
                                            {formik.touched.accounttype && formik.errors.accounttype && <div className='text-danger'>{formik.errors.accounttype}</div>}
                                        </div>
                                    </div>
                                </form>
                                {formik.values.accounttype === '1' && <AddSavingsAccount />}
                                {formik.values.accounttype === '2' && <AddInvestmentAccount />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default CreateAccount;