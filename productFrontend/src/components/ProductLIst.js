import React, { useEffect, useState } from 'react'
import ProductServices from '../Services/ProductServices';
import { Link } from 'react-router-dom';

const ProductLIst = () => {
const [product,setProduct]=useState([]);

useEffect(()=>{
   getallProducts();
},[])

const getallProducts=()=>{
    ProductServices.getallProduct().then(res=>{
        setProduct(res.data)
        console.log(res.data);
    }).catch(err=>{
        console.log(err); 
    })
}

const deleteProduct=(productid)=>{
    console.log(productid)
    ProductServices.DeleteProduct(productid).then(res=>{
        getallProducts();
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })

}

  return (
    <div className='container'>
        <h1 className='text-center'>ProductLIst</h1>
        <Link to="/Register" className='btn btn-primary mb-2'>Add Product</Link>
        <table className='table table-bordered tablestriped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product NAme</th>
                    <th>Category</th>
                    <th>HSN/SAC</th>
                    <th>Open Stock</th>
                    <th>Cost Price</th>
                    <th>Fixed Assest</th>
                    <th>Selling Price</th>
                    <th>Unit Measure</th>
                    <th>Safety Stock</th>
                    <th>Actions</th>

                </tr>
               
            </thead>
            <tbody>
                    {
                        product.map(product=>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.category}</td>
                                <td>{product.hsn_SAC}</td>
                                <td>{product.open_stock}</td>
                                <td>{product.costPrice}</td>
                                <td>{product.fixed_Assest}</td>
                                <td>{product.sellingPrice}</td>
                                <td>{product.unit_Measure}</td>
                                <td>{product.safety_Stock}</td>
                                <td>
                                    <Link to={`/${product.id}`} className='btn btn-info'>Update</Link>
                                    <button  onClick={()=> deleteProduct(product.id)} className='btn btn-danger' style={{marginLeft:'12px'}}>Delete</button>
                                </td>

                            </tr>
                            )
                    }
                </tbody>

        </table>
    </div>
  )
}

export default ProductLIst