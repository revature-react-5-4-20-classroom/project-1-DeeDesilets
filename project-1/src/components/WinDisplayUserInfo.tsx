import React from 'react';
import TabAllUsers from './TabAllUsers';

export default class WinEDisplayUserInformation extends React.Component {

    render () {
      return (
        <div>
          {/*Log Out, Return to Menu,*/}
          <h3>Table of Users</h3> {/*one row*/}
          <TabAllUsers/>



        </div>
      );
    }
}