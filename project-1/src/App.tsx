import React from "react";
import WinDisplayAllUsers from "./components/WinDisplayAllUsers";
import WinDisplayAllReimbursements from "./components/WinDisplayAllReimbursements";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import  WinLogIn from "./components/WinLogIn";
import  User  from "./models/User";
import  Navigation  from "./components/Navigation";
import { Jumbotron } from "reactstrap";
import WinManagerPage from "./components/WinManagerPage";
import WinEmployeePage from "./components/WinEmployeePage";
import WinNewReimbursement from "./components/WinNewReimbursement";
import WinDisplayUserInfo from "./components/WinDisplayUserInfo";
import WinDisplayReimbursements from "./components/WinDisplayReimbursements"
import WinLogOut from "./components/WinLogOut";
import WinUpdateReimbursements from "./components/WinUpdateReimbursements";





export default class App extends React.Component<any, any> {

  constructor(props: any) {

    super(props);

    this.state = {

      loggedInUser: null,

    };

  }

  

  updateLoggedInUser = (u: User) => {

    this.setState({

      loggedInUser: u,

    });

  };

  

  logoutUser = () => {

    this.setState({

      loggedInUser: null,

    });
    
  };


  render() {
 
    return (

      <div className="App">

        <Router>

          <Navigation

            logoutUser={this.logoutUser}

            loggedInUser={this.state.loggedInUser}

          />

          <Jumbotron>

            <h1 className="display-4"><span role="img" aria-label="ABC Corp Banner">ABC Corporation</span></h1>
            <h6>Where it pays to go to work</h6>

          </Jumbotron>

          <Switch>

            <Route exact path="/">

              <Redirect to="/home" />

            </Route>

            <Route path="/home">

              <h2>

                Welcome!

                
              </h2>

            </Route>

            <Route path="/employee"

              render={(props: any) => {return ( 

                <WinEmployeePage  {...props} loggedInUser={this.state.loggedInUser} />
        
                );
              }}
            />

            <Route path="/submit"

              render= {(props:any) => {return (

                <WinNewReimbursement {...props} loggedInUser={this.state.loggedInUser} />
          
                );
              }}
            />     

            <Route path="/user"

              render= {(props:any) => {return (
              
                <WinDisplayUserInfo {...props} loggedInUser={this.state.loggedInUser} />
  
                );
              }}
            />   

            {/*<Route path="/updateuser"

              render= {(props:any) => {return (
              
                <WinUpdateUser {...props} loggedInUser={this.state.loggedInUser} />
  
                );
              }}
            /> */}  

            <Route path="/reimbursements"

              render= {(props:any) => {return (

                <WinDisplayReimbursements {...props} loggedInUser={this.state.loggedInUser} />
  
                );
              }}
            />  

<Route path="/updatereimbursement"

render= {(props:any) => {return (

  <WinUpdateReimbursements {...props} loggedInUser={this.state.loggedInUser} />

  );
}}
/>  

            <Route path="/managers"

              render={(props: any) => {return (

                <WinManagerPage  {...props} loggedInUser={this.state.loggedInUser} logoutUser={this.logoutUser}/>

                );
              }}
            />
            <Route path="/allreimbursements"

              render={(props: any) => {return (
              
                <WinDisplayAllReimbursements {...props}/>
              );
            }}
            />        

            <Route path="/allusers"

              render={(props: any) => {return (
                <WinDisplayAllUsers {...props}/> 
              );
              }}
            />

            <Route path="/login"

              render={(props: any) => {

                return (

                  <WinLogIn {...props} updateLoggedInUser={this.updateLoggedInUser} loggedInUser={this.state.loggedInUser} />

                );

              }}

            />  

<Route path="/logout"

render={(props: any) => {return (

  <WinLogOut  {...props}  logoutUser={this.logoutUser} loggedInUser={this.state.loggedInUser} />

  );
}}
/>

            <Route path="*"

              render={(props: any) => {

                toast(`No route found for ${props.location.pathname}`);

                return <Redirect to="/" />;

              }}
            /> 
            


        </Switch>

      </Router>



    <ToastContainer />

      
  </div>

  );

}

}








