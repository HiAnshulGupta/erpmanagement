import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponents = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <Link to="/">ProductERP</Link>
                </div>

            </nav>
        </header>
    </div>
  )
}

export default HeaderComponents