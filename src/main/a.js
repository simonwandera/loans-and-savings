import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header"
import useToken from "./useToken";
import useAccessToken from "./accessLevelToken";


const ProtectedRoute = ({ children, ...rest }) => {
    const { token, removeToken, setToken } = useToken();
    // const {accessToken, setAccessLevelToken} = useAccessToken();
   
    const currentUser = token
    console.log("this is the " + currentUser)
    

    return (
        <Route {...rest} render={() => {

            return  currentUser !== "" && currentUser !== undefined && currentUser !== null
                ? children
                : <Redirect to='/' />

        }} />
    );
};

export default function Appliction(props) {
    console.log(props.token)
    console.log(props.accessToken)

    return (
        <Router>
            <div>
                <>
                    <Route exact path="/" >
                        <Login setToken={props.setToken} token={props.token} accessToken={props.accessToken} setAccessLevelToken={props.setAccessLevelToken}/>
                    </Route>
                    <ProtectedRoute exact path='/home'>
                       <Home accessToken={props.accessToken} setAccessToken={props.setAccessToken}/> 
                    </ProtectedRoute>
                </>
            </div>
        </Router>
    );
}
