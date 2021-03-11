import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Nav, Alert } from '../_components';
import { Home } from '../home/Index';
import { Users } from '../users/Index';

function App() {
    const { pathname } = useLocation();  

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Switch>
                
                    <Route exact path="/usrnav" component={Home} />
                    <Route exact path="/usernav/users" component={Users} />
                  
                </Switch>
            </div>
        </div>
    );
}

export { App }; 
{/*
<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
 <Redirect from="*" to="/" />
*/}