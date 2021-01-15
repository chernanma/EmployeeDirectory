import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function SearchForm(props) { 
  const style={ width: "100%", height: "auto",overflow: "hidden" };
  return (
    
    <form className="search" style={style}>
      <div className="form-group" >
      <Row>       
        <Col size="md-9">
        <label htmlFor="employee">Search by Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"          
          type="text"
          className="form-control"
          placeholder="Type Employee Name to Search"
          id="employee"
        />
        </Col>
        <Col size="md-3">
        <label htmlFor="sortby">Sort by:</label>     
        <select id="sortOptions" onChange={props.sortBy} className="form-control">          
          <option value="Last Name">Last Name</option>
          <option value="First Name">First Name</option>
          <option value="Years Working">Years Working</option>        
        </select>     
        </Col>
        
      </Row>   
      </div>  
    </form>
    
  );
}

export default SearchForm;
