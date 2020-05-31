import React, {Component} from 'react';
import  User  from '../models/User';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { checkingCredentials } from '../api/Employee';
import FailedLogIn from '../errors/FailedLogIn';
import WinManagerPage from './WinManagerPage';
import WinManageEmployeePage from './WinEmployeePage';


//the updateUser prop takes a function that takes a user and returns void

// it will match updateUser in App.

interface IWinLogInProps {

  updateUser: (user:User) => void;

}



interface IWinLogInState {

  username: string;

  password: string;

  role: string;

  isError: boolean;

  errorMessage: string;

}



export class WinLogIn extends React.Component<IWinLogInProps, IWinLogInState> {



  constructor(props: IWinLogInProps) {

    super(props);

    this.state = {

      username: '',

      password: '',

      role: '',

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



  attemptLogin = async (event: any) => {

    event.preventDefault();

    console.log(event);

    try {

      const loggedInUser : User = await checkingCredentials(this.state.username, this.state.password);

      this.props.updateUser(loggedInUser);

      this.setState({

        username: loggedInUser.username,

        password: loggedInUser.password,

        role: loggedInUser.role

      });

      //let nextUp 

      if (loggedInUser.role === 'admin' || loggedInUser.role === 'finance manager') {

          //

      } else if (loggedInUser)  {
          
         //  

      } else {
        throw new FailedLogIn ('Failed to authenticate.  Please try again.')
      }
  
    } catch (error) {

      this.setState({

        password: '',

        isError: true,

        errorMessage: error.message,

      })

    }

  }



  render() {

    return (

      <div>

      <Form onSubmit={this.attemptLogin}>

        <FormGroup row>

          <Label for="username" sm={2}>Username</Label>

          <Col sm={6}>

            {/* onChange lets Input change state, value lets Input display state */}

            <Input   type="text" name="username" id="username" placeholder="your username" />

          </Col>

        </FormGroup>
        <br/>

        <FormGroup row>

          <Label for="password" sm={2}>Password</Label>

          <Col sm={6}>

            <Input  type="password" name="password" id="password" required />

          </Col>

        </FormGroup>
        <br/>

        <Button color="info">Submit</Button>

      </Form>

      <Toast isOpen={this.state.isError}>

        <ToastHeader icon="danger" toggle={this.clearError}>

          Error!

        </ToastHeader>

        <ToastBody>

          {this.state.errorMessage}

        </ToastBody>



      </Toast>

      </div>

    );

  }



}