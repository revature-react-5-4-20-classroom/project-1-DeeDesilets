import React from "react";

import {

  Form,

  FormGroup,

  Label,

  Input,

  Button,

  Row,

  Container,

  Col,

} from "reactstrap";

import  User  from "../models/User";

import { checkingCredentials } from "../api/Employee";

import { toast } from "react-toastify";

interface IWinLogInProps {
  history: any;
  updateLoggedInUser: (u: User) => void;
  loggedInUser: User;

}

interface IWinLogInState {
  
  username: string;

  password: string;

}



export default class WinLogIn extends React.Component<IWinLogInProps, IWinLogInState> {

  constructor(props: IWinLogInProps) {

    super(props);

    this.state = {

      

      username: "",

      password: "",

    };

  }



  setUsername = (changeEvent: any) => {

    this.setState({

      username: changeEvent.currentTarget.value,

    });

  };



  setPassword = (changeEvent: any) => {

    this.setState({

      password: changeEvent.currentTarget.value,

    });

  };



  attemptLogin = async (submitEvent: any) => {

    submitEvent.preventDefault();

    try {

      const loggingInUser: User = await checkingCredentials(

        this.state.username,

        this.state.password

      );

      this.props.updateLoggedInUser(loggingInUser);

      this.props.history.push("/home");

    } catch (error) {

      toast(error.message, { type: "error" });

      this.setState({

        password: "",

      });

    }

  };



  render() {

    return (

      <Container>

        <Row>

          <Col md={{ size: 6, offset: 3 }}>

            <Form onSubmit={this.attemptLogin}>

              <FormGroup>

                <Label for="username">Username</Label>

                <Input

                  onChange={this.setUsername}

                  value={this.state.username}

                  type="text"

                  name="username"

                  id="username"

                  required

                />

              </FormGroup>

              <br/>  <br/>

              <FormGroup>

                <Label for="password">Password</Label>

                <Input

                  onChange={this.setPassword}

                  value={this.state.password}

                  type="password"

                  name="password"

                  id="password"

                  required

                />

              </FormGroup>

              <br/>  <br/>

              <Button>Login</Button>

            </Form>

          </Col>

        </Row>

      </Container>

    );

  }

}