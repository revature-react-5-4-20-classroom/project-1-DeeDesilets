import React from 'react';
import { Table } from 'reactstrap';
import TabAllReimbursements from './TabAllReimbursements';

export default class WinDisplayAllReimbursements extends React.Component {

    render () {
      return (
        <div>
          {/*Log Out, Return to Menu, and Update buttons*/}
          <h3>Table of Reimbusements</h3>
          <TabAllReimbursements/>



        </div>
      );
    }
}
