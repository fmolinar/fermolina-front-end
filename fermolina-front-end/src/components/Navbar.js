import React from "react";
import { Link, NavLink} from 'react-router-dom'
import ModalLogIn from "./Modal";

const Navbar = () => {
    return (
        <nav className="ui raised very padded segment">
            <Link className="ui teal inverted segment" >
                FMR HUB
            </Link>
            <div className="ui right floated header">
                <button className="ui button">
                    <NavLink to="/">Home</NavLink>
                </button>
                <button className="ui button">
                    <NavLink to="/about">About</NavLink>
                </button>
                <button className="ui button">
                    <NavLink to="/contact">Contact</NavLink>
                </button>
                <ModalLogIn/>
            </div>

        </nav>
    )
}

export default Navbar