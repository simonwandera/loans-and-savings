import React from 'react'
import { Route, Redirect } from 'react-router'

const ProtectedRoute = ({children, ...rest}) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("token"))

    return(

        <Route {...rest} render={(auth) =>{
            return auth !== ''
            ? children
            : <Redirect to= '/login'/>

        }}/>
    );

};

export default ProtectedRoute