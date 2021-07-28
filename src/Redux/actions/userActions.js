import axios from 'axios';

import {
 LOGIN_REQUEST ,
 LOGIN_SUCCESS ,
 LOGIN_FAIL ,

 FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
FETCH_USER_FAILURE


} from  '../Constants/userConstants'

export const login = (email, password,history) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        let userData = JSON.parse(localStorage.userData);
        if(userData.username === email && userData.password === password){
            let obj = {
                email,
                password
            }
            localStorage.setItem("loginData",JSON.stringify(obj))
            alert("LogIn Successfull.. ") 
                       dispatch({
                type: LOGIN_SUCCESS
            })
            setTimeout(()=>{
                history.push("/dashboard")
            },500)
        }else{
            alert('Invalid Username Or Password', 'danger')
        }
       
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type : FETCH_USER_REQUEST});
        let dataURL = `https://gist.githubusercontent.com/Palanikumar341/d9bc2b4c10aaa8b9a4729d8b3df1a642/raw/f8c3730a0d332ec11289b07ae9d79721d98f9168/gistfile1.txt`;
        axios.get(dataURL).then((response) => {
            dispatch({
                type : FETCH_USER_SUCCESS,
                payload : {
                    users : response.data
                }});
        }).catch((error) => {
            dispatch({
                type : FETCH_USER_FAILURE,
                payload : {
                    error : error.message
                }});
        });
    };
};