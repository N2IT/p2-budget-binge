import React from 'react';
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function Navbar() {
    return (
        <>
            <div class="title-bar"><span class="test">Budget</span><img className="App-logo" src={"/fistFull.png"}></img><span class="test">Binge</span></div>
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
