
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
            <h6>Thanks for stopping by {this.props.username}.</h6>
            <h6>Come again, soon.</h6>
            <h6> Good Bye. </h6>
            </>
        );
    }

    
}

