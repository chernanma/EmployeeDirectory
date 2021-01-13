import React from "react";
import "./style.css";
import CardEmployee from "../CardEmployee";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <CardEmployee 
            firstname={result.name.first}
            lastname={result.name.last}
            phone={result.phone}
            email={result.email}
            image={result.picture.large}
            age={result.registered.age}
          />            
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
