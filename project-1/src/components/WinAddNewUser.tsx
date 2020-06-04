import React from 'react';
import User from '../models/User';
import { addNewUser } from '../api/Employee';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';


interface IWinAddNewUserProps {
    
    addBook: ()=>void
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

            this.props.addNewUser()

            this.clearForm();

        } catch (e) {

            toast(e.message, {type:"error"});

        }

    }



    clearForm = () => {

        this.setState({

            title: '',

            author: '',

            yearPublished: 2000,

            wordCount: undefined

        })

    }



    bindInputChangeToState = (changeEvent:any) => {

        //@ts-ignore

        this.setState({[changeEvent.currentTarget.name] : changeEvent.currentTarget.value})

    }



    render() {

        return (

    <Form onSubmit={this.submitBook}>

              <FormGroup>

              <Label for="title">Title</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.title}

                  type="text"

                  name="title"

                  id="title"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="author">Author</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.author}

                  type="text"

                  name="author"

                  id="author"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="yearPublished">Year Published</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.yearPublished}

                  type="number"

                  name="yearPublished"

                  id="yearPublished"

                  required

                />

              </FormGroup>

              <FormGroup>

              <Label for="wordCount">Word Count</Label>

                <Input

                  onChange={this.bindInputChangeToState}

                  value={this.state.wordCount}

                  type="number"

                  name="wordCount"

                  id="wordCount"

                />

              </FormGroup>

              <Button>Add Book</Button>

            </Form>

        );

    }

}
               