import React from "react";

const Navbar = () => {
    return ( 
        
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <div className="text-right">
            <a className="navbar-brand">Home</a>
            <a className="navbar-brand">About</a>
            <a className="navbar-brand">Service</a>
            <a className="navbar-brand">Contact</a>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;