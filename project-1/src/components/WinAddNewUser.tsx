import React from 'react';

export default class AddNewUser extends React.Component  {

    render()  {
        return (
            <div>
                <button>Log Out</button>
                <button>Back to Menu</button>
                <form name='newuser' >
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