import  React from 'react';
import {withRouter} from 'react-router-dom';

interface IWinManagerPageProps
{   username: string;
    history: any;
}


export default class WinManagerPage extends React.Component <IWinManagerPageProps>  {

    nextPath(path: any) {
        this.props.history.push(path);
      }

    render () {
        return (
            <>
                 <p> Hello, {this.props.username}, Welcome back. </p>
                 <p>what would you like to start with today?</p>
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
                                    View all your past and current reimbursements
                                </button> 
                    </div>  
                    <br/>      
                    <div>   
                           
                                <button onClick={() => this.nextPath('/displayallreimbursements')} >
                                    View all reimbursements
                                </button>
                            
                    </div>  
                    <br/>
                    <div>
                                <button onClick={() => this.nextPath('/displayallusers')}>
                                    View all Employees
                                </button> 
                    </div>  
                    <br/> 
                    <div>   
                           
                                <button onClick={() => this.nextPath('/logout')}>
                                    Log Out
                                </button>
                            
                    </div>  
                    <br/>    
            </>
        );
    }
}