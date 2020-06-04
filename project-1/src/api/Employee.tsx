import axios from 'axios';
import Reimbursement  from '../models/Reimbursement';
import User  from '../models/User';
import FailedUpdate from '../errors/FailedUpdate';



const employee = axios.create({

    baseURL: 'http://localhost:6464',
  
    withCredentials: true,
  
  });

export async function getReimbursementsByAUID (id : number) : Promise <Reimbursement[]> {

  let response = await employee.get('/reimbursements/author/:userId');

  return response.data.map((r : Reimbursement) => {

    let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = r;

    return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
  
  });
}

export async function submitReimbursements (reimbursementId = 0, author: number, amount: number, datesubmitted: number, description: string, type: number ) : Promise <Reimbursement> {

    try {
      let response : Reimbursement = await employee.post('/reimbursements', {"reimbursementid" : 0, "author" : "author" , "amount" : "amount", "datesubmitted" : "datesubmitted", "description" : "description", "type" : "type"});
      let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = response;
      return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
    } catch (e) {
      
        throw new FailedUpdate('Failed to update reimbursement.' );
  
       
    }
  }
 
  export async function updateReimbursements (reimbursementId = 0, author: number, amount: number, datesubmitted: number, description: string, type: number ) : Promise <Reimbursement> {

    try {
      let response : Reimbursement = await employee.patch('/reimbursements', {"reimbursementid": 0, "author":"author", "amount" : "amount", "datesubmitted" : "datesubmitted", "description" : "description", "type" : "type"});
      let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = response;
      return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
    } catch (e) {
      
        throw new FailedUpdate('Failed to update reimbursement.' );
  
       
    }
  } 

export async function getUserById(id: number) : Promise<User []> {

  const response = await employee.get('/users/id:');

  return response.data.map((u: any) => {
    let {id, username, password, firstname, lastname, email, role} = u;
    return new User(id, username, password, firstname, lastname, email, role);
  });
}



  export async function checkingCredentials(un: string, pw: string): Promise<User> {

    try {
  
      const response = await employee.post("/login", {
  
        username: un,
  
        password: pw,
  
      });
  
      const { id, username, password, firstname, lastname, email, role } = response.data;
  
      return new User(id, username, password, firstname, lastname,email, role);
  
    } catch (e) {
  
      if (e.response.status === 401) {
  
        throw new Error(`Failed to authenticate with username ${un}`);
  
      } else {
  
        throw new Error("There was a problem logging in");
  
      }
  
    }
  
  }
export async function getAllReimbursements () : Promise <Reimbursement[]> {

  let response = await employee.get('/reimbursements');

  return response.data.map((r : Reimbursement) => {

    let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = r;

    return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
  
  });
}

export async function getAllUsers () : Promise <User[]> {

  let response = await employee.get('/users');

  return response.data.map((u : User) => {

    let {userId, username, password, firstName, lastName, email, role} = u;

    return new User (userId, username, password, firstName, lastName, email, role);
  
  });
}

export async function addNewUser (user: User) : Promise <User[]> {

  let response = await employee.post('/users', {"username" : "{user.username}", "password" : "{user.password}", "firstname" : "{user.firstname}", "lastname" : "{user.lastname}", "email" : "{user.email}", "role" : "{user.role}"});

  return response.data.map((u : User) => {

    let {userId, username, password, firstName, lastName, email, role} = u;

    return new User (userId, username, password, firstName, lastName, email, role);
  
  });
}