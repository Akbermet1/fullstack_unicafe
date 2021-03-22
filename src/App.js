import React, { useState } from 'react'


const Statistics = ({good, neutral, bad}) => { // this component will contain all of the statistics (step 3) 
  const positivePercent = (good, neutral, bad) => {
    let total = good + neutral + bad
    
    if(total > 0)
    {
      return (good * 100)/total + "%"
    }

    return "0%"
  }

  const average = (good, neutral, bad) => {
    let total = 0, average = 0
    total = good + neutral + bad
    if(total > 0)
    {
      average = ((good*1) + (neutral*0) + (bad * -1))/ total
    }

    return average
  }

  if(good === 0 && neutral === 0 && bad === 0)
  {
    return (
      <p> no feedback given </p>
    )
  }
  else
  {
    return (
      <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good+neutral+bad} />
      <Statistic text="average" value={average(good, neutral, bad)} />
      <Statistic text="positive" value={positivePercent(good, neutral, bad)} />
      </div>
    )
  }

}

const Statistic = ({text, value}) => {
  return (
    <p> {text} {value}</p>
  )
}

const Button = ({text, event_handler}) => {
  return (
    <button onClick={event_handler}> {text} </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeautral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> Give feedback </h1>
      <Button text="good" event_handler={increaseGood}/>
      <Button text="neutral" event_handler={increaseNeautral}/>
      <Button text="bad" event_handler={increaseBad}/>

      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App