import React from 'react';
import User from '../models/User';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import {updateReimbursements} from '../api/Employee1';
import { toast } from 'react-toastify';

interface IWinUpdateReimbursementsProps {
    history: any;
    loggedInUser: User;
}
interface IWinUpdateReimbursementState {

    reimbursementId: number;

    status: number;
    
    dateResolved: number;
    
    resolver: number;
}


export default class WinUpdateReimbursements extends React.Component <IWinUpdateReimbursementsProps,IWinUpdateReimbursementState  > {

    constructor(props: IWinUpdateReimbursementsProps ) {

        super(props);

        this.state = {

            reimbursementId: 0,

            status: 3,
    
            dateResolved: -999999,
            
            resolver: -99,
        }

    }

    setStatus = (changeEvent: any) => {



        this.setState({
    
    
    
          status: parseInt(changeEvent.currentTarget.value, 10),
    
    
    
        });
    
    
    
      };
      setResolver = (changeEvent: any) => {



        this.setState({
    
    
    
          resolver: parseInt(changeEvent.currentTarget.value, 10),
    
    
    
        });
    
    
    
      };
    
      setReimbursementId = (changeEvent: any) => {
  
  
  
        
          this.setState ({
            
            reimbursementId: parseInt(changeEvent.currentTarget.value, 10),
    
    
    
        });
    
      };
    
    
     
      setDateResolved = (changeEvent: any) => {
  
  
  
        this.setState({
    
    
    
          dateResolved: parseInt(changeEvent.currentTarget.value, 10),
    
    
    
        });
    
    
    
      };
    
      clearForm = () => {

        this.setState({
  
            reimbursementId: 0,
  
            status: 3,
  
            dateResolved: -999999,
            
            resolver: -99,
  
            
        })
  
    }
    
    async updateAReimbursement(submitEvent: any)  {

        console.log("hi from winupdreimbursement before try");
                try {
        console.log("from inside try on winupdreimb");
        console.log(`${this.state.reimbursementId}, ${this.state.resolver}, ${this.state.dateResolved}, and ${this.state.status}`)
                    const response = await updateReimbursements(this.state.reimbursementId, this.state.dateResolved, this.state.resolver, this.state.status);
        console.log(response.reimbursementId);
                    if (response) {
                    toast(`${response.reimbursementId} for ${response.amount} added successfully!`, {type: "success"});
        
                    
        
                    this.clearForm();
        
                }} catch (e) {
        console.log("hi from inside catch on winupdreimb");
                    toast(e.message, {type:"error"});
        
                }
        
            }
        
         
    
    
    
      
  






    render() {

        return (

            <Form onSubmit={this.updateAReimbursement}>

<FormGroup>

<Label for="reimbursementId">Reimbursement ID#</Label>

  <Input

    onChange={this.setReimbursementId}

    value={this.state.reimbursementId}

    type="text"

    name="reimbursementId"

    id="reimbursementId"
    required

  />       
              
              </FormGroup>

              <FormGroup>

              <Label for="dateResolved">Today's Date (yymmdd)</Label>

                <Input

                  onChange={this.setDateResolved}

                  value={this.state.dateResolved}

                  type="text"

                  name="dateResolved"

                  id="dateResolved"
                  
                  placeholder="yymmdd"

                  required

                />

              </FormGroup>


              <FormGroup>

              <Label for="resolver">Resolver</Label>

                <Input

                  onChange={this.setResolver}

                  value={this.state.resolver}

                  type="text"

                  name="resolver"

                  id="resolver"
                  required

                />

              </FormGroup>

<FormGroup>

<Label for="status">Status</Label>

  <Input

    onChange={this.setStatus}

    value={this.state.status}

    type="text"

    name="status"

    id="status"

    required

  />

</FormGroup>



              

              

             

              

              <Button type="submit">Submit Reimbursement</Button>

              

            </Form>

        );

    }

}