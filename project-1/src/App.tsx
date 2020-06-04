import React from "react";

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

import  UserPage  from "./components/UserPage"

import  ReimbursementsPage  from "./components/ReimbursementsPage";

import { Jumbotron } from "reactstrap";



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

            <h1 className="display-4"><span role="img" aria-label="Library App banner with book emoji">📚Library App📚</span></h1>

          </Jumbotron>

          <Switch>

            {/* This Route redirects people hitting the root url to either home or login, just a QoL thing */}

            <Route exact path="/">

              {this.state.loggedInUser ? (

                <Redirect to="/home" />

              ) : (

                <Redirect to="/login" />

              )}

            </Route>

            {/* This is a Route to a login form */}

            <Route

              path="/login"

              render={(props: any) => {

                return (

                  <WinLogIn {...props} updateUser={this.updateLoggedInUser} />

                );

              }}

            />

            {/* This route is just a placeholder for a homepage */}

            <Route path="/home">

              <h2>

                Welcome{" "}

                {this.state.loggedInUser

                  ? `home, ${this.state.loggedInUser.username}!`

                  : "guest!"}

              </h2>

            </Route>

            {/* This is a Route to a public books page.  It displays differently based on the logged in user. */}

            <Route path="/books">

              <ReimbursementsPage loggedInUser={this.state.loggedInUser} />

            </Route>

            {/* This is a Route to a private users page, only accessible by Admins */}

            <Route path="/users">

              {(this.state.loggedInUser && this.state.loggedInUser.role === 'Admin') ? <UserPage /> : <h4>Only admins can see all users</h4>}

            </Route>

            {/* This is a catchall route that redirects the user if they enter a route we dont have */}

            <Route

              path="*"

              render={(props: any) => {

                toast(`No route found for ${props.location.pathname}`);

                return <Redirect to="/" />;

              }}

            ></Route>

          </Switch>

        </Router>



        <ToastContainer />

      </div>

    );

  }

}