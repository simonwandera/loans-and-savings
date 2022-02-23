import React, { useState } from 'react';
import { useUser, useUserUpdate } from '../main/userContext'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router';



const MakeSaving = ({savingsDetails}) => {
    let Navigate = useNavigate()
    const validate = values => {
        const errors = {}

        if (!values.inputAmount) {
            errors.inputAmount = 'Required'
        } else if (values.inputAmount < 50) {
            errors.inputAmount = 'Amount must be at least 50 shillings'
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

        fetch('/main/makesaving', {
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
            alert("Saving made successfully")
            Navigate("../")


            // setCurrentUser(data[0]);

        })
    }

    const currentUser = useUser()
    const [amount, setAmount] = useState();
    const [member_id, setMember_id] = useState(currentUser);
    const [phoneNumber, setPhoneNumber] = useState()
    const [errorMessage, seterrorMessage] = useState()

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            inputAmount: '',
            accountID: savingsDetails.id,
            type: 'SAVE'
        },
        validate,
        onSubmit
    })


    return (
        <div className="container">
            <div className="row justify-content-left">
                <div className="col-lg-7">
                    <div className="card shadow-md border-0 rounded-lg mt-2">
                        <div className="card-header"><h3 className="text-center font-weight-light my-2">Make Saving</h3></div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                                <div className='text-danger'>{errorMessage}</div>
                                <div className="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="inputAmount" name='inputAmount' type="number" placeholder="Enter Amount to Save"  value={formik.values.inputAmount} onBlur={formik.handleBlur} />
                                    <label>Enter Amount you wish to save </label>
                                    {formik.touched.inputAmount && formik.errors.inputAmount && <div className='text-danger'>{formik.errors.inputAmount}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input onChange={formik.handleChange} className="form-control" id="phoneNumber" name='phoneNumber' type="text" placeholder="Enter Amount to Save"  value={formik.values.phoneNumber} onBlur={formik.handleBlur} />
                                    <label>Enter Phone Number </label>
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className='text-danger'>{formik.errors.phoneNumber}</div>}
                                </div>

                                <div className="mt-4 mb-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-block" type="submit">Make Saving</button>
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

export default MakeSaving;