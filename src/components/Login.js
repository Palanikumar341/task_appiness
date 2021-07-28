import React , { Fragment, useState }from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {login} from '../Redux/actions/userActions'

const Login = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleValidation = () => {
        let error = {};
        let formIsValid = true;

        //password
        
        if (password && password.length < 9) {
            formIsValid = false;
            error["password"] = "password must be 9 letter";
        }
        let regExp = /[0-9]/
        if (!regExp.test(password)) {
            formIsValid = false;
            error["password"] = "password must contain at least one digit.";
        }
        if (!password) {
            formIsValid = false;
            error["password"] = "password Cannot be empty";
        }

        //Email
        if (!email) {
            formIsValid = false;
            error["email"] = "Email Cannot be empty";
        }

        if (email && email.length) {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                error["email"] = "Email is not valid";
            }
        }
        setErrors(error);
        return formIsValid;
    }

    let submitLogin = (e) => {
        e.preventDefault();
        if(handleValidation()){    
           if(localStorage.userData && localStorage.userData.length){
               dispatch(login(email,password,history))
           }
        else{
            // todo alert
        }
    }
    }
    return (
        <Fragment>
            {/* <pre>{JSON.stringify(email)}</pre>
            <pre>{JSON.stringify(password)}</pre> */}
             <div className="container mt-5">
            <div className="row justify-content-center">
             <div className="col-md-4 m-auto">
                <div className="card ">
                <div className="card-header bg-dark text-brown">
                                    <p className="h3">Login </p>
                                </div>
                    <div className="card-body bg-form-light">
                        <form onSubmit={submitLogin}>
                        <div className="mb-3">
                          <input type="email"
                          name="email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)} onKeyUp={handleValidation}
                          className="form-control"  placeholder="Email" />
                          <span style={{ color: "red" }}>{errors.email}</span>
                        </div>
                        <div className="mb-3">
                          <input type="password"
                          name="password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)} onKeyUp={handleValidation}
                          className="form-control"  placeholder="Password"  />
                          <span style={{ color: "red" }}>{errors.password}</span>
                        </div>
                        <div className="">
                          <input type="submit" value="Login" className="btn btn-dark btn-sm text-brown" />
                        </div>
                        </form>
                    </div>
                </div>
             </div>
            </div>
            
        </div>
        </Fragment>
    )
}

export default Login
