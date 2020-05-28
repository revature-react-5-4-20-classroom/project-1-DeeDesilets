import axios from 'axios';

const employee = axios.create({

    baseURL: 'http://3.81.26.224:6464',
  
    // If you don't have the following line, your login won't work!
  
    withCredentials: true,
  
  });

  export async function getReimbursementsByUser() {

    return await employee.get('/users');
  
  }