import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios')



export default function Login() {
    const [account, setAccount] = useState('')
    const [pw, setPw] = useState('')



    function handleSubmit(e) {
        e.preventDefault();
        
        axios.post('http://localhost:8080/login', {
            "account" : account,
            "password": pw
        })
            .then((response) => {
                if (response.data == 'Accept') {
                    localStorage.setItem('isAuthenticated', true)
                    window.location.href = "/manage-order"
                }
                else {
                    toast.error('Mật khẩu hoặc tài khoản không đúng', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }

    return (
        <div>
            <div className="container-md container-xs container-xl text-center" style={{ width: "30%", minWidth: "350px", paddingTop: "200px", paddingBottom: "200px"}} >
                <form method='POST'>
                    <p className="display-5 mb-5 fw-normal text-center ">Log in</p>
                    <div className="form-floating mb-2">
                        <input type="account" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(event) => setAccount(event.target.value)} />
                        <label for="floatingInput">Account</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" value={pw}
                            placeholder="Password" onChange={(event) => setPw(event.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {/* {userAccountData.} */}
                    <div className="form-check mx-2 mt-3 mb-3" style={{ maxWidth: "150px" }}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <a className="float-start wt-5" href='#' style={{marginTop : "8px"}}> Quên mật khẩu </a>
                    <button className="w-50 btn btn-lg btn-primary float-end mb-5" type="submit" onClick={handleSubmit}>Log in</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}