import  React from 'react';
import User from '../models/User';
import { NavItem, Nav, Button } from 'reactstrap';
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
                 <h1> Hello, ${this.props.loggedInUser.firstName} ${this.props.loggedInUser.lastName} Welcome back. </h1>
                 
                 <h3>what would you like to start with today?</h3>
            
                <Nav tabs> 

                 <NavItem>
            
                    <NavLink  to="/submit" className="nav-link" activeClassName="active">Submit a Reimbursement</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink hidden={!(this.props.loggedInUser )} to="/user" className="nav-link" activeClassName="active">View your own employee profile</NavLink>

                </NavItem>   

                <NavItem>

                    <NavLink hidden={!this.props.loggedInUser} to="/reimbursements" className="nav-link" activeClassName="active">Reimbursements</NavLink>

                </NavItem>

                <NavItem>       

                    <NavLink hidden={!(this.props.loggedInUser && (this.props.loggedInUser.role === 'admin' || this.props.loggedInUser.role === 'finance manager'))} to="/allusers" className="nav-link" activeClassName="active">All Users</NavLink>

                </NavItem>

                <NavItem>

                    <NavLink hidden={!(this.props.loggedInUser && (this.props.loggedInUser.role === 'admin' || this.props.loggedInUser.role === 'finance manager'))} to="/allreimbursements" className="nav-link" activeClassName="active">All Reimbursements</NavLink>

                </NavItem>

                <NavItem tag={()=>{return <Button  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />
      
            </Nav>
      
            </>
        );

    }

}                               