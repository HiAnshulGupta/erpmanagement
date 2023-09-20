import React, { useEffect, useState } from 'react'
import ProductServices from '../Services/ProductServices'
import {Link, useNavigate,useParams}from 'react-router-dom'

const AddProduct = () => {

    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')
    const [hsn_SAC, setHsnSac] = useState('')
    const [open_stock, setOpenStock] = useState('')
    const [costPrice, setCostPrice] = useState('')
    const [fixed_Assest, setFixedAsset] = useState('')
    const [sellingPrice, setSellingPrice] = useState('')
    const [unit_Measure, setUnitMeasure] = useState('')
    const [safety_Stock, setSafetyStock] = useState('')

    const {id}=useParams();

    const history=useNavigate();

    const savePeoductorUpdate = (e) => {
        e.preventDefault();

        const productfield = {
            productName, category, hsn_SAC, open_stock, costPrice,
            fixed_Assest,sellingPrice, unit_Measure, safety_Stock
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
            setProductName(res.data.ProductName)
            setCategory(res.data.Category)
            setHsnSac(res.data.HSN_SAC)
            setOpenStock(res.data.Open_stock)
            
            setCostPrice(res.data.CostPrice)
            setFixedAsset(res.data.Fixed_Assest)
            setSellingPrice(res.data.SellingPrice)
            setUnitMeasure(res.data.Unit_Measure)
            setSafetyStock(res.data.Unit_Measure)
            console.log(res);
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
                                        onChange={(e) => setCategory(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>HSN/SAC</label>
                                    <input type='text' name='hsn_SAC' value={hsn_SAC}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setHsnSac(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>OpenStock</label>
                                    <input type='text' name='open_stock' value={open_stock}
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
                                    <input type='text' name='fixed_Assest' value={fixed_Assest}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setFixedAsset(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>selling Price  </label>
                                    <input type='text' name='sellingPrice' value={sellingPrice}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setSellingPrice(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Unit Measure</label>
                                    <input type='text' name='unit_Measure' value={unit_Measure}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setUnitMeasure(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Safety Stock</label>
                                    <input type='text' name='safety_Stock' value={safety_Stock}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setSafetyStock(e.target.value)}></input>
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