import React, { useState } from 'react';
import { useUser, useUserUpdate } from '../main/userContext'
import { useFormik } from 'formik'



const RequestLoan = ({savingsDetails}) => {
    const currentUser = useUser()
    const [amount, setAmount] = useState();
    const [member_id, setMember_id] = useState(currentUser);
    const [phoneNumber, setPhoneNumber] = useState()
    const [errorMessage, seterrorMessage] = useState()

    const validate = values => {
        const errors = {}

        if (!values.inputAmount) {
            errors.inputAmount = 'Required'
        } else if (values.inputAmount < 50) {
            errors.inputAmount = 'Amount must be at least 50 shillings'
        }

        if (!values.loanType) {
            errors.loanType = 'Required'
        } else if (values.loanType === 1) {
            errors.loanType = 'Required'
        }

        if (!values.period) {
            errors.period = 'Required'
        } else if (values.loanType === 'Emmergency' && values.period > 1) {
            errors.period = 'Emmergency Loans last for one month or less'
        } else if (values.loanType === 'ShortTerm' && values.period > 3) {
            errors.period = 'Short Term Loans last for less than three month'
        }else if (values.loanType === 'LongTerm' && values.period < 4) {
            errors.period = 'Long Term Loans last for at least 4 months'
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required'
        } else if (values.phoneNumber.length < 10) {
            errors.phoneNumber = 'In valid Phone number'
        }

        return errors
    }

    const onSubmit = (values) => {
        console.log(values)

        fetch('/main/request_loan', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Contect-Type": "application/json; charset=UTF-8"
            }
        }).then(responce => {
            console.log(responce.status)
            if (responce.status !== 200) {
                seterrorMessage("Failed To save.")
                // setCurrentUser("g")
                seterrorMessage("djs")
                console.log(errorMessage)

            }
            else {

                // setCurrentUser("mass")
                console.log("saved")

            }
            return responce.json();

        }).then(data => {
            console.log(data)

            alert("Loan request successfully made. Please wait as it is being processed")
            // setCurrentUser(data[0]);

        })
    }

    const formik = useFormik({
        initialValues: {
            loanType:'',
            inputAmount: '',
            account_id: savingsDetails.id,
            period:'',
            phoneNumber: ''
        },
        validate,
        onSubmit
    })


    return (
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-lg-7">
                    <div class="card shadow-md border-0 rounded-lg mt-2">
                        <div class="card-header"><h3 class="text-center font-weight-light my-2">Loan Request</h3></div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

                                <div class="form-floating mb-3">
                                    {/* <input onChange={formik.handleChange} class="form-control" id="occupation" name='occupation' type="select" placeholder="Enter Amount to Save" value={formik.values.occupation} onBlur={formik.handleBlur} /> */}
                                    <select onChange={formik.handleChange} className='form-control' name="loanType" id="loanType" value={formik.values.loanType} onBlur={formik.handleBlur}>

                                        <option value= '1'> --Select Loan Type-- </option>
                                        <option value= 'Emmergency'> Emmergency Loan</option>
                                        <option value= 'ShortTerm'>Short Term Loan</option>
                                        <option value= 'LongTerm'> Long Term Loan</option>
                                    </select>
                                    <label for="loanType"> Loan Type </label>
                                    {formik.touched.loanType && formik.errors.loanType && <div className='text-danger'>{formik.errors.loanType}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="inputAmount" name='inputAmount' type="text" placeholder="Enter Amount to Save" value={formik.values.inputAmount} onBlur={formik.handleBlur} />
                                    <label for="inputAmount">Enter amount</label>
                                    {formik.touched.inputAmount && formik.errors.inputAmount && <div className='text-danger'>{formik.errors.inputAmount}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="period" name='period' type="text" placeholder="Enter Amount to Save" value={formik.values.period} onBlur={formik.handleBlur} />
                                    <label for="inputAmount">Period in months</label>
                                    {formik.touched.period && formik.errors.period && <div className='text-danger'>{formik.errors.period}</div>}
                                </div>


                                <div className="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="phoneNumber" name='phoneNumber' type="text" placeholder="Enter Amount to Save" value={formik.values.phoneNumber} onBlur={formik.handleBlur} />
                                    <label for="phoneNumber">Enter Phone Number </label>
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className='text-danger'>{formik.errors.phoneNumber}</div>}
                                </div>

                                <div className="mt-4 mb-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-block" type="submit">Request Loan</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}
export default RequestLoan;