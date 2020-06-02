import React from 'react';

export default class WinUpdateReimbursements extends React.Component  {

    render()  {
        return (
            <form name='newreimbursement'  >
                <label>Employee Number:</label>
                <input id="author" type="number"></input>
                <br/><br/>
                <label>Amount:</label>
                <input id="amount" type="number"></input>
                <br/><br/>
                <label>Date Submitted:</label>
                <input id="datesubmitted" type="number"></input>
                <br/><br/>
                <label>Description:</label>
                <input id="description" type="text"></input>
                <br/><br/>
                <label>Type:</label>
                <input id="typel" type="number"></input>
                <br/><br/>
                <button id="submit" type="submit">Submit</button>
                <br/><br/>
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
        );
    }
}