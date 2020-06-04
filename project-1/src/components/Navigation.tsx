import React from 'react';

import { Nav, NavItem, Button } from 'reactstrap';

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

                    <NavLink to="/books" className="nav-link" activeClassName="active">Available Books</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink hidden={!!this.props.loggedInUser} to="/login" className="nav-link" activeClassName="active">Login</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink hidden={!(this.props.loggedInUser && this.props.loggedInUser.role === 'Admin')} to="/users" className="nav-link" activeClassName="active">All Users</NavLink>

                </NavItem>

                <NavItem tag={()=>{return <Button  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />

                    

            </Nav>

        );

    }

}