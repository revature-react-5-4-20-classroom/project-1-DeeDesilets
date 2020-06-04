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



export default class WinLogIn extends React.Component<any, any> {

  constructor(props: any) {

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

      const loggedInUser: User = await checkingCredentials(

        this.state.username,

        this.state.password

      );

      this.props.updateUser(loggedInUser);

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

              <Button>Login</Button>

            </Form>

          </Col>

        </Row>

      </Container>

    );

  }

}