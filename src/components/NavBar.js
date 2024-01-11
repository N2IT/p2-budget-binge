import React from 'react';
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >Home
            </NavLink>
            <NavLink
                to="/transactions"
                className="nav-link"
            >Transactions
            </NavLink>
            <NavLink
                to="/add-transactions"
                className="nav-link"
            >Add Transactions
            </NavLink>
        </nav >
    )
}

export default Navbar;
