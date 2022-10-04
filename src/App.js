import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [random, setRandom] = useState(Math.floor(Math.random() * 10))
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people") 
      const data = await response.json()
      console.log(data)
      setData(data)       
  }
  fetchData()  
  }, [count])

  return (
    <div>
      <h1>what character are you?</h1>
      {data && 
      <div id = "results">
        <h1 id="name1">Name: {data.results[random].name}</h1>
        <h1 id="year">Year of Birth: {data.results[random].birth_year}</h1>
        <h1 id="height">Height: {data.results[random].height}</h1>
        <h1 id="description">Mass: {data.results[random].mass}</h1>
        
         </div>}
         <button onClick={() => setRandom(Math.floor(Math.random() * data.results.length))}>Random</button>
    </div>
  );
}

export default App;
