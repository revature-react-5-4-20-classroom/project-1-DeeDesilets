import React from 'react';
import TabAllUsers from './TabAllUsers';

interface IDisplayAllUsersProps {
  history: any;
}

export default class WinDisplayAllUsers extends React.Component <IDisplayAllUsersProps> {


  nextPath(path: any) {
    this.props.history.push(path);
  }

    render () {
      return (
        <div>
           <button onClick={() => this.nextPath('/logout')}>
                              Log Out
                           </button>
                                     
                    
         
                   
                   <button onClick={() => this.nextPath('/manager')}>
                             Menu Page
                           </button>
         
          <h3>Table of Users</h3>
          <TabAllUsers/>



        </div>
      );
    }
}
