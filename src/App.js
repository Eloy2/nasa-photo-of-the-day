import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Head from "./Head";
import Body from "./Body";



function App() {
  const [data, setData] = useState([]);

  //Made an array that has numbers 1 through 31 to loop through all days in December
  const days = Array.from(Array(32).keys())
  //removed the number 0 from the array at index 0 since there is no day 0 in any month 
  days.splice(0,1);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-12-19`)
      .then(response => {
        setData(response.data);
      })
      .catch(err => { console.log(err) });
  }, [])

  return (
    <div className="App">
      {console.log(data)}
      {console.log(days)}
      <Head Title={data.title} Date={data.date}/>
      <Body imageUrl={data.url} Text={data.explanation}/>
    </div>
  );
}

export default App;
