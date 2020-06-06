import React from "react";

import { Container, Row, Col, Spinner, Button, Input, Label } from "reactstrap";

import { getAllReimbursements, getReimbursementsBySID } from "../api/Employee";

import { toast } from "react-toastify";

import  Reimbursement  from "../models/Reimbursement";

import ObjectTable from "./TableModel";





interface IWinDisplayAllReimbursementsState {

  reimbursements: Reimbursement[];

  reimbursementsLoaded: boolean;

}



export default class WinDisplayAllReimbursements extends React.Component<any, IWinDisplayAllReimbursementsState> {

  constructor(props: any) {

    super(props);

    this.state = {

      reimbursements: [],

      reimbursementsLoaded: false,

    };

  }



  async componentDidMount() {

    await this.fetchReimbursements();

  }

componentWillUnmount() {

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
        <Label>Enter Employee ID here:</Label><Input type="text"></Input>
        <Button>Update Reimbursement</Button>

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