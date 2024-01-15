import React from 'react';
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function Navbar() {
    return (
        <>
            <img className="App-logo" src={"/piggyBank.png"}></img>
            <nav>
                <NavLink
                    to="/"
                    className="nav-link"
                >Home
                </NavLink>
                <NavLink
                    to="/transaction-list"
                    className="nav-link"
                >Transactions
                </NavLink>
                <NavLink
                    to="/add-transactions"
                    className="nav-link"
                >Add Transactions
                </NavLink>
            </nav >
        </>
    )
}

export default Navbar;
