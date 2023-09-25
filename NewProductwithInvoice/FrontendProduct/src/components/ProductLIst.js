import React, { useEffect, useState } from 'react'
import ProductServices from '../Services/ProductServices';
import { Link } from 'react-router-dom';

const ProductLIst = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getallProducts();
    }, [])

    const getallProducts = () => {
        ProductServices.getallProduct().then(res => {
            setProduct(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteProduct = (productid) => {
        console.log(productid)
        ProductServices.DeleteProduct(productid).then(res => {
            getallProducts();
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }

    return (
        <div className='container'>
            <h1 className='text-center'>ProductLIst</h1>
            <div >
                <Link to="/Register" className='btn btn-primary mb-2'style={{marginRight:'52rem'}}>Add Product</Link>
                <Link to="/invoice" className='btn btn-primary mb-2' >Create Invoice</Link>
            </div>
            <table className="table table-success table-striped">

                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>ID</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Product NAme</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Category</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>HSN/SAC</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Open Stock</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Cost Price</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Fixed Assest</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Selling Price</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Unit Measure</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Safety Stock</th>
                        <th style={{ textAlign: 'center', backgroundColor: 'gray', color: 'whitesmoke' }}>Actions</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        product.map(product =>
                            <tr key={product.id}>
                                <td style={{ textAlign: 'center' }}>{product.id}</td>
                                <td style={{ textAlign: 'center' }}>{product.productName}</td>
                                <td style={{ textAlign: 'center' }}>{product.category}</td>
                                <td style={{ textAlign: 'center' }}>{product.hsn_SAC}</td>
                                <td style={{ textAlign: 'center' }}>{product.open_stock}</td>
                                <td style={{ textAlign: 'center' }}>{product.costPrice}</td>
                                <td style={{ textAlign: 'center' }}>{product.fixed_Assest !== null ? product.fixed_Assest.toString() : 'N/A'}</td>
                                <td style={{ textAlign: 'center' }}>{product.sellingPrice}</td>
                                <td style={{ textAlign: 'center' }}>{product.unit_Measure}</td>
                                <td style={{ textAlign: 'center' }}>{product.safety_Stock}</td>
                                <td style={{ textAlign: 'center', display: 'flex' }}>
                                    <Link to={`/${product.id}`} className='btn btn-info'>Update</Link>
                                    <button onClick={() => deleteProduct(product.id)} className='btn btn-danger' style={{ marginLeft: '5px' }}>Delete</button>
                                    <Link to={`/${product.id}`} className='btn table-primary'>Invoice</Link>
                                </td>
                               
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div >
    )
}

export default ProductLIst