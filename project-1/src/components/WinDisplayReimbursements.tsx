import React from 'react';
import { getReimbursementsByAUID } from '../api/Employee';
import {Table, Form} from 'reactstrap';
import Reimbursement from '../models/Reimbursement';

interface IWinDisplayReimbursementsProps {
  history: any
  role: string;
  userId: number;
}

export default class WinDisplayReimbursements extends React.Component <IWinDisplayReimbursementsProps> {
 
  nextPath() {
    if (this.props.role === 'manager' || this.props.role === 'admin') {
        return "this.props.history.push('/manager')";
  } else if (this.props.role === 'employee') {
        return "this.props.history.push('/employee')";
  }  else {
    return "this.props.history.push('/login')";
  }
  }



usersReimbursements : Reimbursement[] = [];
  handleSubmit = async (event: any) => {
    
    event.preventDefault();

    console.log(event);

    try {
      console.log("1st line in try/display user info");
      this.usersReimbursements = await getReimbursementsByAUID(this.props.userId);
      console.log (this.usersReimbursements);
      
      
    
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
                {Object.keys(this.usersReimbursements[0]).map((key: any) => {

                  return <th key={key}>{key}</th>;

                })}
              </tr>
            </thead>
            <tbody>
                {this.usersReimbursements.map((obj: any, index: number) => {

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
            <button onClick={this.nextPath}>
                Menu Page
            </button>
          </Table>
        </>
      
      )}}




