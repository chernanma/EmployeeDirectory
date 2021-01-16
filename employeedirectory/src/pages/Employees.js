import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


class Employees extends Component {
  // Creating state that contains variables to be used
  state = {
    search: "",
    sortby: "",    
    results: [], 
    filterResults: [],   
    error: ""
  };

  // When the component mounts, get a list of all Employees - Users from the API and updates the this.state.results and this.state.filterResults
  componentDidMount() {
    API.getRandomEmployee()
      .then(res =>{
        console.log(res.data.results);
        this.setState({ results: res.data.results });
        this.setState({ filterResults: res.data.results});
        console.log(this.state.results);
      } )
      .catch(err => console.log(err));
  }

  //Funtion that will be executed everytime a letter is entered in the search input and will filter the results 
  handleInputChange = event => {       
    console.log(this.state.results); 
    //  Filtering Results
    const listEmployees = this.state.results.filter(res => (res.name.first.toLowerCase() + " " + res.name.last.toLowerCase()).indexOf(event.target.value.toLowerCase()) >= 0);   
    this.setState({ filterResults: listEmployees });
  };

  // Function to sort result by option choosen from Sort by picklist
  sortBy = event => {
    console.log(event.target.value.toLowerCase());
    const sortOptionValue = event.target.value.toLowerCase();
    if (sortOptionValue === 'first name'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.name.first > b.name.first) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
    if (sortOptionValue === 'last name'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
    if (sortOptionValue === 'years working'){
      const listEmployeesSorted = this.state.results.sort((a,b) => (a.registered.age > b.registered.age) ? 1 : -1);
      console.log(listEmployeesSorted);
      this.setState({ filterResults: listEmployeesSorted });
    }
   
  };

  render() {
    return (

      <div>
      <Hero backgroundImage="search.jpg"  >
        <h1>Employee Directory</h1>        
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">        
            <div>
              <Container style={{ minHeight: "80%" }}>             
                <SearchForm                  
                  handleInputChange={this.handleInputChange}
                  sortBy={this.sortBy}
                />
                <SearchResults results={this.state.filterResults} />
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
