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
                    }, 4000)
                }
                else if (res.data == 'fail') {
                    setFailure(<div className='alert alert-danger'>Login failed...User Not found</div>);
                    setTimeout(() => {
                        setFailure("")
                    }, 5000)
                }
            })
            .catch(err => {
                alert(err)
            })

    }
    return (
        <div>
            <center>
                <h1>Login</h1>
                <form onSubmit={handleLogin} className="w-25 border border-primary p-4">
                    <div>{success}</div>
                    <div>{failure}</div>
                    <input className='form-control border border-dark' type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} /><br /><br />
                    <input className='form-control border border-dark' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
                    <p>Not have account ? <Link to='/register'>create account</Link></p>
                    <input className='btn btn-primary' value="Login" type="submit" />
                </form>
            </center>

        </div>
    )
}
