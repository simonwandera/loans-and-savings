import React, {useState} from 'react';
import { useUser, useUserUpdate } from '../main/userContext'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';


const Withdraw = ({savingsDetails}) => {
    let Navigate = useNavigate()
    const validate = values => {
        const errors = {}

        if (!values.inputAmount) {
            errors.inputAmount = 'Required'
        } else if (values.inputAmount < 50) {
            errors.inputAmount = 'Amount must be at least 50 shillings'
        }else if (values.inputAmount > savingsDetails.total){
            errors.inputAmount = 'You do not have sufficient funds to complete your request.'
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

        fetch('/main/withdraw', {
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
                console.log(errorMessage)

            }
            
            return responce.json();

        }).then(data => {
            console.log(data)
            alert("Withdraw request was made successfully. Please wait as it is being processed")
            Navigate("../")


        })
    }

    const [errorMessage, seterrorMessage] = useState()

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            inputAmount: '',
            accountID: savingsDetails.id,
            type: 'WITHDRAW',
            status: 'PENDING'
        },
        validate,
        onSubmit
    })


    return (
            <div class="container">
                <div class="row justify-content-left">
                    <div class="col-lg-7">
                        <div class="card shadow-md border-0 rounded-lg mt-2">
                            <div class="card-header"><h3 class="text-center font-weight-light my-2">Withdraw Kash</h3></div>
                            <div class="card-body">
                            <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                                    <div class="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="inputAmount" name='inputAmount' type="number" placeholder="Enter Amount to Save"  value={formik.values.inputAmount} onBlur={formik.handleBlur} />
                                        <label>Enter Amount you wish to save </label>
                                        {formik.touched.inputAmount && formik.errors.inputAmount && <div className='text-danger'>{formik.errors.inputAmount}</div>}

                                    </div>

                                    <div class="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="phoneNumber" name='phoneNumber' type="text" placeholder="Enter Amount to Save"  value={formik.values.phoneNumber} onBlur={formik.handleBlur} />
                                        <label>Enter Phone Number </label>
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className='text-danger'>{formik.errors.phoneNumber}</div>}
                                    </div>

                                    <div class="mt-4 mb-0">
                                        <div class="d-grid">
                                            <button class="btn btn-primary btn-block" type="submit">Request Withdraw</button>
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
export default Withdraw;