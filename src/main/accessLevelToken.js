import { useState } from "react";

function useAccessToken(){
    const getToken = ()=>{
        const userToken = localStorage.getItem('access_id');
        return userToken && userToken
    }
    const [accessId, setAccessId] = useState(getToken());

    const saveToken = userToken =>{
        localStorage.setItem('access_id', userToken);
        setAccessId(userToken);
    };


    const removeAccessToken =()=>{
        localStorage.removeItem("access_id");
        setAccessId(null)
    }

    return{
        setAccessId: saveToken,
        accessId,
        removeAccessToken
    }

}

export default useAccessToken;