import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

export default class WinEmployeePage extends React.Component  {

    render () {
        return (
            <div>
                 <p> What would you like to start with today? </p>
               <Router>
                    <Switch>
                        <Route path='/submit'>
                            <NavLink to="/submit" >
                                <button type="button">
                                    Submit a new reimbursement
                                </button>
                            </NavLink>
                        </Route>
                        <Route path='/viewuser'>
                            <NavLink to="/viewuser" >
                                <button type="button">
                                    View your own user information
                                </button>
                            </NavLink>
                        </Route>
                            
                        <Route path='/viewreimbs'>
                           <NavLink to="/viewreimbs" >
                                <button type="button">
                                    View all your reimbursements
                                </button>
                            </NavLink>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}