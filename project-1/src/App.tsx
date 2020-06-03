import  React from 'react';
import  User  from './models/User';
import  WinLogIn  from './components/WinLogIn';
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
  loggedInUser: User,
 
}

export default class App extends React.Component <any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loggedInUser: new User(0, " "," ", " ", " ", " ", " ")
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
      <Router>
        <Switch>      
          <Route path='/' render= {({history}) => {return (<WinLogIn history = {history} updateUser = {this.updateUser} />)}} />
       
          <Route path='/manager' render={({history})=>{return (<WinManagerPage history={history} username = {this.state.loggedInUser && this.state.loggedInUser.username}/>)}}/>
            
          <Route path='/employee'  render={({history})=>{return (<WinEmployeePage history={history} username = {this.state.loggedInUser && this.state.loggedInUser.username}/>)}}/>

          <Route path='/submitreimbursement' render={({history})=>{return (<WinSubmitReimbursement history={history} role ={this.state.loggedInUser && this.state.loggedInUser.role} />)}}/> 
          
          <Route path='/displayuser' render={({history})=>{return (<WinDisplayUserInfo history={history} role ={this.state.loggedInUser && this.state.loggedInUser.role} />)}}/>
              
          <Route path='/displayreimbursements' render={({history})=>{return (<WinDisplayReimbursements history={history} role ={this.state.loggedInUser && this.state.loggedInUser.role} />)}}/>
               
          <Route path='/displayallreimbursements' render={({history})=>{return (<WinDisplayAllReimbursements history={history}  />)}}/>
               
          <Route path='/displayallusers' render={({history})=>{return (<WinDisplayAllUsers history={history}  />)}}/>
               
          <Route path='/addnewuser' render={({history})=>{return (<WinAddNewUser history={history} /> )}} />
              
          <Route path='/updateuser' render={({history})=>{return (<WinUpdateUser history={history}  />)}} />
             
          <Route path='/updatereimbursements' render={({history})=>{return (<WinUpdateReimbursements history={history}  />)}}/>           
               
          <Route path='/logout'  render={({history})=>{return <WinLogOut updateUser={this.updateUser} username = {this.state.loggedInUser && this.state.loggedInUser.username} history={history}/>}} />
              
        </Switch>
      </Router>
    </ >
    );}
}