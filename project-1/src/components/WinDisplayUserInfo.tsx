import React from 'react';
import User from '../models/User';
import { Button, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface IWinDisplayUserInfoProps {
  history: any;
  loggedInUser: User;
}



export default class WinDisplayUserInfo extends React.Component <IWinDisplayUserInfoProps, any> {

    render () {
      return (
        <>
              <h3>Employee ID number: {this.props.loggedInUser.userId}</h3>
              <h3>First Name: {this.props.loggedInUser.firstName}</h3> 
              <h3>Last Name: { this.props.loggedInUser.lastName}</h3> 
              <h3>Username: { this.props.loggedInUser.username}</h3>
              <h3>Password:  { this.props.loggedInUser.password}</h3>
              <h3>Email Address:  { this.props.loggedInUser.email}</h3>
              <h3>finance manager, admin, or employee?  {this.props.loggedInUser.role}</h3>
              
            
            


          
        </>
      
      )}}
