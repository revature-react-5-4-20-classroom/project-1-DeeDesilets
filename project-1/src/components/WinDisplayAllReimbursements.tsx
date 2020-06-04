import React from 'react';
import { Form, Table } from 'reactstrap';
import { getAllReimbursements } from '../api/Employee';
import Reimbursement from '../models/Reimbursement';


interface IDisplayAllReimbursementsProps {
  history: any;
}

export default class WinDisplayAllReimbursements extends React.Component <IDisplayAllReimbursementsProps> {


  allReimbursements : Reimbursement[] = [];
  handleSubmit = async (event: any) => {
    
    event.preventDefault();

    console.log(event);

    try {
      console.log("1st line in try/display user info");
      this.allReimbursements = await getAllReimbursements();
      console.log (this.allReimbursements);
      
      
    
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
          <h3>Table of All Reimbursements</h3> 
          

          <Table responsive>
            <thead>
              <tr>
                {Object.keys(this.allReimbursements[0]).map((key: any) => {

                  return <th key={key}>{key}</th>;

                })}
              </tr>
            </thead>
            <tbody>
                {this.allReimbursements.map((obj: any, index: number) => {

                    return <tr key={index}>

                            {Object.values(obj).map((value: any, index: number) => {

                        return <td key={index}>{value}</td>;})}

                    </tr>})}
            </tbody>
            <br/> <br/>        
           <button onClick={() => this.props.history.push('/logout')}>
                              Log Out
                           </button>
                                     
                    
         
                   
                   <button onClick={this.props.history.push('/manager')}>
                             Menu Page
                           </button>
          </Table>  
        </>
      );
    }
}
