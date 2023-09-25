import React, { useState } from 'react';

const InvoiceForm = () => {
    const [formData, setFormData] = useState({
        bill_Date: '',
        due_Date: '',
        amount: 0,
        quantity1: 0,
        quantity2: 0,
        ispending: '',
    });

    const {
        bill_Date,
        due_Date,
        amount,
        quantity1,
        quantity2,
        ispending,
    } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='invoice-title'>
                                <label>Invoice No.</label>
                                <input type='text' placeholder='enter '></input>
                            </div>
                            <div className='mb-4'>
                                <label className='mb-1 text-muted'> ERPanagement</label>
                                <input type='text' placeholder='enter address'></input>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='text-muted'>
                                       <label> Billed To:</label>
                                       <input type='text' placeholder='enter address'></input>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='text-muted text-sm-end'>
                                        {/* ... (Invoice Date and Order Number) */}
                                    </div>
                                </div>
                            </div>
                            <div className='py-2'>
                                <h5 className='font-size-15'>Order Summary</h5>
                                <div className='table-responsive'>
                                    {/* ... (Your table code) */}
                                </div>
                                <div className='d-print-none mt-4'>
                                    <div className='float-end'>
                                        <a href='javascript:window.print()' className='btn btn-success me-1'>
                                            <i className='fa fa-print'></i>
                                        </a>
                                        <a href='#' className='btn btn-primary w-md'>
                                            Send
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceForm;