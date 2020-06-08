import React from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


import { submitReimbursements } from '../api/Employee1';

import { toast } from 'react-toastify';
import Reimbursement from '../models/Reimbursement';






interface IWinNewReimbursementState {

    author: number;
    amount: number;
    dateSubmitted: number;
    description: string;
    type: number;
}



export default class IWinNewReimbursement extends React.Component<any, IWinNewReimbursementState> {

    constructor(props: any ) {

        super(props);

        this.state = {

            author: 0,

            amount: 0,

            dateSubmitted: -999999,
            
            description: " ",

            type: 0

        }

    }

    setAmount = (changeEvent: any) => {



      this.setState({
  
  
  
        amount: parseInt(changeEvent.currentTarget.value, 10),
  
  
  
      });
  
  
  
    };
  
  
  
  
  
  
  
    setAuthor = (changeEvent: any) => {
  
  
  
      this.setState({
  
  
  
        author: parseInt(changeEvent.currentTarget.value, 10),
  
  
  
      });
  
  
  
    };
  
    setDateSubmitted = (changeEvent: any) => {



      this.setState({
  
  
  
        dateSubmitted: parseInt(changeEvent.currentTarget.value, 10),
  
  
  
      });
  
  
  
    };
  
  
  
  
  
  
  
    setDescription = (changeEvent: any) => {
  
  
  
      this.setState({
  
  
  
        description: changeEvent.currentTarget.value,
  
  
  
      });
  
  
  
    };

    setType = (changeEvent: any) => {
  
  
  
      this.setState({
  
  
  
        type: parseInt(changeEvent.currentTarget.value, 10),
  
  
  
      });
  
  
  
    };

    clearForm = () => {

      this.setState({

          author: 0,

          amount: 0,

          dateSubmitted: -999999,
          
          description: " ",

          type: 0
      })

  }



    submitReimbursements = async (submitEvent: any) => {
console.log(submitEvent);
      submitEvent.preventDefault();


        try {
          console.log(`${this.state.author} and ${this.state.amount} and ${this.state.dateSubmitted} and ${this.state.description} and ${this.state.type}`);
            const response : any = await submitReimbursements(this.state.author, this.state.amount, this.state.dateSubmitted, this.state.description, this.state.type);

            if (response) {

            toast(`New reimbursement added successfully!`, {type: "success"});

            

            this.clearForm();

        }} catch (e) {

            toast(e.message, {type:"error"});

        }

    }



    



    



    render() {

        return (

            <Form onSubmit={this.submitReimbursements}>

<FormGroup>

<Label for="author">Author</Label>

  <Input

    onChange={this.setAuthor}

    value={this.state.author}

    type="text"

    name="author"

    id="author"

    required

  />

</FormGroup>


              
              <FormGroup>

              <Label for="amount">Amount</Label>

                <Input

                  onChange={this.setAmount}

                  value={this.state.amount}

                  type="text"

                  name="amount"

                  id="amount"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="dateSubmitted">Today's Date (yymmdd)</Label>

                <Input

                  onChange={this.setDateSubmitted}

                  value={this.state.dateSubmitted}

                  type="text"

                  name="dateSubmitted"

                  id="dateSubmitted"
                  
                  placeholder="yymmdd"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="description">Description</Label>

                <Input

                  onChange={this.setDescription}

                  value={this.state.description}

                  type="text"

                  name="description"

                  id="description"
                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="type">Type of Expense</Label>

                <Input

                  onChange={this.setType}

                  value={this.state.type}

                  type="text"

                  name="type"

                  id="type"
                  required

                />

              </FormGroup>

              <Button type="submit">Submit New Reimbursement</Button>

              <label>Upload a file image of receipt here</label>

              <input  type="file" name="receipt"  id="receipt" ></input>

            </Form>

        );

    }

}


