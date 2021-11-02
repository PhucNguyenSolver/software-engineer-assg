import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const userAccountData = [
    {
        "account": "tienminh0801",
        "password": "0123456789"
    }
]


let accountDataSend = []



export default function Login() {
    const [account, setAccount] = useState('')
    const [pw, setPw] = useState('')



    function handleSubmit(e) {
        e.preventDefault();
        for (let userAccount of userAccountData) {
            if (userAccount.account == account && userAccount.password == pw) {
                // accountDataSend = accountDataSend.concat({
                //     "account": account,
                //     "password": pw
                // }) 
                // console.log(accountDataSend)
                return
            } // send request login
        }
        // e.preventDefault();
        // alert("Tài khoản hoặc mật khẩu không đúng")
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

    return (
        <div>
            <div class="container-md" style={{ width: "350px", paddingTop: "100px" }} >
                <form>
                    <p class="display-5 mb-5 fw-normal text-center">Log in</p>
                    <div class="form-floating mb-2">
                        <input type="account" class="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(event) => setAccount(event.target.value)} />
                        <label for="floatingInput">Account</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="floatingPassword" value={pw}
                            placeholder="Password" onChange={(event) => setPw(event.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {/* {userAccountData.} */}
                    <div class="form-check mx-2 mt-3 mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <a class="float-start" href='#'> Quên mật khẩu </a>
                    <button class="w-50 btn btn-lg btn-success float-end" type="submit" onClick={handleSubmit}>Log in</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}