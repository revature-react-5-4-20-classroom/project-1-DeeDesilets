import React from 'react';
import  User  from '../models/User';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, NavLink,  } from 'reactstrap';
import { checkingCredentials } from '../api/Employee';
import {BrowserRouter as Router} from 'react-router-dom';




interface IWinLogInProps {

  updateUser: (user:User) => void;
  

}



interface IWinLogInState {

  username: string;

  password: string;

  role: string;

  roleRoute: number;

  isError: boolean;

  errorMessage: string;

}



export class WinLogIn extends React.Component <IWinLogInProps, IWinLogInState> {



  constructor(props: IWinLogInProps) {

    super(props);

    this.state = {

      username: '',

      password: '',

      role: '',

      roleRoute: 0,

      isError: false,

      errorMessage: '',

    }

  }



  //We'll need a few functions to modify individual pieces of our state

  // These take change events

  setUsername = (un: string) => {

    this.setState({

      username: un,

    })

  }



  setPassword = (pw: string) => {

    this.setState({

      password: pw,

    })

  }

  setrole = (role: string) => {

    this.setState({

      role: role,

    })

  }


  clearError = () => {

    this.setState({

      errorMessage: '',

      isError: false,

    })

  }

  setRoleRoute = (role: string) => {
    if (role === 'finance manager' || role === 'admin') {
      this.setState({
        roleRoute : 1,})
    } else if (role === 'employee')  {
      this.setState({
        roleRoute : 2,
      })
    } else {
      this.setState({
        roleRoute : 0,
    })
  }
}
  

  handleChange = (event : any) => {
    this.setUsername (event.currentTarget.value);
    
    
  }
   
  handlePWChange = (event : any) => {
    this.setPassword (event.currentTarget.value);
  }


  handleSubmit = async (event: any) => {
    console.log('attempt login before prevent default');
    event.preventDefault();

    console.log(event);

    try {
      console.log("1st line in try");
      let loggedInUser : User = await checkingCredentials(this.state.username, this.state.password);
      console.log (loggedInUser);
      this.props.updateUser(loggedInUser);
      console.log (loggedInUser);
      this.setState({

        username: loggedInUser.username,

        password: loggedInUser.password,

        role: loggedInUser.role,
        
      });
      console.log (`username is ${this.state.username}, password is ${this.state.password}, and role is ${this.state.role}.`);
    } catch (error) {

      this.setState({
        username: '',

        password: '',

        role: '',

        isError: true,

        errorMessage: error.message,

      });

    }

  }



  render() {

    return (

      <>

      <Form onSubmit={this.handleSubmit} name="login">

        <FormGroup row>
 
          <Label for="username" sm={2}>Username</Label>

          <Col sm={6}>

            {/* onChange lets Input change state, value lets Input display state */}

            <Input  onChange={this.handleChange} value={this.state.username}  type="text" name="username" id="username" placeholder="your username" />

          </Col>

        </FormGroup> 
        <br/>

        <FormGroup row>

          <Label for="password" sm={2}>Password</Label>

          <Col sm={6}>

            <Input  onChange={this.handlePWChange} value={this.state.password} type ="password" name="password" id="password" required />

          </Col>

        </FormGroup>
        <br/>

        
        <Button type="submit">Submit</Button>
        
      </Form>
      <br/><br/>

      <Toast isOpen={this.state.isError}>

        <ToastHeader icon="danger" toggle={this.clearError}>

          Error!

        </ToastHeader>

        <ToastBody>

          {this.state.errorMessage}

        </ToastBody>



      </Toast>

  <Router>
    <NavLink to="/manager" Label="Managers'Home Page"></NavLink>
    <NavLink to="/employee" Label="Employees' Home Page"></NavLink>
  </Router>

</>
);

}
}