import React, { useEffect, useState } from 'react'
;
import { Link } from 'react-router-dom';
import ProductServices from '../../Services/ProductServices';

const AllCLient = () => {
const [client,setClient]=useState([]);

useEffect(()=>{
    getallClient();
},[])

const getallClient=()=>{
    ProductServices.getallClient().then(res=>{
        setClient(res.data)
        console.log(res.data);
    }).catch(err=>{
        console.log(err); 
    })
}

const deleteClient=(clientId)=>{
    console.log(clientId)
    ProductServices.DeleteClient(clientId).then(res=>{
        getallClient();
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })

}

  return (
    <div className='container'>
        <h1 className='text-center'>All Client</h1>
        <Link to="/clients" className='btn btn-primary mb-2'>Add Client</Link>
        <table className='table table-info tablestriped'>
            <thead>
                <tr>
                    <th style={{textAlign:'center',backgroundColor:'gray',color:'whitesmoke' }}>ID</th>
                    <th style={{textAlign:'center' ,backgroundColor:'gray' ,color:'whitesmoke' }}>Client Name</th>
                    <th style={{textAlign:'center',backgroundColor:'gray',color:'whitesmoke'  }}>Mobile Number</th>
                    <th style={{textAlign:'center',backgroundColor:'gray',color:'whitesmoke'  }}>Email/SAC</th>
                    <th style={{textAlign:'center',backgroundColor:'gray',color:'whitesmoke'  }}>Address</th>
                    <th style={{textAlign:'center',backgroundColor:'gray',color:'whitesmoke'  }}>Action</th>
                
                </tr>
               
            </thead>
            <tbody>
                    {
                        client.map(client=>
                            <tr key={client.id}>
                                <td style={{textAlign:'center'}}>{client.id}</td>
                                <td style={{textAlign:'center'}}>{client.clientName}</td>
                                <td style={{textAlign:'center'}}>{client.mobileNumber}</td>
                                <td style={{textAlign:'center'}}>{client.email}</td>
                                <td style={{textAlign:'center'}}>{client.email}</td>
                                
                                <td style={{textAlign:'center',display:'flex'}}>
                                    <Link to={`/client/${client.id}`} className='btn btn-info'>Update</Link>
                                    <button  onClick={()=> deleteClient(client.id)} className='btn btn-danger' style={{marginLeft:'5px'}}>Delete</button>
                                </td>

                            </tr>
                            )
                    }
                </tbody>

        </table>
    </div>
  )
}

export default AllCLient