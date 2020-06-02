import React from 'react';

export default class WinUpdateReimbursements extends React.Component  {

    render()  {
        return (
            <form name='newreimbursement'  >
                <label>Employee Name:</label>
                <input id="author" type="text"></input>
                <br/><br/>
                <label>Amount:</label>
                <input id="amount" type="password"></input>
                <br/><br/>
                <label>Date Submitted:</label>
                <input id="datesubmitted" type="text"></input>
                <br/><br/>
                <label>Description:</label>
                <input id="description" type="text"></input>
                <br/><br/>
                <label>Type:</label>
                <input id="typel" type="email"></input>
                <button id="submit" type="submit">Submit</button>
                    <br/><br/>
                            
            </form>
        );
    }
}