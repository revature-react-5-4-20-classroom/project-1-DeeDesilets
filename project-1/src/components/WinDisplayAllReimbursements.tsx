import React from "react";

import { Container, Row, Col, Spinner, Button, Input, Label, NavItem, Nav } from "reactstrap";

import { getAllReimbursements, getReimbursementsByAUID } from "../api/Employee1";

import { toast } from "react-toastify";

import  Reimbursement  from "../models/Reimbursement";

import ObjectTable from "./TableModel";
import {  NavLink } from "react-router-dom";





interface IWinDisplayAllReimbursementsState {
  AUID: number;

  reimbursements: Reimbursement[];

  reimbursementsLoaded: boolean;

}



export default class WinDisplayAllReimbursements extends React.Component<any, IWinDisplayAllReimbursementsState> {

  constructor(props: any) {

    super(props);

    this.state = {
      AUID: 0,

      reimbursements: [],

      reimbursementsLoaded: false,

    };

  }


  fetchReimbursements = async () => {

    try {

      this.setState({

        reimbursements: await getAllReimbursements(),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  };

  componentDidMount = async () =>{

    await this.fetchReimbursements();

  };
 
  fetchPendingReimbursements= () => {

    try {

      this.setState({

       reimbursements : this.state.reimbursements.filter(r => r.status === 3),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  };

  fetchResolvedReimbursements = () => {

    try {

      this.setState({

        reimbursements : this.state.reimbursements.filter(r => (r.status === 1 || r.status === 2)),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  };

  

  setAUID = (changeEvent: any) => {

console.log(changeEvent);

    this.setState({



      AUID: parseInt(changeEvent.currentTarget.value, 10),



    });

    console.log(this.state.AUID);

  };

  fetchAUIDReimbursements =  () =>  {
  
  

    try {
  
      this.setState({
  
        

        reimbursements:  this.state.reimbursements.filter(r => r.author === this.state.AUID),
  
        reimbursementsLoaded: true,
      });
    }  catch (e) {

      toast(e.message, {type:"error"});

  }

};
  

   
 render() {

    return (

      <Container>

        <Button onClick={this.fetchReimbursements}>All reimbursements</Button>
        <Button onClick={this.fetchPendingReimbursements}> Pending reimbursements</Button>
        <Button onClick={this.fetchResolvedReimbursements}>Resolved reimbursements</Button>
        
        <Label for="AUID">Enter Employee ID here:</Label><Input  onChange= {this.setAUID} value= {this.state.AUID} type="text" name="AUID" id="AUID"  ></Input><Button name="AUID" onClick={this.fetchAUIDReimbursements}>Submit</Button>
        

        <Row>

          <Col md={{ size: 8 }}>

            <h4>All Reimbursements for All Employees</h4>

            {this.state.reimbursementsLoaded ? (

              <ObjectTable objects={this.state.reimbursements} />

            ) : (

              <Spinner />

            )}

          </Col>

          

        </Row>

      </Container>

    );

  }
}
