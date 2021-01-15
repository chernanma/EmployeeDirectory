import React from "react";
import "./style.css";
import CardEmployee from "../CardEmployee";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.email} className="list-group-item">
          <CardEmployee 
            firstname={result.name.first}
            lastname={result.name.last}
            phone={result.phone}
            email={result.email}
            image={result.picture.large}
            age={result.registered.age}
            housenumber={result.location.street.number} 
            streetname={result.location.street.name}
            city={result.location.city}
            zipcode={result.location.postcode}
            state={result.location.state}            
          />            
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
