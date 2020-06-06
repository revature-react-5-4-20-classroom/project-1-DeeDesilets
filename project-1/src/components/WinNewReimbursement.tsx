import React from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { submitReimbursements } from '../api/Employee';

import { toast } from 'react-toastify';



interface IWinNewReimbursementProps {

    addReimbursement: ()=>void

}



interface IWinNewReimbursementState {

    author: number;
    amount: number;
    dateSubmitted: number;
    description: string;
    type: number;
}



export default class IWinNewReimbursement extends React.Component<IWinNewReimbursementProps, IWinNewReimbursementState> {

    constructor(props: any) {

        super(props);

        this.state = {

            author: 0,

            amount: 0,

            dateSubmitted: -999999,
            
            description: " ",

            type: 0

        }

    }



    submitReimbursement = async (submitEvent: any) => {

        submitEvent.preventDefault();

        try {

            const submittedReimbursement = await submitReimbursements(this.state.author, this.state.amount, this.state.dateSubmitted, this.state.description, this.state.type);

            toast(`${submittedReimbursement.reimbursementId} for ${submittedReimbursement.amount} added successfully!`, {type: "success"});

            this.props.addReimbursement()

            this.clearForm();

        } catch (e) {

            toast(e.message, {type:"error"});

        }

    }



    clearForm = () => {

        this.setState({

            author: 0,

            amount: 0,

            dateSubmitted: -999999,
            
            description: " ",

            type: 0
        })

    }



    bindInputChangeToState = (changeEvent:any) => {

        

        this.setState({author : changeEvent.currentTarget.value, amount : changeEvent.currentTarget.value, dateSubmitted : changeEvent.currentTarget.value, description : changeEvent.currentTarget.value, type : changeEvent.currentTarget.value })

    }



    render() {

        return (

            <Form onSubmit={this.submitReimbursement}>

              
              <FormGroup>

              <Label for="amount">Amount</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.amount}

                  type="text"

                  name="amount"

                  id="amount"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="dateSubmitted">Today's Date</Label>

                <Input

                  onChange={this.bindInputChangeToState}

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

                  onChange={this.bindInputChangeToState}

                  value={this.state.description}

                  type="text"

                  name="description"

                  id="description"

                />

              </FormGroup>

              <FormGroup>

              <Label for="type">Type of Expense</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.type}

                  type="text"

                  name="type"

                  id="type"

                />

              </FormGroup>

              <Button>Submit Reimbursement</Button>

              <label>Upload a file image of receipt here</label>

              <input  type="file" name="receipt"  id="receipt" ></input>

            </Form>

        );

    }

}


