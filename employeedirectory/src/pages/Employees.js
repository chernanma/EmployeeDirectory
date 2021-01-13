import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import Alert from "../components/Alert";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


class Employees extends Component {
  state = {
    search: "",    
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomEmployee()
      .then(res =>{
        console.log(res.data.results);
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      } )
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (

      <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Employee Directory</h1>        
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">        
            <div>
              <Container style={{ minHeight: "80%" }}>
                <h1 className="text-center">Search </h1>
                <Alert
                  type="danger"
                  style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                >
                  {this.state.error}
                </Alert>
                <SearchForm
                  
                  handleInputChange={this.handleInputChange}
                  
                />
                <SearchResults results={this.state.results} />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>    
      </div>
    );
  }
}

export default Employees;