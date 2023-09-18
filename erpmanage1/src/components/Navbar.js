import React from 'react'
import {AppBar,Toolbar,Typography,styled} from '@mui/material'
import './Navbar.CSS'
import {NavLink} from 'react-router-dom'

const Header=styled(AppBar)`
background: #111111;
`
const Navtab=styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`


const Navbar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Navtab  to='/' className=''>coode</Navtab>
            <Navtab to='/all'>allProducts</Navtab>
            <Navtab to='/register'>Add Products</Navtab>
           
        </Toolbar>
    </Header>
  )
}

export default Navbar