import React from 'react';

interface IWinUpdateUserProps {
    history: any;
  }

export default class WnUpdateUser extends React.Component  <IWinUpdateUserProps> {

    nextPath(path: any) {
        this.props.history.push(path);
      }

    render()  {
        return (
            <div>
                <button onClick={() => this.nextPath('/logout')}>
                              Log Out
                           </button>
                                     
                    
         
                   
                   <button onClick={() => this.nextPath('/manager')}>
                             Menu Page
                           </button>
                <form name='newuser'>
                    <label>Username:</label>
                    <input id="uname" type="text"></input>
                    <br/><br/>
                    <label>Password:</label>
                    <input id="pword" type="password"></input>
                    <br/><br/>
                    <label>First Name:</label>
                    <input id="fName" type="text"></input>
                    <br/><br/>
                    <label>Last Name:</label>
                    <input id="lName" type="text"></input>
                    <br/><br/>
                    <label>Email:</label>
                    <input id="eMail" type="email"></input>
                    <br/><br/>
                    <label>Role:</label>
                    <input id="roletype" type="text"></input>
                    <br/><br/>
                    <button id="submit" type="submit">Submit</button>
                    <br/><br/>
            </form>
            </div>
        );
    }
}