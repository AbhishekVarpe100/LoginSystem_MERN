import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetData() {

    const [data, setData] = useState([]);
    const allData=()=>{
    useEffect(() => {
        axios.get('http://localhost:3000/getdata')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
}

allData()


    const handleDelete=(id)=>{
        try{

            axios.delete(`http://localhost:3000/delete/${id}`)
            .then(res => console.log(res))
            .catch(err=>console.log(err))
            location.reload()

        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Data from MySQL</h2>
            <ul>
        {data ?data.map((item) => (
            <li key={item.id} className="m-4 border p-2 border-secondary">
              <b>{item.id}</b>
            <div className='text-primary'>Name: {item.name}</div>
            <div className='text-success'>Email: {item.email}</div>
            <div className='text-secondary'>Password: {item.password}</div>
            <button onClick={()=>handleDelete(item.id)} className='btn btn-sm btn-outline-danger'>Delete</button>
          </li>
         
          
        )):<div>No data found</div>}
      </ul>
        </div>
    );
}

export default GetData;
