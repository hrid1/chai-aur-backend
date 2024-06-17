import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [jokes, setJokes] = useState([]);
  // useEffect( () => {
  //   fetch('http://localhost:3000/jokes')
  //   .then(res => res.json())
  //   .then(data => {
  //     setJokes(data);
  //   })
  // }, [])

  useEffect( () => {
    axios.get('http://localhost:3000/api/jokes')
    .then(response => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
     
      <h1>Total Jokes : {jokes.length}</h1>

      <div>
        {
          jokes.map(joke => <p key={joke.id}> <b>{joke.title} : </b> {joke.content}</p>)
        }
      </div>
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
