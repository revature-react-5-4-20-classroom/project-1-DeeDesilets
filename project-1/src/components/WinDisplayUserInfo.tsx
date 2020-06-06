import React from 'react';
import { getUserById } from '../api/Employee';
import User from '../models/User';


interface IWinDisplayUserInformationProps {
  history: any;
  loggedInUser: User;
}

export default class WinDisplayUserInfo extends React.Component <IWinDisplayUserInformationProps, any> {
 
  let displayingUser: User = null;
  handleSubmit = async (event: any) => {
    
    event.preventDefault();

    
    
    try {
      
     this. displayingUser = await getUserById(this.props.loggedInUser.userId);
     
    } catch (error) {
    
      
    }
  }


    render () {
      return (
        <>
          
          <br/> <br/>
        <h3>{this.displayingUser.firstName} {this.displayingUser.lastName}</h3> 
          

          
        </>
      
      )}}
