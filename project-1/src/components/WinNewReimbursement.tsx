import React from 'react';

import Reimbursement from '../models/Reimbursement'

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

              <Label for="author">Author</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.author}

                  type="number"

                  name="author"

                  id="author"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="amount">Amount</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.amount}

                  type="number"

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

                  type="number"

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

              <Button>Submit Reimbursement</Button>

              <input  type="file" name="receipt"  id="receipt" ></input>

            </Form>

        );

    }

}

{/*<Col md={{size: 4}}>

{this.props.loggedInUser ? <WinNewReimbursement addReimbursement={this.addNewReimbursement} /> : <h4>Must login to submit a reimbursement</h4>}

</Col>
}

addNewReimbursement = async () => {

  await this.fetchReimbursements();

}*/}

