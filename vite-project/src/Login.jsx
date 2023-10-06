import React, { useState } from 'react'
import axios from 'axios'
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('')
    const [failure, setFailure] = useState('')
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        const login = { name, password };
        axios.post("http://localhost:3000/login", login)
            .then(res => {
                if (res.data == 'success') {
                    setSuccess(<div className='alert alert-success'>Login successful...Redirecting to home</div>);
                    setTimeout(() => {
                        setSuccess("")
                        setTimeout(() => {
                            navigate('/Home')
                        }, 500)
                    }, 2000)
                }
                else if (res.data == 'fail') {
                    setFailure(<div className='alert alert-danger'>Login failed...User Not found</div>);
                    setTimeout(() => {
                        setFailure("")
                    }, 3000)
                }
            })
            .catch(err => {
                alert(err)
            })

    }
    return (
        <div>
            <center className='login_class'>
                <h1 className='bg-primary text-white p-4 m-4'>Login</h1>
                <form onSubmit={handleLogin} className="w-25 border form_class p-4">
                    <div>{success}</div>
                    <div>{failure}</div>
                    <input className='form-control' required type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} /><br /><br />
                    <input className='form-control' required type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
                    <p>Not have account ? <Link to='/register'>create account</Link></p>
                    <input className='btn btn-primary' value="Login" type="submit" />
                </form>
            </center>

        </div>
    )
}
