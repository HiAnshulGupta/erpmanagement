import React, { useState } from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography ,Button,styled} from '@mui/material';
import {Addprod} from './Service'

const Container=styled(FormGroup)`
  width: 50%;
  margin:  5% auto 0 auto;
`

const AddProduct = () => {
  const [product,setProduct]= useState({
    productName:'',
    category:'',
    hsn_SAC:'',
    open_stock:'',
    costPrice:'',
    fixed_Assest:'',
    sellingPrice:'',
    unit_Measure:'',
    safety_Stock:'',

  })

  const onValueChange =(e) =>{
    setProduct({...product, [e.target.name]: e.target.value,
       
    })
  
  }

  const addproductDeatils= async()=>{
    // console.log(product)
    await Addprod(product);
  }

  return (
    <div>
      <Typography variant='h5'>AddProduct</Typography>
        <Container> 
            <FormControl>
            <FormControl>
                <InputLabel>Product Name</InputLabel>
                <Input name='productName' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>Category</InputLabel>
                <Input name='category' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>HSN/SAC</InputLabel>
                <Input name='hsn_SAC' onChange={(e)=>onValueChange(e)} />
                </FormControl>
                <FormControl>
                <InputLabel>Open Stock </InputLabel>
                <Input name='open_stock' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>Cost Price </InputLabel>
                <Input name='costPrice' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>Fixed Assest</InputLabel>
                <Input name='fixed_Assest' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>Selling Price</InputLabel>
                <Input name='sellingPrice' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>Unit Measure</InputLabel>
                <Input name='unit_Measure' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                <InputLabel>Safety Stock </InputLabel>
                <Input name='safety_Stock' onChange={(e)=>onValueChange(e)}/>
                </FormControl>
                <FormControl>
                  <Button variant='contained' onClick={()=>addproductDeatils()}>Register</Button>
                </FormControl>
            </FormControl>
        </Container>
    </div>
  )
}

export default AddProduct