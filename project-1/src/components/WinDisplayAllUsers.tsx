import React from 'react';
import TabAllUsers from './TabAllUsers';

export default class WinDisplayAllUsers extends React.Component {

    render () {
      return (
        <div>
          {/*Log Out, Return to Menu, and Update buttons*/}
          <h3>Table of Users</h3>
          <TabAllUsers/>



        </div>
      );
    }
}
