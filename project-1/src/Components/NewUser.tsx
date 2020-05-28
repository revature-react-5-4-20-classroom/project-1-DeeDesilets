import React from 'react';
import { PoolClient, QueryResult } from 'pg';
import { connectionPool } from '../repository/index';

interface INewUserState {
    username: string;
    password: string;
    userId: number;
    role:   string;
    firstName: string;
    lastName: string;
    email: string;
}

export default class NewUser extends React.Component <any, INewUserState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userId: -99,
            role: "",
            firstName: "",
            lastName: "",
            email: ""
        };
    }

   
    addUser = async (username: string, password: string, role: string, firstName: string, lastName: string, email: string) => {
        let client : PoolClient;
        client = await connectionPool.connect();
        try {
            
            await client.query(
                'INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, $6;', [username, password, firstName, lastName, email, role]
            );
            
            this.setState( {
                username: username,
                password: password,
                role: role,
                firstName: firstName,
                lastName: lastName,
                email: email
            }); 
                      
            } catch(e) {
          
              throw new Error(`Failed to add user: ${e.message}`);
          
            } finally {
          
              client && client.release();
          
            }
    }     

    
    render()  {
        return (
            <div>
                <label>Please sign in or create new account</label>
                <label>Username:</label>
                <input id="uname" type="text"></input>
                <br/>
                <br/>
                <label>Password:</label>
                <input id="pword" type="password"></input>
                <br/>
                <br/>
                <label>First Name:</label>
                <input id="fName" type="text"></input>
                <br/>
                <br/>
                <label>Last Name:</label>
                <input id="lName" type="text"></input>
                <br/>
                <br/>
                <label>Email:</label>
                <input id="eMail" type="email"></input>
                <br/>
                <br/>
                <label>Role:</label>
                <input id="roletype" type="text"></input>
                <br/>
                <br/>
                {Uname : string = document.getElementById("uname").innerText;
                Pword : string = document.getElementById("pword").innerText;
                Fname : string = document.getElementById("fName").innerText;
                Lname : string = document.getElementById("lName").innerText;
                Email : string = document.getElementById("eMail").innerText;
                Role : string = document.getElementById("roletype").innerText;}
                <button onClick={this.addUser(this.Uname: string, this.Pword: string, this.Role: string, this.Fname: string, this.Lname: string, this.Email: string)}>Submit</button>
            </div>
        );
    }
}