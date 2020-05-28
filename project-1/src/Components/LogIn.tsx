import React from 'react';
import { PoolClient, QueryResult } from 'pg';
import { connectionPool } from '../repository/index';


interface ILogInState {
    username: string;
    password: string;
    userId: number;
    role:   string;
    firstName: string;
    lastName: string;
    email: string;
}

export default class LogIn extends React.Component <any, ILogInState> {

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

    getUser = async (username: string, password: string)  => {
                             
        let client : PoolClient;
        client = await connectionPool.connect();
        try {
            let result : QueryResult;
            result = await client.query(
                'SELECT * FROM users WHERE user.username = $1 && user.password = $2;', [username, password]);
            );
            this.setState( {
                username: result.rows[0].username,
                password: result.rows[0].password,
                userId: result.rows[0].userId,
                role: result.rows[0].role,
                firstName: result.rows[0].firstName,
                lastName: result.rows[0].lastName,
                email: result.rows[0].email
            }); 
                      
                      
            } catch(e) {
          
              throw new Error(`Failed to query for all users: ${e.message}`);
          
            } finally {
          
              client && client.release();
          
            }
    }     

    addUser = async (username: string, password: string, role: string, userId: number, firstName: string, lastName: string, email: string) => {
        let client : PoolClient;
        client = await connectionPool.connect();
        try {
            
            await client.query(
                'INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, $6;', [username, password, firstName, lastName, email, role]);
            );
            this.setState( {
                username: username,
                password: password,
                userId: userId,
                role: role,
                firstName: firstName,
                lastName: lastName,
                email: email
            }); 
                      
                      
            } catch(e) {
          
              throw new Error(`Failed to query for all users: ${e.message}`);
          
            } finally {
          
              client && client.release();
          
            }
    }     

    }



    render()  {

        <div>;
            <input type="text">Please sign in or create new account</input>;
            <label>Username:</label>;
            <input id="uname" type="text">enter here</input>;
            <br/>;
            <br/>;
            <label>Password:</label>;
            <input id="pword" type="password">enter here</input>;
            <br/>;
            <br/>;
            let Uname :string : document.getElementById("uname");
            let Pword : document.getElementById("pword");
            <button onClick={this.getUser(Uname.innerText, Pword.innerText)}>Submit</button>;
            <button onClick={<NewUser/>}>Create new account</button>;
        </div>;
    }
}