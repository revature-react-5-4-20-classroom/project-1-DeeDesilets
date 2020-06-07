import React from 'react';
import User from '../models/User';
import { addNewUser } from '../api/Employee1';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';


interface IWinAddNewUserProps {
    
    AddNewUser: ()=>void
}

interface IWinAddNewUserState {

    username: string;

    password: string;

    firstname: string;

    lastname: string;

    email: string;

    role: string;

}

export default class WinAddNewUser extends React.Component <IWinAddNewUserProps, IWinAddNewUserState>  {

    constructor(props: any) {

        super(props);

        this.state = {

            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            role: ""
        }

    }

    submitNewUser = async (submitEvent: any) => {

        submitEvent.preventDefault();

        try {

            const newUser = new User (0, this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email, this.state.role);

            await addNewUser(newUser);

            toast(`${newUser.firstName} ${newUser.lastName} added successfully!`, {type: "success"});

            this.props.AddNewUser()

            this.clearForm();

        } catch (e) {

            toast(e.message, {type:"error"});

        }

    }



    clearForm = () => {

        this.setState({

          username: "",
          password: "",
          firstname: "",
          lastname: "",
          email: "",
          role: ""
        })

    }



    bindInputChangeToState = (changeEvent:any) => {

       

        this.setState({username : changeEvent.currentTarget.value, password : changeEvent.currentTarget.value, firstname : changeEvent.currentTarget.value, lastname : changeEvent.currentTarget.value, email : changeEvent.currentTarget.value, role : changeEvent.currentTarget.value })

    }



    render() {

        return (

    <Form onSubmit={this.props.AddNewUser}>

              <FormGroup>

              <Label for="username">Username</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.username}

                  type="text"

                  name="username"

                  id="username"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="password">Password</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.password}

                  type="text"

                  name="password"

                  id="password"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="firstname">First Name</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.firstname}

                  type="text"

                  name="firstname"

                  id="firstname"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="lastname">Last Name</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.lastname}

                  type="text"

                  name="lastname"

                  id="lastname"

                />

              </FormGroup>

              <FormGroup>

              <Label for="email">Email Address</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.email}

                  type="email"

                  name="email"

                  id="email"

                />

              </FormGroup>

              <FormGroup>

              <Label for="role">Role</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.role}

                  type="text"

                  name="role"

                  id="role"

                  placeholder="'finance manager', 'admin', or 'employee'"

                />

              </FormGroup>


              <Button>Add Employee</Button>

            </Form>

        );

    }

}
               