import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'



export default function Navbar() {



    return (
        <div>
            <h2><Link to='/login'>Login</Link></h2>
            <h2><Link to='/register'>Register</Link></h2>
            <h2><Link to='/home'></Link></h2>
            <h2><Link to='/getdata'>See Data</Link></h2>
        </div>
    )
}
