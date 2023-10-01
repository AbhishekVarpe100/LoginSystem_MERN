import { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const register = { name, email, password };
        axios.post("http://localhost:3000/create", register)
            .then(res => {
                if (res.data == 'success') {

                    setSuccess(<div className='alert alert-primary'>Successfully registered</div>)
                    setTimeout(() => {
                        setSuccess("")
                        setTimeout(() => {
                            navigate('/Login')
                        }, 1000)
                    }, 5000)
                }
            })
            .catch(err => {
                setError(<div className='alert alert-danger'>{err}</div>)
                setTimeout(() => {
                    setError("")
                }, 5000)
            })

    }

    return (
        <><center >
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="w-25 border border-primary p-4">

                {<h1>{success}</h1>}
                {<h1>{error}</h1>}

                <input className='form-control border border-dark' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <br />

                <input className='form-control border border-dark' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />

                <input className='form-control border border-dark' type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <p>Already have account ? <Link to='/login'>login here</Link></p>
                <input className='btn btn-primary' type="submit" value="Register" />
                <br />

            </form>
        </center></>
    )
}

export default Register