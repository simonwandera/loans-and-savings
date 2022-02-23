import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./main/Login";
import Home from "./main/Home";
import PrivateRoute from "./PrivateRoute";
import Register from "./main/Reqister";
import MakeSaving from "./savings/MakeSaving";
import AdminDetails from './components/AdminDetails';
import UserDetails from './components/UserDetails';
import CreateAccount from "./accounts/CreateAccount";
import NotFound from "./components/NotFound";
import AllMembers from "./admin/AllMembers";
import SavingsAccounts from "./admin/SavingsAccounts";
import AllSavings from "./savings/AllSavings";
import MonthlySavings from "./savings/TotalMonthlySavings";
import SavingsProfile from "./accounts/SavingsProfile";
import Withdraw from "./accounts/RequestWithdraw";
import RequestLoan from "./loans/RequestLoan";
import SavingStatement from "./savings/SavingStatement";
import LoanStatement from "./loans/LoanStatement";
import CurrentProfile from "./accounts/CurrentProfile";
import InvestmentProfile from "./accounts/InvestmentProfile";

export default function Appliction(props) {
    console.log(props.token)
    console.log(props.accessId)

    const [details, setDetails] = useState()
    const [savingsDetails, setSavingsDetails] = useState()
    

    useEffect(() => {
        fetch('/auth/profile/' + props.accessId, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        })
            .then(response => {
                console.log(response.status)
                if (response.status !== '200') {
                    console.log(response)

                }

                return response.json()
            })
            .then(data => {
                console.log(data)
                setDetails(data)

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }, [props.token]);


    savingsDetails && console.log(savingsDetails)
    


    return (
        <Router>

            <Routes>
                <Route path="/" element={<Login setToken={props.setToken} token={props.token} details={details}/>} />
                <Route exact path="/register" element={<Register />} />

                <Route element={<PrivateRoute currentUser={props.token} />}>
                    {details && (<Route exact path='/home' element={<Home userType={details.role} token={props.token} details={details} setSavingsDetails={setSavingsDetails}/>}>

                        {details.role === 'USER' ? <Route path="" element={<UserDetails token={props.token} userType={details.role} details={details} />}></Route> :
                            details && <Route path="" element={<AdminDetails token={props.token} userType={details.role} details={details} />}></Route>}

                        <Route path="create" element={<CreateAccount/>}></Route>
                        <Route path="all_members" element={<AllMembers />}></Route>
                        <Route path="savingsaccounts" element={<SavingsAccounts />}></Route>
                        <Route path="allsavings" element={<AllSavings />}></Route>
                        <Route path="monthlysavings" element={<MonthlySavings />}></Route>
                        <Route path="savings_account" element={<SavingsProfile />}>
                            <Route path="save" element={<MakeSaving savingsDetails={savingsDetails}/>}></Route>
                            <Route path="withdraw" element={<Withdraw savingsDetails={savingsDetails}/>}></Route>
                            <Route path="request_loan" element={<RequestLoan savingsDetails={savingsDetails}/>}></Route>
                            <Route path="savings_statement" element={<SavingStatement />}></Route>
                            <Route path="loans_statement" element={<LoanStatement />}></Route>
                        </Route>

                        <Route path="current_account" element={<CurrentProfile />}>
                            <Route path="save" element={<MakeSaving />}></Route>
                            <Route path="withdraw" element={<Withdraw />}></Route>
                            <Route path="savings_statement" element={<SavingStatement />}></Route>
                            <Route path="loans_statement" element={<LoanStatement />}></Route>
                        </Route>

                        <Route path="investment_account" element={<InvestmentProfile />}>
                            <Route path="save" element={<MakeSaving />}></Route>

                        </Route>

                        {/* <Route path="creates" element={<MakeSaving/>}></Route> */}

                    </Route>)}

                </Route>

                <Route exact path="*" element={<NotFound />} />
            </Routes>

        </Router>
    );
}

