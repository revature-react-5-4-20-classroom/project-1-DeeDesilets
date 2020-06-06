import React from "react";

import { Container, Row, Col, Spinner } from "reactstrap";

import  TableModel  from "./TableModel";

import { toast } from "react-toastify";

import { getAllUsers } from "../api/Employee";



export default class UserPage extends React.Component<any, any> {

  constructor(props: any) {

    super(props);

    this.state = {

      users: [],

      usersLoaded: false,

    };

  }



  async componentDidMount() {

      try {

    this.setState({

      users: await getAllUsers(),

      usersLoaded: true,

    });

    } catch (e) {

        toast(e.message, {type:"error"});

    }

  }



  render() {

    return (

      <Container>

        <Row>

          <Col md={{ size: 5 }}>

            <h4>Users</h4>

            {this.state.usersLoaded ? (

              <TableModel objects={this.state.users} />

            ) : (

              <Spinner />

            )}

          </Col>

        </Row>

      </Container>

    );

  }

}