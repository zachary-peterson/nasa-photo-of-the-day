import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './Photo'
import Second from './Second'
import axios from 'axios'

function App() {
  const apodImage = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  const marsImages = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'

  let [data, setData] = useState()

  const boooo = {"copyright":"Philipp Salzgeberfoto-webcam.euAdam Block","date":"2020-07-15","explanation":"Comet NEOWISE has been wowing photographers around much of the world during dawn and dusk, at the margins of day and night.  For the most northern residents of planet Earth, however, the comet circles the North Star and never sets. The night part of this circular arc is apparent in the featured composite of images assembled from a webcam located at a ski resort in the Swiss Alps.  Images were selected at 30-minute intervals throughout the night from July 12th -13th. Comet NEOWISE (C/2020 F3) will continue to become more accessible to northern hemisphere observers as its motion places it higher in the sky each evening after sunset over the next few weeks, as it begins its outbound journey.  As with all comets, departure from the inner Solar System comes with inevitable fading.  Binoculars are the best way to find and observe the comet visually.    Notable Images of Comet NEOWISE Submitted to APOD:  || July 14  || July 13  || July 12  || July 11  || July 10 & earlier ||","hdurl":"https://apod.nasa.gov/apod/image/2007/NeowiseAlps_salzgeber_4000.jpg","media_type":"image","service_version":"v1","title":"Comet NEOWISE over the Swiss Alps","url":"https://apod.nasa.gov/apod/image/2007/NeowiseAlps_salzgeber_960.jpg"}

  let [secondData, setSecondData] = useState(null) 
  
  const beeeep = {"photos":[{"id":424926,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424927,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424928,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424929,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631180503678E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424930,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631180305215E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424931,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631170503677E03_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424932,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631170305214E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424933,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631160503676E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424934,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631160305213E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424935,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631150503675E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424936,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631150305212E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424937,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631140503674E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424938,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631140305211E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424939,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631130503673E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424940,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631130305210E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424941,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631120305209E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424942,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631120503672E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424943,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631110503671E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424944,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631110305208E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424945,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631100503670E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424946,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631100305207E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424947,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631090503669E02_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424948,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631090305206E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424949,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631080503668E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":424950,"sol":1000,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631080305205E01_DXXX.jpg","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}}]}
  
  

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
      setSecondData(res.data);
      console.log(secondData);
    })
    .catch(err => {
      console.log('Error Line 41')
    })
  }, [])

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
