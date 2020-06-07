import React from "react";

import { Container, Row, Col, Spinner, Button } from "reactstrap";

import {getReimbursementsByAUID } from "../api/Employee1";

import { toast } from "react-toastify";

import  Reimbursement  from "../models/Reimbursement";

import ObjectTable from "./TableModel";

import User from "../models/User";

interface IWinDisplayReimbursementsProps {
  loggedInUser: User;
}


interface IWinDisplayReimbursementsState {

  reimbursements: Reimbursement[];

  reimbursementsLoaded: boolean;

}



export default class WinDisplayReimbursements extends React.Component<IWinDisplayReimbursementsProps, IWinDisplayReimbursementsState> {

  constructor(props: IWinDisplayReimbursementsProps) {

    super(props);

    this.state = {

      reimbursements: [],

      reimbursementsLoaded: false,

    };

  }



  



 fetchReimbursements  = async (userId: number)    => {

    try {

      this.setState({

        reimbursements: await getReimbursementsByAUID (this.props.loggedInUser.userId),
        

        reimbursementsLoaded: true,

      });
      console.log("after state set but inside try block on AUID window fetch");
console.log(this.state.reimbursements);
      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  

  fetchPendingReimbursements = (reimbursements: Reimbursement []) => {

    try {

      this.setState({

       reimbursements : reimbursements.filter(r => r.status === 3),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  fetchResolvedReimbursements = (reimbursements: Reimbursement[]) => {

    try {

      this.setState({

        reimbursements : reimbursements.filter(r => (r.status === 1 || r.status === 2)),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  fetchDeniedReimbursements =  (reimbursements: Reimbursement[]) => {

    try {

      this.setState({

        reimbursements : reimbursements.filter(r => r.status === 2),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  



  render() {

    return (
       

      <Container>

        <Button onClick={() => this.fetchReimbursements(this.props.loggedInUser.userId)}>All reimbursements</Button>
        <Button onClick={() =>this.fetchPendingReimbursements(this.state.reimbursements)}> Pending reimbursements</Button>
        <Button onClick={() =>this.fetchResolvedReimbursements(this.state.reimbursements)}>Resolved reimbursements</Button>
        


        <Row>

          <Col md={{ size: 8 }}>

            <h4>All Your Reimbursements</h4>

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



