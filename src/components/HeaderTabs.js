import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HeaderTabs({ access, savingsData }) {

    console.log(savingsData)
    console.log(access)

    // const savings = useFetch("http://127.0.0.1:5000/main/savingsaccountdata/" + profileId)

    // useEffect(() => {
    //     fetch('http://127.0.0.1:5000/main/savingsaccountdata/' + profileId, {
    //         method: 'GET'
    //     }).then(response => {
    //         if (!response.ok) {
    //             throw Error('Could not fetch the data for the resourse');
    //         }
    //         return response.json()
    //     })
    //         .then(data => {
    //             setSavingsData(data)
    //         })
    //         .catch(error => {
    //             if (error.name === 'AbortError') {
    //                 console.log('fetch aborted')
    //             } else {
    //                 setIsPending(false)
    //                 setError(error.message);
    //             }
    //         })

    // }, [profileId]);



    return (
        <div className="row justify-content-left">
            {access === 'USER' && savingsData &&
                <div className="col-xl-3 col-md-4 col-sm-4">
                    <Link to="/home/savings_account">
                    <div className="card bg-primary text-white mb-4 ">
                        
                        <div className="card-body p-1">{savingsData.account_number}</div>
                        
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            {/* <div className="small text-white"><i className="fas fa-angle-right"></i></div> */}
                            <div className="small text-dark"><i className="fas fa-table fa-3x"></i></div>
                        </div>
                    </div>
                    </Link>
                </div>}

            {access === 'USER' &&
                <div className="col-xl-3 col-md-4 col-sm-4">
                    <Link to="/home/create">
                        <div className="card bg-info text-white mb-4">
                            <div className="card-body p-1">Create Account</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                {/* <h4 className="small text-white stretched-link"> 2 </h4> */}
                                <div className="small text-dark"><i className="fas fa-user fa-3x"></i></div>
                            </div>
                        </div>
                    </Link>
                </div>}

        </div>
    )

}