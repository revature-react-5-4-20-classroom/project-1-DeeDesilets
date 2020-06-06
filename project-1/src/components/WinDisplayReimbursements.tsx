import React from "react";

import { Container, Row, Col, Spinner } from "reactstrap";

import  TableModel  from "./TableModel";

import { getReimbursementsByAUID } from "../api/Employee";

import { toast } from "react-toastify";

import  Reimbursement from "../models/Reimbursement";

import User from "../models/User";


interface IWinDisplayReimbursementsProps {
  loggedInUser: User;
}



interface IReimbursementsPageState {

  reimbursements: Reimbursement[];

  reimbursementsLoaded: boolean;

}



export default class ReimbursementsPage extends React.Component<any, IReimbursementsPageState> {

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



  



  fetchReimbursements = async () => {

    try {

      this.setState({

        reimbursements: await getReimbursementsByAUID(this.props.loggedInUser.userId),

        reimbursementsLoaded: true,

      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  }



  render() {

    return (

      <Container>

        <Row>

          <Col md={{ size: 8 }}>

            <h4>All Your Reimbursements</h4>

            {this.state.reimbursementsLoaded ? (

              <TableModel objects={this.state.reimbursements} />

            ) : (

              <Spinner />

            )}

          </Col>

          

        </Row>

      </Container>

    );

  }

}











































