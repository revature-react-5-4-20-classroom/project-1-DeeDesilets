
import React from 'react';
import User from '../models/User';




interface IWinLogOutProps {
  updateUser: (user:User) => void;
  username: string;
}
export default class WinLogOut extends React.Component <IWinLogOutProps> {
  
    
     componentDidMount = () => {
         (this.props.updateUser(new User(0, " ", " ", " ", " ", " ", " ")))
         
     }    
    render() {
        
        return (
            <>
            <h1>Thanks for stopping by {this.props.username}.</h1>
            <h1>Come again, soon.</h1>
            <h1> Good Bye. </h1>
            </>
        );
    }

    
}

