import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'
import {useNavigate} from 'react-router-dom'

const Introduce = () => {
    const difficulty=["EASY","MEDIUM","HARD"]
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange, "difficultyChange");

    const startQuiz = () => {
      if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)

      }
    }
  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src="https://tse1.mm.bing.net/th/id/OIG4.nYHG3RhIOulpFfsXHSa4?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
        <Dropdown data= {difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className= 'introduce-btn'>Start Quiz</div>
      </div> 
    </div>
  )
}

export default Introduce