import  React from 'react';

interface IWinManagerPageProps
{username: string}


export default class WinManagerPage extends React.Component <IWinManagerPageProps>  {

    render () {
        return (
            <>
                 <p> Hello, {this.props.username}, Welcome back. </p>
                 <p>what would you like to start with today?</p>
                    <div>
                                <button >
                                    Submit a new reimbursement
                                </button> 
                    </div>  
                    <br/>      
                    <div>   
                           
                                <button >
                                    View your own user information
                                </button>
                            
                    </div>  
                    <br/>
                    <div>
                                <button >
                                    View all your past and current reimbursements
                                </button> 
                    </div>  
                    <br/>      
                    <div>   
                           
                                <button >
                                    View all reimbursements
                                </button>
                            
                    </div>  
                    <br/>
                    <div>
                                <button >
                                    View all Employees
                                </button> 
                    </div>  
                    <br/> 
                    <div>   
                           
                                <button >
                                    Log Out
                                </button>
                            
                    </div>  
                    <br/>    
            </>
        );
    }
}