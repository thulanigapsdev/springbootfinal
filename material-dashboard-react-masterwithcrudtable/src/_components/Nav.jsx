import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home } from '../home/Index';
import { Users } from '../users/Index';

//admin/table
function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/admin/table" className="nav-item nav-link"component={Home}>Home</NavLink>
                <NavLink to="/admin/table/users" className="nav-item nav-link"component={Users}>Users</NavLink>
            </div>
        </nav>
    );
}

export { Nav }; 