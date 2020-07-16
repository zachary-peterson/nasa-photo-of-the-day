import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './Photo'
import Second from './Second'
import axios from 'axios'

function App() {
  const apodImage = 'https://api.nasa.gov/planetary/apod?api_key=B9rteI2FCkUZwn1xdPHMKWEd2gNQBhjaQrjJzXsP'
  const marsImages = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=B9rteI2FCkUZwn1xdPHMKWEd2gNQBhjaQrjJzXsP'

  let [data, setData] = useState('')

  let [secondData, setSecondData] = useState('') 
  
  
  

  useEffect(() => {
    axios.get(apodImage)
    .then(res => {
      console.log('Success on line 18, Data changed')
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.log('Error line 21')
    })
  }, [])

  useEffect(() => {
    axios.get(marsImages)
    .then(res => {
      console.log('Line 29 good: Second Data changed')
      console.log(res.data);
      setSecondData(res.data.photos);
    })
    .catch(err => {
      console.log('Error Line 41')
    })
  }, [])

  console.log(secondData)
  return (
    <div className="App">
      <div className="choose-one">
        <button className="btn">Up</button>
        <button className="btn">Down</button>
      </div>
        <Photo data={data}/>
        <Second data={secondData}/>
      </div>
        
       

  );
}

export default App;
