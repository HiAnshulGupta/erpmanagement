import React, { useEffect, useState } from 'react'

import {Link, useNavigate,useParams}from 'react-router-dom'
import ProductServices from '../../Services/ProductServices'

const AddClients = () => {


    const [clientName, setClientName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    
    const [address, setAddress] = useState('')
    

    const {id}=useParams();

    const history=useNavigate();

    const saveClientorUpdate = (e) => {
        e.preventDefault();

        const clientfield = {
            clientName,email,mobileNumber,address
        };
        console.log(clientfield);
        if(id){
            ProductServices.updateClient(id,clientfield).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }else{
            ProductServices.insertClient(clientfield)
        .then((response) =>{
            console.log(response.data)
            history("/client")
        }).catch(err=>{
            console.log(err);
        })
        }
    }

    useEffect(()=>{
        ProductServices.getClientById(id).then((res)=>{
            setClientName(res.data.clientName)
            setMobileNumber(res.data.mobileNumber)
            setEmail(res.data.email)
            setAddress(res.data.address)
            console.log(res);
        }).catch(err=>
        console.log(err))
    },[])

    const title =()=>{

        if(id){
            return <h2 className='text-center'>Update Client</h2>
        }else{
            return <h2 className='text-center'>Add Client</h2>
        }
    }



    return (
        <div>
            <br />
            <div className='conatiner'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 '>
                        {
                            title() 
                        }
                        <br />
                        <div className='card-body'>
                            <form >
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Client Name </label>
                                    <input type='text' name='clientName' value={clientName}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setClientName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Mobile Number </label>
                                    <input type='text' name='mobileNumber' value={mobileNumber}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setMobileNumber(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email</label>
                                    <input type='text' name='email' value={email}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Address</label>
                                    <input type='text' name='address' value={address}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setAddress(e.target.value)}></input>
                                </div>
                                
                                <div>
                                    <button className='btn btn-success' onClick={(e) => saveClientorUpdate(e)}> Submit</button>
                                    <Link to='/client' className='btn btn-danger' style={{marginLeft:'10px'}}>Cancel</Link>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddClients