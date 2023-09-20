import React, { useEffect, useState } from 'react'
import ProductServices from '../Services/ProductServices'
import {Link, useNavigate,useParams}from 'react-router-dom'

const AddProduct = () => {

    const [productName, setProductName] = useState('')
    const [category, setCetogry] = useState('')
    const [hsn_Sac, setHSnSAc] = useState('')
    const [openStock, setOpenStock] = useState('')
    const [costPrice, setCostPrice] = useState('')
    const [fixedAsset, setFixedAsset] = useState('')
    const [unitMeasure, setunitMeasure] = useState('')
    const [safetyStock, setsafetyStock] = useState('')

    const {id}=useParams();

    const history=useNavigate();

    const savePeoductorUpdate = (e) => {
        e.preventDefault();

        const productfield = {
            productName, category, hsn_Sac, openStock, costPrice,
            fixedAsset, unitMeasure, safetyStock
        };
        console.log(productfield);
        if(id){
            ProductServices.updateProduct(id,productfield).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }else{
            ProductServices.createProduct(productfield)
        .then((response) =>{
            console.log(response.data)
            history('/')
        }).catch(err=>{
            console.log(err);
        })
        }
    }

    useEffect(()=>{
        ProductServices.getProductById(id).then((res)=>{
            setProductName(res.data.productName)
            setCetogry(res.data.category)
            setHSnSAc(res.data.hsn_Sac)
            setOpenStock(res.data.openStock)
            setCostPrice(res.data.openStock)
            setCostPrice(res.data.costPrice)
            setFixedAsset(res.data.fixedAsset)
            setunitMeasure(res.data.unitMeasure)
            setsafetyStock(res.data.safetyStock)
        }).catch(err=>
        console.log(err))
    },[])

    const title =()=>{

        if(id){
            return <h2 className='text-center'>Update Products</h2>
        }else{
            return <h2 className='text-center'>Add Products</h2>
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
                                    <label className='form-label'>Product Name</label>
                                    <input type='text' name='productName' value={productName}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setProductName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Category </label>
                                    <input type='text' name='category' value={category}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setCetogry(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>HSN/SAC</label>
                                    <input type='text' name='hsn_Sac' value={hsn_Sac}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setHSnSAc(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>OpenStock</label>
                                    <input type='text' name='openStock' value={openStock}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setOpenStock(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cost Price </label>
                                    <input type='text' name='costPrice' value={costPrice}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setCostPrice(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Fixed Asset </label>
                                    <input type='text' name='fixedAsset' value={fixedAsset}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setFixedAsset(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Unit Measure</label>
                                    <input type='text' name='unitMeasure' value={unitMeasure}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setunitMeasure(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Safety Stock</label>
                                    <input type='text' name='safetyStock' value={safetyStock}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setsafetyStock(e.target.value)}></input>
                                </div>
                                <div>
                                    <button className='btn btn-success' onClick={(e) => savePeoductorUpdate(e)}> Submit</button>
                                    <Link to='/' className='btn btn-danger' style={{marginLeft:'10px'}}>Cancel</Link>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddProduct