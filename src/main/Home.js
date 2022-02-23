import { Link, Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UserDetails from "../components/UserDetails";
import { useUser, useUserUpdate } from '../main/userContext'
import { useState, useEffect } from "react";
import HeaderTabs from '../components/HeaderTabs';
import AllMembers from '../admin/AllMembers';
import SavingsAccounts from '../admin/SavingsAccounts';
import AllSavings from '../savings/AllSavings';
import TotalMonthlySavings from '../savings/TotalMonthlySavings'
import useFetch from './useFetch';
// import Create from './accounts/Create';


// import useFetch from './useFetch';

const Home = (props) => {
    const currentUser = useUser()
    const setCurrentUser = useUserUpdate()
    // console.log(currentUser)
    const [userId, setUserId] = useState(localStorage.getItem('access_id'))
    const [userType, setUserType] = useState(props.accessToken)
    const [details, setDetails] = useState()

    console.log(props.userType)


    const [profileData, setProfileData] = useState({})
    // console.log(props.currentUser)
    console.log(props.accessToken)
    console.log(props.token)

    console.log(props.details.Id)


    const {data: savingsData, isPending, error} = useFetch('http://127.0.0.1:5000/main/savingsaccountdata/' + props.details.Id)

    props.setSavingsDetails(savingsData)

    
    return (
        <div>

            <div class="sb-nav-fixed">

                <NavBar />

                <div id="layoutSidenav">

                    <SideBar userType={props.userType} />

                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid px-4">
                                <h4 class="mt-4">Royal Focus</h4>
                                {props.userType === 'USER' && <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">{props.userType}</li>
                                </ol>}
                                {props.userType === 'ADMIN' && <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">{props.userType}</li>
                                </ol>}
                                {props.userType === 'ROOT' && <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">{props.userType}</li>
                                </ol>}


                                { <HeaderTabs access={props.userType} savingsData={savingsData} />}

                                <Outlet />

                                {/* <Routes>

                                    <Route exact path="/Home/save">
                                        <MakeSaving />
                                    </Route>

                                    <Route exact path="/home/all_members">
                                        {userType !== "USER" ?
                                            <AllMembers />
                                            : <Navigate to='/' />
                                        }
                                    </Route>

                                    <Route exact path="/home/savingsaccounts">
                                        {userType !== "USER" ?
                                            <SavingsAccounts/>
                                            : <Navigate to='/' />
                                        }
                                    </Route>

                                    <Route exact path="/home/allsavings">
                                        {userType !== "USER" ?
                                            <AllSavings/>
                                            : <Navigate to='/' />
                                        }
                                    </Route>

                                    <Route exact path="/home/monthlysavings">
                                        {userType !== "USER" ?
                                            <TotalMonthlySavings/>
                                            : <Navigate to='/' />
                                        }
                                    </Route>

                                    <Route>
                                        {userType === "USER" && profileData ?
                                            <UserDetails details={profileData} />
                                            : <AdminDetails details={profileData} />
                                        }
                                    </Route>

                                    <Route exact path="/create">
                                        <Create />
                                    </Route>

                                </Routes> */}

                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Home;
