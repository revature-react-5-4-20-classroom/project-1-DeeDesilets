import React from "react";

import { Container, Row, Col, Spinner } from "reactstrap";

import  TableModel  from "./TableModel";

import { getAllBooks } from "../api/library-client";

import { toast } from "react-toastify";

import { Book } from "../models/Book";

import { NewBookForm } from "./new-book-form";



interface IReimbursementsPageState {

  books: Book[];

  booksLoaded: boolean;

}



export default class ReimbursementsPage extends React.Component<any, IReimbursementsPageState> {

  constructor(props: any) {

    super(props);

    this.state = {

      books: [],

      booksLoaded: false,

    };

  }



  async componentDidMount() {

    await this.fetchBooks();

  }



  addNewBook = async () => {

    await this.fetchBooks();

  }



  fetchBooks = async () => {

    try {

      this.setState({

        books: await getAllBooks(),

        booksLoaded: true,

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

            <h4>Books</h4>

            {this.state.booksLoaded ? (

              <ObjectTable objects={this.state.books} />

            ) : (

              <Spinner />

            )}

          </Col>

          <Col md={{size: 4}}>

            {this.props.loggedInUser ? <NewBookForm addBook={this.addNewBook} /> : <h4>Must login to add books</h4>}

          </Col>

        </Row>

      </Container>

    );

  }

}