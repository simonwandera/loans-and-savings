import React, { useState, useEffect } from 'react';
import profile from '../images/profile.jpeg'
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
    const [details, setDetails] = useState()
    const [isPending, setIsPending] = useState(true);
    const [userId, setUserId] = useState(localStorage.getItem('access_id'))
    const [userType, setUserType] = useState(props.userType)


    return (
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                <h5>User Profile</h5>
            </div>

           {props.details && <div className="row">
                <div className="container-fluid mt-4 col-lg-3 col-md-4 col-sm-9 m-3 shadow ">
                    <div className="container-fluid border-bottom mb-2">
                        <h6>Profile Photo</h6>
                    </div>
                    <img class="img-fluid rounded-pill" src="http://localhost:5000/uploads/default.jpeg" alt="Profile Image" />
                </div>
                <div className="container-fluid m-3 col-lg-8 col-md-8 rounded border-start border-4 border-primary shadow">
                    <div className="container-fluid border-bottom mb-2 row">
                        <div className="col-4 mt-2"><h6>Personal information</h6></div>
                        <div className="col-8 justify-content-center"><button className="btn btn-success mb-2">Update</button></div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">ID Number</div>
                        <div className="col-8"> {props.details.ID_Number} </div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">First Name</div>
                        <div className="col-8"> {props.details.first_name} </div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Other Names</div>
                        <div className="col-8">{props.details.other_names}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Phone Number</div>
                        <div className="col-8">{props.details.phone_number}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">KRA PIN</div>
                        <div className="col-8">{props.details.KRA_pin}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Physical Address</div>
                        <div className="col-8">{props.details.constituency}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Occupation</div>
                        <div className="col-8">{props.details.occupation}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Bank Account Number</div>
                        <div className="col-8">{props.details.Bank_account}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Bank Name</div>
                        <div className="col-8">{props.details.Bank_name}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Password</div>
                        <div className="col-8">{props.details.password}</div>
                    </div>
                    

                </div>
            </div>}
        </div>

    )

}
export default UserDetails;