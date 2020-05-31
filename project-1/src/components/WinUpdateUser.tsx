import React from 'react';

export default class AddNewUser extends React.Component  {

    render()  {
        return (
            <div>
                <button>Log Out</button>
                <button>Back to Menu</button>
                <form name='newuser' method='post' action='http://3.81.26.224:6464/users' >
                    <label>Username:</label>
                    <input id="uname" type="text"></input>
                    <br/>
                    <label>Password:</label>
                    <input id="pword" type="password"></input>
                    <br/>
                    <label>First Name:</label>
                    <input id="fName" type="text"></input>
                    <br/>
                    <label>Last Name:</label>
                    <input id="lName" type="text"></input>
                    <br/>
                    <label>Email:</label>
                    <input id="eMail" type="email"></input>
                    <br/>
                    <label>Role:</label>
                    <input id="roletype" type="text"></input>
                    <br/>
                    <input id="submit" type="submit">Submit</input>
            </form>
            </div>
        );
    }
}