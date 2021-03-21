import React, { useState } from 'react'

const ButtonStatistics = ({buttonType, clickCount}) => { //
  return (
    <div>
      <p> {buttonType} {clickCount} </p>
    </div>
  )
}

const AdditionalButtonStat = ({good, neutral, bad}) => {
  let total = 0, average = 0, positivePercent = 0
  total = good + neutral + bad
  if(total > 0)
  {
    average = ((good*1) + (neutral*0) + (bad * -1))/ total
    positivePercent = (good * 100)/total
  }

  return (
    <div>
      <p> all: {total} </p>
      <p> average: {average} </p>
      <p> positive: {positivePercent}% </p>
    </div>
  )
}

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

const App = () => {
  // save clicks of each button to its own state
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

  const average = (good, neutral, bad) => {
    let total = 0, average = 0
    total = good + neutral + bad
    if(total > 0)
    {
      average = ((good*1) + (neutral*0) + (bad * -1))/ total
    }

    return average
  }

  const positivePercent = (good, neutral, bad) => {
    let total = good + neutral + bad
    
    if(total > 0)
    {
      return (good * 100)/total + "%"
    }

    return "0%"
  }

  return (
    <div>
      <h1> Give feedback </h1>
      <button onClick={increaseGood}> good </button>
      <button onClick={increaseNeautral}> neutral </button>
      <button onClick={increaseBad}> bad </button>

      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      {/* <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good+neutral+bad} />
      <Statistic text="average" value={average(good, neutral, bad)} />
      <Statistic text="positive" value={positivePercent(good, neutral, bad)} /> */}
    </div>
  )
}

export default App