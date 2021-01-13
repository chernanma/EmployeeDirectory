import React from "react";
import "./style.css";
import CardEmployee from "../CardEmployee";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        // <li key={result} className="list-group-item">
          <CardEmployee 
            firstname={result.name.first}
            lastname={result.name.last}
            phone={result.cell}
            image={result.picture.thumbnail}
          />            
        // </li>
      ))}
    </ul>
  );
}

export default SearchResults;
