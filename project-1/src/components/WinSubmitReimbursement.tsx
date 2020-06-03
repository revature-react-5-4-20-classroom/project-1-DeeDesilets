import React from 'react';

interface IWinSubmitReimbursementProps {
    history: any;
    role: string;
}

export default class WinSubmitReimbursement extends React.Component <IWinSubmitReimbursementProps> {

    path: string = " ";
    nextPath = (path: any) => {
    if (this.props.role && (this.props.role ==='finance manager' || this.props.role ==='admin'))  {
      path = '/manager"';
    } else if (this.props.role && this.props.role === 'employee') {
      path = '/employee'
    } else {}
    this.props.history.push({path});
    }


    render()  {
        return (
            <>
                <p>Please complete all fields.</p>
                <form name='newreimbursement'  >
                <label>Employee Id:</label>
                <input id="author" type="number"/> 
                <br/>
                <br/>
                <label>Amount:</label>
                <input id="amount" type="number" required></input>
                <br/>
                <br/>
                <label>Date Submitted:</label>
                <input id="datesubmitted" type="number"></input>
                <br/>
                <br/>
                <label>Description:</label>
                <input id="description" type="text"></input>
                <br/>
                <br/>
                <label>Type:</label>
                <input id="typel" type="number"></input>
                <br/>
                <br/>
                <button type="submit">Submit</button>
                <br/>  
                <br/>    
                <input type="file">upload receipt here</input>
                  

          
                <button onClick={() => this.nextPath(this.path)}>
                    Menu Page
                  </button>

                
                <br/> 
                <br/>
                <button onClick={() => this.nextPath('/logout')}>Log Out</button>
                <br/> 
                <br/>    
            </form>
            </>
        );
    }
}