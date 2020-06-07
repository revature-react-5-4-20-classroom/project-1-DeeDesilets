import  React from 'react';
import User from '../models/User';
import { NavItem, Nav} from 'reactstrap';
import { NavLink,  } from 'react-router-dom';


interface IWinManagerPageProps
{   loggedInUser: User;
    logoutUser: ()=>void;
    history: any;
}


export default class WinManagerPage extends React.Component <IWinManagerPageProps>  {

    nextPath(path: any) {
        this.props.history.push(path);
      }

    render () {
        return (
            <>
                 <h1> Hello, {this.props.loggedInUser.firstName} {this.props.loggedInUser.lastName} Welcome back. </h1>
                 
                 <h3>what would you like to start with today?</h3>
            
                <Nav tabs> 

                 <NavItem>
            
                    <NavLink  to="/submit" className="nav-link" activeClassName="active">Submit a reimbursement</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink  to="/user" className="nav-link" activeClassName="active">View your own employee profile</NavLink>

                </NavItem>   

                <NavItem>

                    <NavLink to="/reimbursements" className="nav-link" activeClassName="active">View your own reimbursements</NavLink>

                </NavItem>

                <NavItem>       

                    <NavLink  to="/allusers" className="nav-link" activeClassName="active">View all employee profiles</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink to="/allreimbursements" className="nav-link" activeClassName="active">View all employees reimbursements</NavLink>

                </NavItem>

                <NavItem>
                    
                    <NavLink to="/updatereimbursement" className="nav-link" activeClassName="active">Approve/Deny a reimbursement</NavLink>
                    
                </NavItem>
      
            </Nav>
      
            </>
        );

    }

}                               