import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { HiSearch } from "react-icons/hi";


const Navbar = () => {
    const [menuopent, setMOpen] = useState(false);

    const toggleMenu = () => {
        setMOpen(!menuopent);
    }

    return (
        <div>
            <nav >
                <Link to="/details" className='title' style={{ color: 'red' }}> ProductERP</Link>
                {/* <div className='menu' onClick={() => {
                    setMOpen(!menuopent)
                }}> */}
                <div className='menu' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>

                </div >
                <div className='search-bar'>
                    <input type='text' className='searchtext' placeholder='Type to Search...' />
                    <a href='#' className='searchbtn'>
                        <HiSearch /></a>
                </div>
                {/* <ul className={menuopent ? "open" : ''}> */}
                <ul className={`menu-items ${menuopent ? 'open' : ''}`} style={{marginBottom:'0px'}}>
                    {/* <li>
                        <NavLink to="/details" > All Product</NavLink>
                    </li>

                    <li>
                        <NavLink to="/register" > Add Products</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/invoice" > Add Invoice</NavLink>
                    </li>

                    <li style={{marginRight:'5px'}}>
                        <select
                            id="pageDropdown" style={{ backgroundColor: '#0f172a', color:'white' }}
                            onChange={(event) => {
                                const selectedPage = event.target.value;
                                if (selectedPage !== '') {
                                    window.location.href = selectedPage;
                                }
                            }}
                        >
                            <option value="">Client</option>
                            <option value="/client">All Client</option>
                            <option value="/clients">Add Client</option>
                        </select>
                    </li >

                    <li >
                        <select
                            id="pageDropdown" style={{ backgroundColor: '#0f172a',color:'white',marginRight:'5px' }}
                            onChange={(event) => {
                                const selectedPage = event.target.value;
                                if (selectedPage !== '') {
                                    window.location.href = selectedPage;
                                }
                            }}
                        >
                            <option value="">Product</option>
                            <option value="/details">All Product</option>
                            <option value="/register">Add Products</option>
                        </select>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar