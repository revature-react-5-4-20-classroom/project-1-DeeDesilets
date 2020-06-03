import React from 'react';
import TabAllReimbursements from './TabAllReimbursements';

interface IWinDisplayReimbursementsProps {
  history: any;
  role: string;
}

export default class WinDisplayAllReimbursements extends React.Component <IWinDisplayReimbursementsProps>  {

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
        <>
          
           <button onClick={() => this.nextPath('/logout')}>
                              Log Out
                           </button>
                                     
                    
         
                   
                   <button onClick={() => this.nextPath('/manager')}>
                             Menu Page
                           </button>
          <h3>Table of Reimbursements</h3>
          <TabAllReimbursements/>



        </>
      );
    }
}
