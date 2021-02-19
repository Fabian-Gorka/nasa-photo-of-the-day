import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import SpaceStuff from './components/SpaceStuff.js';

function App() {

  const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  const getData = () => {

    axios.get(`${baseUrl}`)
    .then((res) => {
        console.log(res.data)
        setInformation(res.data.explanation);
        setTitle(res.data.title);
        setDate(res.data.date)
        setImage(res.data.url)
        setVideo(res.data.media_type === 'video' ? res.data.url : undefined)
    }).catch(err => {
    console.log(err)
    })
  } 
  useEffect(getData,[]) 
    const [information, setInformation] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [date, setDate] = useState('')
    const [video, setVideo] = useState('')
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <SpaceStuff information = {information} title = {title} date = {date} image = {image} video = {video}/>
    </div>
  );
}

export default App;
