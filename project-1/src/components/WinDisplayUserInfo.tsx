import React from 'react';
import { getUserById } from '../api/Employee';
import User from '../models/User';
import {Table, Form} from 'reactstrap';

interface IWinDisplayUserInformationProps {
  history: any
  role: string;
  userId: number;
}

export default class WinDisplayUserInfo extends React.Component <IWinDisplayUserInformationProps> {
 
  nextPath() {
    if (this.props.role === 'manager' || this.props.role === 'admin') {
        return "this.props.history.push('/manager')";
  } else if (this.props.role === 'employee') {
        return "this.props.history.push('/employee')";
  }  else {
    return "this.props.history.push('/login')";
  }
  }
  displayingUser : User[] = [];
  handleSubmit = async (event: any) => {
    
    event.preventDefault();

    console.log(event);

    try {
      console.log("1st line in try/display user info");
      this.displayingUser = await getUserById(this.props.userId);
      console.log (this.displayingUser);
      
      
    
    } catch (error) {

      
      
    }
    
  }
    render () {
      return (
        <>
          <Form onSubmit={this.handleSubmit} >
          <input type="number" />
          </Form>
          <br/> <br/>
          <h3>Table of Users</h3> {/*one row*/}
          

          <Table responsive>
            <thead>
              <tr>
                {Object.keys(this.displayingUser[0]).map((key: any) => {

                  return <th key={key}>{key}</th>;

                })}
              </tr>
            </thead>
            <tbody>
                {this.displayingUser.map((user: User, index: any) => {

                    return <tr key={index}>

                {Object.values(user).map((value: any, index: any) => {

                        return <td key={index}>{value}</td>;})}

                    </tr>})}
  
            </tbody>
            <br/> <br/>
            <button onClick={this.props.history.push('/logout')}>
                Log Out
            </button>
            <br/> <br/>
            <button onClick={this.nextPath}>
                Menu Page
            </button>
          </Table>
        </>
      
      )}}
