import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MainCard from "./components/MainCard";
import uuid from "uuid/v4";

const App = () => {
  const [starWarsChars, setStarWarsChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((response) => {
        const starWarsResponse = response.data.results;
        //console.log(starWarsResponse);
        setStarWarsChars(starWarsResponse);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
    return () => {
      console.log("cleanup work in useEffect");
    };
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starWarsChars.map((characters) => {
        return <MainCard characterData={characters} key={uuid()} />;
      })}
    </div>
  );
}

export default App;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
