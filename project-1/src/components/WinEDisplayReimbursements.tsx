import React from 'react';
import { Table } from 'reactstrap';
import TabAllUsers from './TabAllUsers';
import TabAllReimbursements from './TabAllReimbursements';

export default class WinDisplayAllReimbursements extends React.Component {

    render () {
      return (
        <div>
          {/*Log Out, Return to Menu, and Update buttons*/}
          <h3>Table of Reimbursements</h3>
          <TabAllReimbursements/>



        </div>
      );
    }
}
