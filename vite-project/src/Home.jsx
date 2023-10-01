import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div><center>
            <Link to="/login" className='btn btn-info'>Logout</Link>
        <h1>Welcome to home component logged in successfully</h1></center></div>
    )
}
