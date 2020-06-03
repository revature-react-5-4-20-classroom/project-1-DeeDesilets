import React from 'react';

interface IWinEmployeePage {username: string; history: any}

export default class WinEmployeePage extends React.Component <IWinEmployeePage> {
    
    nextPath(path: any) {
        this.props.history.push(path);
      }

    render () {
        return (
            <div>
                 <p>Hello, employee.  Welcome back.</p>   
                 <p> What would you like to start with today? </p>
                 <br/>
                        <div>
                                <button onClick={() => this.nextPath('/submit')}>
                                    Submit a new reimbursement
                                </button>
                        </div> 
                        <br/> 
                        <div>
                                <button onClick={() => this.nextPath('/displayuser')}>
                                    View your own user information
                                </button>
                        </div> 
                        <br/>
                        <div>  
                                <button onClick={() => this.nextPath('/displayreimbursements')}>
                                    View all your reimbursements
                                </button>
                        </div> 
                        <br/>
                        <div>
                                <button onClick={() => this.nextPath('/logout')}>
                                    Log Out
                                </button>
                        </div>    
                        
            </div>
        );
    }
}