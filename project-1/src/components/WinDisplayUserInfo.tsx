import React from 'react';
import TabAllUsers from './TabAllUsers';

interface IWinDisplayUserInformationProps {
  history: any
  role: string;
}

export default class WinDisplayUserInfo extends React.Component <IWinDisplayUserInformationProps> {


    path: string = " ";
    nextPath = (path: any) => {
    if (this.props.role && (this.props.role ==='finance manager' || this.props.role ==='admin'))  {
      path = '/manager"';
    } else if (this.props.role && this.props.role === 'employee') {
      path = '/employee'
    } else {}
    this.props.history.push({path});
    }

    render () {
      return (
        <div>
          
          <h3>Table of Users</h3> {/*one row*/}
          <TabAllUsers/>
          <br/> <br/>
          
          <div>   
                           
                  <button onClick={() => this.nextPath('/logout')}>
                     Log Out
                  </button>
                            
          </div>  

          
          <button onClick={() => this.nextPath(this.path)}>
                    Menu Page
                  </button>

        </div>
      );
    }
}
