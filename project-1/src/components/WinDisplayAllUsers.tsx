import React from 'react';
import User from '../models/User';
import { Form, Table } from 'reactstrap';
import { getAllUsers } from '../api/Employee';


interface IDisplayAllUsersProps {
  history: any;
}

export default class WinDisplayAllUsers extends React.Component <IDisplayAllUsersProps> {


  allUsers : User[] = [];
  handleSubmit = async (event: any) => {
    
    event.preventDefault();

    console.log(event);

    try {
      console.log("1st line in try/display user info");
      this.allUsers = await getAllUsers();
      console.log (this.allUsers);
      
      
    
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
          <h3>Table of All Users</h3> 
          

          <Table responsive>
            <thead>
              <tr>
                {Object.keys(this.allUsers[0]).map((key: any) => {

                  return <th key={key}>{key}</th>;

                })}
              </tr>
            </thead>
            <tbody>
                {this.allUsers.map((obj: any, index: number) => {

                    return <tr key={index}>

                            {Object.values(obj).map((value: any, index: number) => {

                        return <td key={index}>{value}</td>;})}

                    </tr>})}
  
            </tbody>
            <br/> <br/>
            <button onClick={this.props.history.push('/logout')}>
                Log Out
            </button>
            <br/> <br/>
            <button onClick={this.props.history.push('/manager')}>
                Menu Page
            </button>
          </Table>
        </>
      
      )}}