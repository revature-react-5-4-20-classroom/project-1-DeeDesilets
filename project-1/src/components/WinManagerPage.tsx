import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import User from '../models/User';



export default class WinManagerPage extends React.Component {

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
                        <Route path='/allusers'>
                            <NavLink to="/allusers" >
                                <button type="button">
                                    View all users
                                </button>
                            </NavLink>
                        </Route>
                        <Route path='/allreimbs'>
                            <NavLink to="/allreimbs" >
                                <button type="button">
                                    View all reimbursements
                                </button>
                            </NavLink>
                        </Route>
                        <Route path='/logout'>
                            <NavLink to="/reimbursements" >
                                <button type="button">
                                    Log out
                                </button>
                            </NavLink>
                        </Route>
                   </Switch>
                </Router>
            </div>
        );
    }
}