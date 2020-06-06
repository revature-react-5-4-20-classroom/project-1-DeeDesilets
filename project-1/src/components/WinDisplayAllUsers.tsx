import React from "react";

import { Container, Row, Col, Spinner, Button } from "reactstrap";

import { getAllUsers } from "../api/Employee";

import { toast } from "react-toastify";

import  User  from "../models/User";

import ObjectTable from "./TableModel";





interface IWinDisplayAllUsersState {

  users: User[];

  usersLoaded: boolean;

}



export default class WinDisplayAllUsers extends React.Component<any, IWinDisplayAllUsersState> {

  constructor(props: any) {

    super(props);

    this.state = {

      users: [],

      usersLoaded: false,

    };

  }



  async componentDidMount() {

    await this.fetchUsers();

  }



  



  fetchUsers = async () => {

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

        <Button> Add New Employee </Button>
        <Button> Delete An Employee </Button>

        <Row>

          <Col md={{ size: 8 }}>

            <h4>All Employees</h4>

            {this.state.usersLoaded ? (

              <ObjectTable objects={this.state.users} />

            ) : (

              <Spinner />

            )}

          </Col>

          

        </Row>

      </Container>

    );

  }

}