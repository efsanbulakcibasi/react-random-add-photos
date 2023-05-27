import { useState } from 'react'
import './App.css'
import Course from './Course';
function getRandomcourse(){
  const courseArray = ["Angular","Bootstrap","Ccsharp","KompleWeb"];
  return courseArray[Math.floor(Math.random()* courseArray.length)]
}
function App() {
  const [cousrse, setCousrse] = useState([])

  const handleClik  = () => {
    setCousrse([...cousrse,getRandomcourse()]);
  }
  const courseList = cousrse.map((course,index) => {
    return <Course courseName={course} key={index}/> 
  })
  return (
    <div className='App'>
      <button className='appButton' onClick={handleClik}>Kurs Ekle</button>
      <div className='courseList'>{courseList}</div>
    </div>
  )
}

export default App
