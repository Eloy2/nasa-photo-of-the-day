import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Head from "./Head";
import Body from "./Body";



function App() {
  //Api key added &date=2019-12-19 to select specific date
  const apiKey = 'https://api.nasa.gov/planetary/apod?api_key=kaIgxanxzDWQfDWJHUsoMwX4RCMJCTxECmMgTDah&date=2019-12-'
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiKey}19`)
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
