import axios from 'axios';
import Reimbursement  from '../models/Reimbursement';
import User  from '../models/User';
import FailedLogIn from '../errors/FailedLogIn';
import FailedUpdate from '../errors/FailedUpdate';


const employee = axios.create({

    baseURL: 'http://3.81.26.224:6464',
  
    withCredentials: true,
  
  });

export async function getReimbursementsByAUID (id : number) : Promise <Reimbursement[]> {

  const response = await employee.get('/reimbursements/author/:userId');

  return response.data.map((r : Reimbursement) => {

    const {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = r;

    return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
  
  });
}

export async function submitReimbursements (reimbursementId = 0, author: number, amount: number, datesubmitted: number, description: string, type: number ) : Promise <Reimbursement> {

    try {
      const response : Reimbursement = await employee.post('/reimbursements', {"reimbursementid" : 0, "author" : "author" , "amount" : "amount", "datesubmitted" : "datesubmitted", "description" : "description", "type" : "type"});
      const {reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type} = response;
      return new Reimbursement (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type);
    } catch (e) {
      
        throw new FailedUpdate('Failed to update reimbursement.' );
  
       
    }
  }
  
export async function getUserById() : Promise<User> {

  const response = await employee.get('/users');

  return response.data.map((u: any) => {
    const {id, username, password, firstname, lastname, email, role} = u;
    return new User(id, username, password, firstname, lastname, email, role);
  });
}

export async function checkingCredentials (un: string, pw: string): Promise<User> {
  try {
    const response = await employee.post('/login', {username: un, password: pw});
    const {id, username, password, firstname, lastname, email, role} = response.data;
    return new User(id, username, password, firstname, lastname, email, role);
  } catch (e) {
    
      throw new FailedLogIn('Failed to authenticate.');
    
    }
}
