import React from 'react';
import profile from '../images/profile.jpeg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";



const AdminDetails = (props) => {

    

    return (
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                <h5>Admin Profile</h5>
            </div>

            {props.details && <div className="row">
                <div className="container-fluid mt-4 col-lg-3 col-md-4 m-3 shadow ">
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
                        <div className="col-4 text-primary">Email</div>
                        <div className="col-8"> {props.details.ID_Number} </div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Access Level</div>
                        <div className="col-8"> {props.details.role} </div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">First Name</div>
                        <div className="col-8">{props.details.first_name}</div>
                    </div>
                    <div class="row m-3 border-bottom">
                        <div className="col-4 text-primary">Other Names</div>
                        <div className="col-8">{props.details.other_names}</div>
                    </div>

                </div>
            </div>}

        </div>

    )

}
export default AdminDetails;