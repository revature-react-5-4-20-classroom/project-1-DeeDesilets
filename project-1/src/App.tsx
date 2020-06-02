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
    
    this.setState({loggedInUser: user})

    }
  

 
  

  render() {
     
    return (
    
      <>
          
              <h1>ABC Corp</h1>
              <h6>Where it pays to go to work</h6>
              <h4>Welcome to the Expense Reimbursement System</h4>
              <WinLogIn updateUser = {this.updateUser} />
              <WinManagerPage username = "manager" />
              <WinEmployeePage username = "employee" />
              <WinSubmitReimbursement />
              <WinDisplayUserInfo />
              <WinDisplayReimbursements />  
              <WinDisplayAllReimbursements />  
              <WinDisplayAllUsers />    
              <WinAddNewUser />
              <WinUpdateUser />                  
              <WinUpdateReimbursements />
              <WinLogOut updateUser = {this.updateUser} username = {"colleague"}/>

                  
        </>
    );}
}









