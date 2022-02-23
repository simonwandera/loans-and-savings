import React, {useState, useEffect} from 'react';
import { Link, Redirect, useNavigate } from "react-router-dom";
// import { useAge, useAgeUpdate } from './ageContext';

import {useUser, useUserUpdate} from './userContext'
import useToken from './useToken'

const Login = (props) => {

    const [user, setUser] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMesage, seterrorMesage] = useState([])
    const {token, setToken} = useToken()

    let Navigate = useNavigate()
    
    const currentUser = useUser()
    const setCurrentUser = useUserUpdate()

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const loginUser = (e) => {
        e.preventDefault();
        const user = {username, password};
        // console.log(user)

        fetch('/auth/login', {
            method:'POST',
            body: JSON.stringify(user),
            headers: {
                "Contect-Type": "application/json; charset=UTF-8"
            }
        }).then(responce => {
            console.log(responce.status);
            
            if (responce.status !== 200) {
                seterrorMesage("Please check your login details and try again.")
                setPassword("")
                alert("Invalid Credentials")
                // setCurrentUser("g")
                // console.log(currentUser)  
            }
            
            return responce.json();
            // props.setToken(responce.data.access_token)
        })
        .then(data => {
            if (data.access_token !== undefined){
                console.log(data.access_token)
                props.setToken(data.access_token)
                console.log("This is the:", token)
                // props.setAccessLevelToken(data.access_level)
                localStorage.setItem("access_id", data.access_id)
                // props.setAccessIdToken(data.access_id)
                // Navigate('/home')
                window.location.href = '/home'

                console.log(props.token)
            }
            })
        
        .catch((error) =>{
            if (error.responce){
                alert("Server Error")
                console.log(error.responce)
                console.log(error.responce.status)
                console.log(error.responce.headers)
            }
        })
        setLoginForm(({
            username: "",
            password: "" }))
            e.preventDefault();
    }

    
    return (
        <div className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Royal Focus LogIn</h3></div>
                                        <h6 className="text-danger">{errorMesage}</h6>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputEmail" type="email" value = {username} placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)}/>
                                                    <label>ID Number/ Username</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputPassword" type="password" value = {password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                                    <label>Password</label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label">Remember Password</label>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="password.html">Forgot Password?</a>
                                                    {/* <Link  className="btn btn-primary" onClick={() => loginUser()}>Login</Link> */}
                                                    {password && <button className="btn btn-primary" type='button'  onClick={loginUser}>Login</button>}

                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <Link to="/register">Need an account? Register?</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )

};
export default Login;