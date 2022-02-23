import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import { useUser, useUserUpdate } from './userContext'
import { useFormik } from 'formik'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';



const Register = () => {
    const validate = values => {
        const errors = {}

        if (!values.firstName) {
            errors.firstName = 'Required'
        } else if (values.firstName.length < 2) {
            errors.firstName = 'Must be more than 1 character'
        }

        if (!values.otherNames) {
            errors.otherNames = 'Required'
        } else if (values.otherNames.length < 2) {
            errors.otherNames = 'Must be more than 1 character'
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required'
        } else if (values.phoneNumber.length < 5) {
            errors.phoneNumber = 'Wrong format'
        }

        if (!values.idNumber) {
            errors.idNumber = 'Required'
        } else if (values.idNumber.length < 4) {
            errors.idNumber = 'Please enter a valid phone number'
        }
        
        // if (!values.kraPin) {
            //     errors.kraPin = 'Required'
            // } else if (values.kraPin.length < 5) {
                //     errors.kraPin = 'Must be 6 characters or more'
                // } else if (values.kraPin === '12345678') {
                    //     errors.kraPin = 'Must not be 12345678 !'
                    // }

        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 4) {
            errors.password = 'Must be 5 characters or more'
        } else if (values.password === '12345678') {
            errors.password = 'Must not be 12345678 !'
        }
                    
        if (!values.occupation) {
            errors.occupation = 'Required'
        }

        if (!values.county) {
            errors.county = 'Required'
        }

        if (!values.constituency) {
            errors.constituency = 'Required'
        }

        // if (!values.bankAccountNumber) {
        //     errors.bankAccountNumber = 'Required'
        // }

        // if (!values.bankName) {
        //     errors.bankName = 'Required'
        // }

        if (!values.repassword) {
            errors.repassword = 'Required'
        } else if (values.repassword !== values.password) {
            errors.repassword = 'Password Mismatch'
        }

        return errors

    }


    const onSubmit = values => {
        // alert(JSON.stringify(value, null, 14))
        console.log("nun", values)


        fetch('/main/addmember', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Contect-Type": "application/json; charset=UTF-8"
            }
        }).then(responce => {
            console.log(responce.status);
            if (responce.status !== 200) {

                alert("The ID Number you entered already has an account.")
                // setCurrentUser("g")
                // console.log(currentUser)
                setError_('The ID Number you entered already has an account.')
            }
            else {
                alert("passed with flying colors")
                setError('')
            }
            return responce.json();

            // props.setToken(responce.data.access_token)
        }).then(data => {
            if(data.msg == 'success'){
                window.location.href = '/'
            }
            
        }).catch(error => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }


    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    const [error_, setError_] = useState()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            otherNames: '',
            phoneNumber: '',
            idNumber: '',
            idImage: '',
            kraPin: '',
            kraImage: '',
            occupation: '',
            county: '',
            constituency: '',
            bankAccountNumber: '',
            bankName: '',
            password: '',
            repassword: ''
        },
        validate,
        onSubmit
    })

    const counties = useFetch('/main/county');

    useEffect(() => {
        fetch('/main/constituency/' + formik.values.county, {
            method: 'GET'
        }).then(response => {
            if (!response.ok) {
                throw Error('Could not fetch the data for the resourse');
            }

            return response.json()
        })
            .then(data => {
                setData(data)
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false)
                    setError(error.message);
                }
            })

    }, [formik.values.county]);

    return (
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Registration</h3></div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

                                    <div class="row mb-3">
                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="firstName" name='firstName' type="text" placeholder="firstName" value={formik.values.firstName} onBlur={formik.handleBlur} />
                                                <label for="firstName">First Name</label>
                                                {formik.touched.firstName && formik.errors.firstName && <div className='text-danger'>{formik.errors.firstName}</div>}
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="otherNames" name="otherNames" type="text" placeholder="otherNames" value={formik.values.otherNames} onBlur={formik.handleBlur} />
                                                <label for="password">Other Names </label>
                                                {formik.touched.otherNames && formik.errors.otherNames && <div className='text-danger'>{formik.errors.otherNames}</div>}
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="phoneNumber" name="phoneNumber" type="text" placeholder="password" value={formik.values.phoneNumber} onBlur={formik.handleBlur} />
                                                <label for="phoneNumber">Phone Number </label>
                                                {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className='text-danger'>{formik.errors.phoneNumber}</div>}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="idNumber" name='idNumber' type="text" placeholder="Enter Amount to Save" value={formik.values.idNumber} onBlur={formik.handleBlur} />
                                                <label for="idNumber">ID Number </label>
                                                {formik.touched.idNumber && formik.errors.idNumber && <div className='text-danger'>{formik.errors.idNumber}</div>}
                                            </div>
                                        </div>

                                        {/* <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="kraPin" name='kraPin' type="text" placeholder="Enter Amount to Save" value={formik.values.kraPin} onBlur={formik.handleBlur} />
                                                <label for="kraPin">KRA Pin </label>
                                                {formik.touched.kraPin && formik.errors.kraPin && <div className='text-danger'>{formik.errors.kraPin}</div>}
                                            </div>
                                        </div> */}
                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                {/* <input onChange={formik.handleChange} class="form-control" id="occupation" name='occupation' type="select" placeholder="Enter Amount to Save" value={formik.values.occupation} onBlur={formik.handleBlur} /> */}
                                                <select onChange={formik.handleChange} className='form-control' name="occupation" id="occupation" value={formik.values.occupation} onBlur={formik.handleBlur}>
                                                    <option value="">--select occupation--</option>
                                                    <option value="Employed">Employed</option>
                                                    <option value="Self Employed">Self employed</option>
                                                    <option value="Unemployed">Unemployed</option>
                                                </select>
                                                <label for="occupation"> Occupation </label>
                                                {formik.touched.occupation && formik.errors.occupation && <div className='text-danger'>{formik.errors.occupation}</div>}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                {/* <input onChange={formik.handleChange} class="form-control" id="occupation" name='occupation' type="select" placeholder="Enter Amount to Save" value={formik.values.occupation} onBlur={formik.handleBlur} /> */}
                                                <select onChange={formik.handleChange} className='form-control' name="county" id="county" value={formik.values.county} onBlur={formik.handleBlur}>
                                                    <option value="">--select county--</option>
                                                    {counties.data && counties.data.map((county) =>
                                                        <option value={`${county.id}`} key={county.id}>{county.county_name}</option>
                                                    )}
                                                </select>
                                                <label for="county"> County </label>
                                                {formik.touched.county && formik.errors.county && <div className='text-danger'>{formik.errors.county}</div>}
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                {/* <input onChange={formik.handleChange} class="form-control" id="occupation" name='occupation' type="select" placeholder="Enter Amount to Save" value={formik.values.occupation} onBlur={formik.handleBlur} /> */}
                                                <select onChange={formik.handleChange} className='form-control' name="constituency" id="constituency" value={formik.values.constituency} onBlur={formik.handleBlur}>
                                                <option value="">--select constituency--</option>
                                                    {data && data.map((constituency) =>
                                                        <option value={`${constituency.id}`} key={constituency.id}>{constituency.constituency_name}</option>
                                                    )}
                                                </select>
                                                <label for="constituency"> constituency </label>
                                                {formik.touched.constituency && formik.errors.constituency && <div className='text-danger'>{formik.errors.constituency}</div>}
                                            </div>
                                        </div>

                                        {/* <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="bankAccountNumber" name="bankAccountNumber" type="text" placeholder="password" value={formik.values.bankAccountNumber} onBlur={formik.handleBlur} />
                                                <label for="bankAccountNumber">Bank Account Number</label>
                                                {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber && <div className='text-danger'>{formik.errors.bankAccountNumber}</div>}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="bankName" name='bankName' type="text" placeholder="Enter Amount to Save" value={formik.values.bankName} onBlur={formik.handleBlur} />
                                                <label for="email">Bank Name</label>
                                                {formik.touched.bankName && formik.errors.bankName && <div className='text-danger'>{formik.errors.bankName}</div>}
                                            </div>
                                        </div> */}

                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="password" name="password" type="text" placeholder="password" value={formik.values.password} onBlur={formik.handleBlur} />
                                                <label for="password">Password</label>
                                                {formik.touched.password && formik.errors.password && <div className='text-danger'>{formik.errors.password}</div>}
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={formik.handleChange} class="form-control" id="repassword" name="repassword" type="text" placeholder="repassword" value={formik.values.repassword} onBlur={formik.handleBlur} />
                                                <label for="repassword">repassword </label>
                                                {formik.touched.repassword && formik.errors.repassword && <div className='text-danger'>{formik.errors.repassword}</div>}
                                            </div>
                                        </div>

                                        {/* <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={e => formik.setFieldValue('idImage', e.target.files[0])} class="form-control" id="idImage" name="idImage" type="file" placeholder="idImage" onBlur={formik.handleBlur} />
                                                <label for="idImage" className="text-dark">Id copy </label>
                                                {formik.touched.idImage && formik.errors.idImage && <div className='text-danger'>{formik.errors.idImage}</div>}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 ">
                                            <div class="form-floating mb-3">
                                                <input onChange={e => formik.setFieldValue('kraImage', e.target.files[0])} class="form-control" id="kraImage" name="kraImage" type="file" placeholder="KraImage" onBlur={formik.handleBlur} />
                                                <label for="KraImage" className="text-dark">KRA copy </label>
                                                {formik.touched.kraImage && formik.errors.kraImage && <div className='text-danger'>{formik.errors.kraImage}</div>}
                                            </div>
                                        </div> */}

                                    </div>
                                    {error && <div className='alert alert-danger'>{error_}</div>}
                                    <div class="mt-4 mb-0">
                                        <div class="d-grid">
                                            <button class="btn btn-primary btn-block" type="submit">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer text-center py-3">
                                {/* <div class="small"><a href="login.html">Have an account? Go to login</a></div> */}
                                <Link to='/'>Have an account? Go to login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )

}
export default Register;