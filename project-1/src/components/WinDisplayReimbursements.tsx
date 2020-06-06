import React from "react";

import { Container, Row, Col, Spinner, Button } from "reactstrap";

import {getReimbursementsByAUID, getReimbursementsBySID } from "../api/Employee";

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



  async componentDidMount() {

    await this.fetchReimbursements();

  }



  



  fetchReimbursements = async () => {

    try {

      this.setState({

        reimbursements: await getReimbursementsByAUID (this.props.loggedInUser.userId),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  

  fetchPendingReimbursements = async () => {

    try {

      this.setState({

        reimbursements: await getReimbursementsBySID(3),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  fetchApprovedReimbursements = async () => {

    try {

      this.setState({

        reimbursements: await getReimbursementsBySID(1),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  fetchDeniedReimbursements = async () => {

    try {

      this.setState({

        reimbursements: await getReimbursementsBySID(2),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }

  render() {

    return (
       

      <Container>

        <Button onClick={this.fetchReimbursements}>All reimbursements</Button>
        <Button onClick={this.fetchPendingReimbursements}> Pending reimbursements</Button>
        <Button onClick={this.fetchApprovedReimbursements}>Approved reimbursements</Button>
        <Button onClick={this.fetchDeniedReimbursements}>Denied reimbursements</Button>


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



