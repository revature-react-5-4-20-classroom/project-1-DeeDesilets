
import React from 'react';
import User from '../models/User';
import {BrowserRouter as Router} from 'react-router-dom';
import { NavLink } from 'react-router-dom';




interface IWinLogOutProps {
  updateUser: (user:User) => void;
  username: string;
  history: any; 
}
export default class WinLogOut extends React.Component <IWinLogOutProps> {
  
    
    componentDidMount = () => {
        (this.props.updateUser(new User(0, " ", " ", " ", " ", " ", " ")));

        }
         
    nextPath(path: any) {
            this.props.history.push(path);
          }

    
         
    render() {
        
        return (
            <>
            <h1>Thanks for stopping by {this.props.username}.</h1>
            <h1>Come again, soon.</h1>
            <h1> Good Bye. </h1>
            {() => this.nextPath('/logout')}

            </>
        );
    }

    
}

