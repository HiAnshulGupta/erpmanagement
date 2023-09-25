import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductServices from '../../../Services/ProductServices';
import { Link } from 'react-router-dom';

const AddInvoice = () => {
    const [formData, setFormData] = useState({
        bill_Date: '',
        due_Date: '',
        ispending: false,
        quantity: 0,
        total_Bill: 0,
        costPrice: 0,
        productID: '',
        client: '',
    });
    const [client, setClient] = useState([]);
    const [selectedClientId, setSelectedClientid] = useState('');
    const [getRowclient, setRowclient] = useState([]);

    const [product, setProduct] = useState([]);
    const [getproductId, setProductId] = useState('');
    const [getRowData, setRowData] = useState([]);

    useEffect(() => {
        getallClient();
    }, [])

    const getallClient = () => {
        ProductServices.getallClient().then(res => {
            setClient(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }



    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: inputValue });
    };


    const handleclient = (e) => {
        const selectedClientId = e.target.value;
        setSelectedClientid(selectedClientId)
    }
    useEffect(() => {
        const clietnrowdata = async () => {
            axios.get(`http://localhost:8080/client/${selectedClientId}`)
                .then(res => {
                    setRowclient(res.data)
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })

        }
        clietnrowdata();
    }, [selectedClientId]);

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = () => {
        ProductServices.getallProduct().then(res => {
            setProduct(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const handleProduct = (e) => {
        const getproductId = e.target.value;
        setProductId(getproductId)
    }

    useEffect(() => {
        const getRowProduct = async () => {
            axios.get(`http://localhost:8080/${getproductId}`)
                .then(res => {
                    setRowData(res.data);
                    console.log(res);
                }).catch(err => {
                    console.log(err)
                })
        }
        getRowProduct();

    }, [getproductId])

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        const invoive={bill_Date: formData.bill_Date,
            due_Date: formData.due_Date,
            ispending: formData.ispending,
            quantity: formData.quantity,
            total_Bill: formData.total_Bill,
            costPrice: formData.costPrice,
            productID: formData.productID, 
            client: formData.client,}
        
        ProductServices.createInvoice(invoive).then(res => {
            console.log(res)
           
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div className='container'>
            <h2 style={{ color: 'red' }}>Create Invoice</h2>
            <br />
            <br />
            <form >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <p>From</p>
                        <p>Purple Product ERP</p>
                        <p>Address: Office no. 615</p>
                        <p> Gandharv Galaxia</p>
                        <p>Magarpatta Road</p>
                        <label>
                            Bill Date:
                            <input
                                type="date"
                                name="bill_Date"
                                value={formData.bill_Date}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                            Due Date:
                            <input
                                type="date"
                                name="due_Date"
                                value={formData.due_Date}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <br />
                    <br />
                    <div >

                        <div>
                            <p>To</p>
                            <label className='form-label'>Client Name</label>
                            <div className='input-group mb-2'>
                                <select name='client' className='form-control p-2' onChange={(e) => handleclient(e)}>
                                    <option value=''> select client</option>
                                    {
                                        client.map((resclient, index) => (
                                            <option key={index} value={resclient.id}>{resclient.clientName}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </div>
                        <div>
                            Mobile Number <input name='mobileNumber' value={getRowclient.mobileNumber} className='form-control p-2'></input>
                        </div>
                        <div>
                            Email<input name='email' value={getRowclient.email} className='form-control p-2'></input>
                        </div>
                        <div>
                            Adress<input name='address' value={getRowclient.address} className='form-control p-2'></input>
                        </div>
                    </div>
                </div>

                <table className="table table-secondary tablestriped" >
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Cost Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>IsPending</th>
                        </tr>
                    </thead>
                    <tbody className="table table-primary tablestriped" >
                        <tr style={{ height: '5px' }}>
                            <td>
                                <label className='form-label'> </label>
                                <div className='input-group mb-2'>
                                    <select name='product' className='form-control ' onChange={(e) => handleProduct(e)}>
                                        <option value=''> select Product</option>
                                        {
                                            product.map((resproduct, index) => (
                                                <option key={index} value={resproduct.id}>{resproduct.productName}</option>
                                            ))
                                        }

                                    </select>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <input name='costPrice' value={getRowData.costPrice} className='form-control '></input>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <input type='number' name='quantity' value={formData.quantity}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setFormData(e.target.value)}></input>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <input type='number' name='total_Bill' value={parseInt(formData.quantity) * parseInt(getRowData.costPrice)}
                                        placeholder='wirte here' className='form-control '
                                        onChange={(e) => setFormData(e.target.value)} readOnly></input>
                                </div>
                            </td>
                            <td>

                                <select name='ispending'
                                    value={formData.ispending}
                                    onChange={handleInputChange}>

                                    <option name='ispending' value={true}>Yes</option>
                                    <option name='ispending' value={false}>No</option>

                                </select>

                            </td>
                        </tr>




                    </tbody>
                </table>
                <div>
                    <button className='btn btn-success' onClick={(e) => handleSubmit(e)}> Submit</button>
                    <Link to='/details' className='btn btn-danger' style={{ marginLeft: '10px' }}>Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default AddInvoice;