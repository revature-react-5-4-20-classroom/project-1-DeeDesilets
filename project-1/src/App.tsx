import  React from 'react';
import  User  from './models/User';
import { WinLogIn } from './components/WinLogIn';
import WinEmployeePage from './components/WinEmployeePage';
import WinManagerPage from './components/WinManagerPage';
import WinDisplayUserInfo from './components/WinDisplayUserInfo';
import WinSubmitReimbursement from './components/WinSubmitReimbursement';
import WinDisplayReimbursements from './components/WinDisplayReimbursements';
import WinDisplayAllReimbursements from './components/WinDisplayAllReimbursements';
import WinDisplayAllUsers from './components/WinDisplayAllUsers';
import WinAddNewUser from './components/WinAddNewUser';
import WinUpdateUser from './components/WinUpdateUser';
import WinUpdateReimbursements from './components/WinUpdateReimbursements';
import WinLogOut from './components/WinLogOut';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


interface IAppState {
  loggedInUser: User | null,
 
}

export default class App extends React.Component <any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: null,
    }  
  }

  updateUser= (user: User) => {
        this.setState({loggedInUser: user});
  }
  

  render() {
     
    return (
    
      <>
          
              <h1>ABC Corp</h1>
              <h6>Where it pays to go to work</h6>
              <h4>Welcome to the Expense Reimbursement System</h4>
              <WinLogIn updateUser = {this.updateUser} />

       <Router>
          <Switch>
          <Route path='/manager' username={this.state.loggedInUser.username} render={(props)=>{return <WinManagerPage {...props, } />}} />
            
          <Route path='/employee' username={this.state.loggedInUser.username} render={(props)=>{return <WinEmployeePage  {...props} /> }}/>

          <Route path='/submitreimbursement' render={(props)=>{return <WinSubmitReimbursement  {...props} /> }}/>
          
          <Route path='/displayuser' render={(props)=>{return <WinDisplayUserInfo  {...props} /> }}/>
              
          <Route path='/displayreimbursements' render={(props)=>{return <WinDisplayReimbursements  {...props} /> }}/>
               
          <Route path='/displayallreimbursements' render={(props)=>{return <WinDisplayAllReimbursements  {...props} /> }}/>
               
          <Route path='/displayallusers' render={(props)=>{return <WinDisplayAllUsers  {...props} /> }}/>
               
          <Route path='/addnewuser' render={(props)=>{return <WinAddNewUser  {...props} /> }}/>    
              
          <Route path='/updateuser' render={(props)=>{return <WinUpdateUser  {...props} /> }}/>
             
          <Route path='/updatereimbursements' render={(props)=>{return <WinUpdateReimbursements  {...props} /> }}/>             
               
          <Route path='/logout' username={this.state.loggedInUser.username} render={(props)=>{return <WinLogOut  {...props} /> }}/> 
              
        </Switch>
      </Router>
    </ >
    );}
}