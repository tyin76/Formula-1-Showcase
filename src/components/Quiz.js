import React, { useEffect, useState } from 'react'
import quizQuestions from './QuizQuestions.js'
import '../styles/Quiz.css'
import { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Quiz() {
  
  //console.log(quizQuestions)

  const [questions, setQuestions] = useState([]) 
  const [answers, setAnswers] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const [showEmoji, setShowEmoji] = useState(false)
  const [emojis, setEmojis] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    chooseRandomQuestions()
  }, [])

  function chooseRandomQuestions() {
    const tempAnswers = [];
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 10)
    selected.forEach((entry) => {
      tempAnswers.push(entry.answer)
    })
    setQuestions(selected)
    setAnswers(tempAnswers)
    
  }

  function handleRefreshClick() {
    chooseRandomQuestions();
    setShowEmoji(false);
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }

  function handleClickSubmit() {
    let localScore = 0;
    const tempEmojis = [];
    answers.forEach((entry, index) => {
      if (entry === userAnswers[index]) {
          localScore++
          tempEmojis[index] = 'correct'
      } else {
        tempEmojis[index] = 'incorrect'
      }
    })
    setEmojis(tempEmojis)
    setShowEmoji(true)
    setScore(localScore)
    window.scrollTo({
      top: 0, 
      left: 0,
      behavior: 'smooth'
    });
  }

  function handleChange(event, index) {
      setUserAnswers({
        ...userAnswers,
        [index] : event.target.value
      })
      
  }

  // console.log(questions)
  // console.log(answers)
  // console.log(userAnswers);
  // console.log(emojis)



  if (questions.length > 0) {
  return (
    <>
    <div className='quiz-container'>

    {showEmoji && <p className='score'> Score: {`${score} / ${questions.length}`}</p>}

      <div className='quiz-questions'>
        {questions.map((entry, index) => {
            return (
              <div className={`individual-question-div question-${index}`}>
                
              {/* {showEmoji && <p className='emoji'>{emojis[index] === 'correct' ? '✅' : '❌'}</p>} */}
              
              <h1 className='question'>{entry.question}</h1> 

              <FormControl>
              <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={userAnswers[index] || ''}
                        name="radio-buttons-group"
                        onChange={(e) => handleChange(e, index)}
                      >
                  {entry.options.map((entry) => {
                    
                    return (
                    
                    <FormControlLabel className={
                      showEmoji 
                        ? (userAnswers[index] === entry 
                            ? (answers[index] === entry ? 'correct' : 'wrong')
                            : (answers[index] === entry ? 'no-answer' : ''))
                        : ''
                    } 
                    value={entry} control={<Radio />} label={entry} />
                    
                    
                  )
                })}
              </RadioGroup>
              </FormControl>
              
              
              
              </div>
            )
        })}
        
            </div>

            
           
            <div className='buttons'>
            
            <div className='submit-button-div'>
              <Button onClick={handleClickSubmit} variant='contained' color='success' className='submit-button'>SUBMIT</Button>
            </div>

            <div className='refresh-button-div'>
              <Button onClick={() => handleRefreshClick()} variant='contained' className='refresh-button'>ANOTHER QUIZ</Button>
              
            </div>

            </div>

            

            




    </div>
    
    
    </>
  )
  }
  else {
    return <h1 className='loading-header'>LOADING...</h1>
  }
} 

export default Quiz
