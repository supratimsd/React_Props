import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)
  const content=()=>{
    age=[2,1]
    sex="male"
  }

  return (
    <>
      <h1 className='bg-blue-500 text-black rounded-xl mb-4'>TailWind React Props</h1>
      <Cards name="sanju" a={content}/>
      <Cards btnText="sanju"/>

    </>
  )
}

export default App
