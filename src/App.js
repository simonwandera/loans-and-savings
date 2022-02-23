
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './main/Home';
import Login from './main/Login';
import React, { useState } from 'react';
// import { AgeProvider } from './ageContext'
import { UserProvider } from './main/userContext'
// import ProtectedRoute from './ProtectedRoute'
import Appliction from './Application';
import useToken from './main/useToken';
import useAccessToken from "./main/accessLevelToken";


// import {useUser, useUserUpdate} from './userContext'

function App(){
  const { token, removeToken, setToken } = useToken();
  const { accessId, setAccessId } = useAccessToken();

 
  
  return (
    
      <div className="App">
        <div>
          <UserProvider>
            <Appliction accessId={accessId} setAccessId={setAccessId} setToken={setToken} token={token}/>
          </UserProvider>
          {/* <>
            <Appliction/>
          </> */}

        </div>
      </div>
    
  );
}


export default App;
