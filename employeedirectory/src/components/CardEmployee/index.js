import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function CardEmployee(props) {
  const style={ width: "100%", height: "auto" };
  
  return (
    <div className="card" style={style}>
      <div className="card-header"><h3>{props.firstname} {props.lastname}</h3></div>
      <div className="card-body">
        <Row>
          <Col size="md-4">            
            <span><h5>Email: </h5>{props.email}</span>            
            <span><h5>Phone: </h5>{props.phone}</span>            
          </Col>   
          <Col size="md-4">
            <span><h5>Address: </h5> {props.housenumber} {props.streetname}, {props.city}, {props.state} {props.zipcode}</span>                
            <span><h5>Years Working: </h5>{props.age}</span>
          </Col>
          <Col size="md-4">
            <img alt="Pic" src={props.image} className="img-fluid" />
          </Col>
        </Row>        
      </div>      
    </div>
  );
}

export default CardEmployee;
