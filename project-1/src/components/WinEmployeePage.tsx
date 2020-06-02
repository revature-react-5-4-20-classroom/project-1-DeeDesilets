import React from 'react';

interface IWinEmployeePage {username: string;}

export default class WinEmployeePage extends React.Component <IWinEmployeePage> {

    render () {
        return (
            <div>
                 <p>Hello, employee.  Welcome back.</p>   
                 <p> What would you like to start with today? </p>
                 <br/>
                        <div>
                                <button type="button">
                                    Submit a new reimbursement
                                </button>
                        </div> 
                        <br/> 
                        <div>
                                <button type="button">
                                    View your own user information
                                </button>
                        </div> 
                        <br/>
                        <div>  
                                <button type="button">
                                    View all your reimbursements
                                </button>
                        </div> 
                        <br/>
                        <div>
                                <button type="button">
                                    Log Out
                                </button>
                        </div>    
                        
            </div>
        );
    }
}