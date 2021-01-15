import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function CardEmployee(props) {
  const width={ width: "100%" };
  return (
    <div className="card" style={width}>
      <div className="card-header"><h1>{props.firstname} {props.lastname}</h1></div>
      <div className="card-body">
        <Row>
          <Col size="md-9">
            <h4>Phone: {props.phone}</h4>
            <h4>Email: {props.email}</h4>
            <h4>Street: {props.housenumber} {props.streetname}</h4>
            <h4>City: {props.city}</h4> <h4> Zip Code: {props.zipcode} </h4>
            <h4>State: {props.state}</h4>            
            <h4>Years Working: {props.age}</h4>
          </Col>   
          <Col size="md-3">
            <img alt="Pic" src={props.image} className="img-fluid" />
          </Col>
        </Row>        
      </div>      
    </div>
  );
}

export default CardEmployee;
