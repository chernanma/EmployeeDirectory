import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function CardEmployee(props) {
  const width={ width: "100%" };
  return (
    <div class="card" style={width}>
      <div class="card-header"><h1>{props.firstname} {props.lastname}</h1></div>
      <div class="card-body">
        <Row>
          <Col size="md-9">
            <h2>Phone: {props.phone}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Address: </h2>
            <h2>Age: {props.age}</h2>
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
