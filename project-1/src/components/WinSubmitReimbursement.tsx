import React from 'react';

export default class WinESubmitReimbursement extends React.Component  {

    render()  {
        return (
            <div>
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
                <button >Upload a receipt</button>
                <br/>
                <br/>
                <button>Back to menu</button> 
                <br/> 
                <br/>
                <button >Log Out</button>
                <br/> 
                <br/>    
            </form>
            </div>
        );
    }
}