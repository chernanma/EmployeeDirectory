import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function CardEmployee(props) {
  return (
    <div class="card text-center">
      <div class="card-header">{props.firstname} {props.lastname}</div>
      <div class="card-body">
        <Row>
          <Col size="md-12">
            <h1>{props.phone}</h1>
          </Col>
          <Col size="md-3">
          </Col>
          <Col size="md-3">
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
