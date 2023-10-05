import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'



export default function Navbar() {



    return (
        <div className='d-flex m-4'>
            <h2><Link to='/login' className='m-2 btn btn-secondary'>Login</Link></h2>
            <h2><Link to='/register' className='m-2 btn btn-secondary'>Register</Link></h2>
            <h2><Link to='/home'></Link></h2>
            <h2><Link to='/getdata' className='m-2 btn btn-secondary'>See Data</Link></h2>
        </div>
    )
}
