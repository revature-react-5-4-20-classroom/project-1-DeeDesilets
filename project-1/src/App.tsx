import  React, {Component}  from 'react';
import reactDOM from 'react-dom';
import  User  from './models/User';
import css from '*.module.css';
import { WinLogIn } from './components/WinLogIn';
import FailedLogIn from './errors/FailedLogIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WinEmployeePage from './components/WinEmployeePage';

interface IAppState {
  loggedInUser: User | null,
  upNext: number,
}

export default class App extends React.Component <any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: null,
      upNext: 5     ,
    };
  }

  updateUser = (user: User) => {
    this.setState({
      loggedInUser: user,
    });
  }
  
  chooseNext = (role: string) : void => {
    if ((this.state.loggedInUser)  && (this.state.loggedInUser.role === 'admin' || this.state. loggedInUser.role === 'finance manager')) {
        this.setState({upNext : 2});
       
    } else if (this.state.loggedInUser && this.state.loggedInUser.role === 'employee') {
      this.setState({upNext : 3});
    }
  }

  render() {
    
    return (
    
      <html>
          <head> <style> <link rel="stylesheet" type="text/css" href="App.css" /></style></head>
          <body>
            <div> 
              <h1>ABC Corp</h1>
              <h6>Where it pays to go to work</h6>
              <h4>Welcome to the Expense Reimbursement System</h4>
              <WinLogIn updateUser = {this.updateUser}/>
            </div>
          </body> 
        </html>
    );}
}










