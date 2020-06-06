import React from 'react';
import User from '../models/User';
import { NavItem, Nav, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface IWinEmployeePageProps {loggedInUser: User; logoutUser: ()=>void; history: any}

export default class WinEmployeePage extends React.Component <IWinEmployeePageProps, any> {
    
  render () {
    return (
      <>
        <p>Hello, {this.props.loggedInUser.firstName}.  Welcome back.</p>   
        <p> What would you like to start with today? </p>
        <br/>

        <Nav tabs>
          <NavItem>

            <NavLink  to="/submit" className="nav-link" activeClassName="active">Submit a Reimbursement</NavLink>

          </NavItem>

          <NavItem>

            <NavLink  to="/user" className="nav-link" activeClassName="active">View your own employee profile</NavLink>

          </NavItem>   

          <NavItem>
        
            <NavLink  to="/reimbursements" className="nav-link" activeClassName="active">View your own reimbursements</NavLink>

          </NavItem>

        </Nav>

    </>
  );

}

}