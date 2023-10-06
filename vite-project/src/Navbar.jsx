import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'



export default function Navbar() {



    return (
        <div className='d-flex m-4'>
            <h2><Link to='/login'></Link></h2>
            <h2><Link to='/register' className='m-2 btn btn-secondary'>Register / Login</Link></h2>
            <h2><Link to='/home'></Link></h2>
            <h2><Link to='/getdata' className='m-2 btn btn-secondary'>See Users</Link></h2>
        </div>
    )
}
