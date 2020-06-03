import React from 'react';
import TabAllReimbursements from './TabAllReimbursements';

interface IWinDisplayAllReimbursementsProps {
  history: any;
}

export default class WinDisplayAllReimbursements extends React.Component <IWinDisplayAllReimbursementsProps> {

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
          <h3>Table of Reimbusements</h3>
          <TabAllReimbursements/>



        </div>
      );
    }
}
