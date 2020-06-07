import axios from 'axios';
import Reimbursement  from '../models/Reimbursement';
import User  from '../models/User';
import FailedUpdate from '../errors/FailedUpdate';
import FailedRequest from '../errors/FailedRequest';



const employee = axios.create({

    baseURL: 'http://localhost:6464',
  
    withCredentials: true,
  
  });

export async function getReimbursementsByAUID (userId : number) : Promise <Reimbursement[]> {
try {
  
  console.log("hi from inside try block of AUID");
  const url= '/reimbursements/author/userId/' + userId;
  let response = await employee.get(url);
console.log(response);
  return response.data.map((r : Reimbursement) => {

    let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = r;
console.log (r);
    return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
  
  });} catch (e)  {
    throw new FailedRequest('The request has failed.');
  }
}

export async function getReimbursementsBySID (id : number) : Promise <Reimbursement[]> {
try {
  let response = await employee.get('/reimbursements/status/:id');

  return response.data.map((r : Reimbursement) => {

    let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = r;

    return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
  
});} catch (e) {
   throw new FailedRequest('The request has failed.');
  }
}


export async function submitReimbursements (author: number, amount: number, dateSubmitted: number, description: string, type: number ) : Promise <Reimbursement> {

    try {
      console.log('nside try block/frontend/api');
      let response: any = await employee.post('/reimbursements', {"author" : author, "amount" : amount, "datesubmitted" : dateSubmitted, "description" : "description", "type" : type});
      console.log(response.data);
      return new Reimbursement (response.data.reimbursementId, response.data.author, response.data.amount, response.data.dateSubmitted, response.data.dateResolved, response.data.description, response.data.resolver, response.data.status, response.data.type);
    
    } catch (e) {
      console.log("inside catch front end api");
        throw new FailedUpdate('Failed to submit reimbursement.' );
  
       
    }
  }
 
  export async function updateReimbursements (reimbursementId: number,  dateResolved: number, resolver: number, status: number ) : Promise <Reimbursement> {

    try {
      let response : any = await employee.patch('/reimbursements', {"dateresolved" : "dateresolved", "resolver":"resolver", "status":"status"});
      
        return new Reimbursement (response.data.reimbursementId, response.data.author, response.data.amount, response.data.datesubmitted, response.data.dateresolved, response.data.description, response.data.resolver, response.data.status, response.data.type);
    } catch (e) {
      
        throw new FailedUpdate('Failed to update reimbursement.' );
  
       
    }
  } 

export async function getUserById(id: number) : Promise<User []> {
try {
  const response = await employee.get('/users/:id');

  return response.data.map((u: any) => {
    let {id, username, password, firstname, lastname, email, role} = u;
    console.log(u);
    return new User(id, username, password, firstname, lastname, email, role);
  });} catch (e) {
    
    throw new FailedRequest('The request has failed.');
  
       
}
}



  export async function checkingCredentials(un: string, pw: string): Promise<User> {
console.log("hello from inside checkingCredentials");
console.log(un + "and" + pw);
    try {
console.log("testing checkingCredentials try begin");
      const response = await employee.post("/login", {
  
        username: un,
  
        password: pw,
  
      });
  
      const { userId, username, password, firstName, lastName, email, role } = response.data;
      console.log(response.data);
  
      return new User(userId, username, password, firstName, lastName, email, role);
  
    } catch (e) {
  
      if (e.response.status === 401) {
  
        throw new Error(`Failed to authenticate with username ${un}`);
  
      } else {
  
        throw new Error("There was a problem logging in");
  
      }
  
    }
  
  }
export async function getAllReimbursements () : Promise <Reimbursement[]> {
try {
  let response = await employee.get('/reimbursements');
console.log(response);
  return response.data.map((r : any) => {

    let {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = r;
console.log(r);
    return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
  
  });} catch (e) {
    throw new FailedRequest('The request has failed.');
  }
}

export async function getAllUsers () : Promise <User[]> {
try {
  let response = await employee.get('/users');

  return response.data.map((u : User) => {

    let {userId, username, password, firstName, lastName, email, role} = u;

    return new User (userId, username, password, firstName, lastName, email, role);
  
  });} catch (e)  {
    throw new FailedRequest('The request has failed.');
  }
}

export async function addNewUser (user: User) : Promise <User[]> {
try {
  let response = await employee.post('/users', {"username" : "{user.username}", "password" : "{user.password}", "firstname" : "{user.firstname}", "lastname" : "{user.lastname}", "email" : "{user.email}", "role" : "{user.role}"});

  return response.data.map((u : User) => {

    let {userId, username, password, firstName, lastName, email, role} = u;

    return new User (userId, username, password, firstName, lastName, email, role);
  
  });} catch (e)  {
    throw new FailedUpdate('Failed to update employee.' );
  }
}

export async function updateUser (userId: number, username: string, password: string, firstName: string, lastName: string, email: string, ) : Promise <User[]> {
  try {
    let response = await employee.patch('/users', {"username" : "{user.username}", "password" : "{user.password}", "firstname" : "{user.firstname}", "lastname" : "{user.lastname}", "email" : "{user.email}", "role" : "{user.role}"});
  
    return response.data.map((u : User) => {
  
      let {userId, username, password, firstName, lastName, email, role} = u;
  
      return new User (userId, username, password, firstName, lastName, email, role);
    
    });} catch (e)  {
      throw new FailedUpdate('Failed to update employee.' );
    }
  }