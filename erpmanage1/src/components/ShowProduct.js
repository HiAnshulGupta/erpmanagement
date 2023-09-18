import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import {getuser} from './Service'
import {useEffect}from 'react';

useEffect(()=>{
  getUserDetails();
})
const getUserDetails=async() =>{
  let response=await getuser();
  console.log(response)
}
const ShowProduct = () => {
  return (
    <Table>

      <TableHead>
        <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>PRUDUCT NAME</TableCell>
        <TableCell>CATEGORY</TableCell>
        <TableCell>HSN/SAC</TableCell>
        <TableCell>OPEN STOCK</TableCell>
        <TableCell>COST PRICE</TableCell>
        <TableCell>FIXED PRICE</TableCell>
        <TableCell>SELLING PRICE</TableCell>
        <TableCell>UNIT MEASURE</TableCell>
        <TableCell>SAFETY STOCK</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>

      </TableBody>

    </Table>
  )
}

export default ShowProduct