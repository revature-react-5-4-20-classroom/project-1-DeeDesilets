import React from 'react';

import { Nav, NavItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import  User  from '../models/User';



interface NavigationProps {

    logoutUser: ()=>void;

    loggedInUser: User | null

}



export default class Navigation extends React.Component<NavigationProps> {

    render() {

        return (
    

            <Nav tabs>

                <NavItem>

                    <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink hidden={!(this.props.loggedInUser )} to="/employee" className="nav-link" activeClassName="active">Employees Menu</NavLink>

                </NavItem>

                

                <NavItem>

                    <NavLink hidden={!(this.props.loggedInUser && (this.props.loggedInUser.role === 'admin' || this.props.loggedInUser.role === 'finance manager'))} to="/managers" className="nav-link" activeClassName="active">Managers Menu</NavLink>

                </NavItem>


                <NavItem>

                    <NavLink hidden={!!this.props.loggedInUser} to="/login" className="nav-link" activeClassName="active">Login</NavLink>

                </NavItem>

                
                <NavItem>

                    <NavLink hidden={!this.props.loggedInUser} to="/logout" className="nav-link" activeClassName="active">Logout</NavLink>

                </NavItem>

                    

            </Nav>
      

        );

    }

}