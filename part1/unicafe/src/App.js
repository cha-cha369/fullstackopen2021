import React, { useState } from 'react'

const StatisticLine   = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
  const all = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad - 1) / all
  const positive = clicks.good * (100/all)

  if(all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <StatisticLine  text="good" value ={clicks.good} />
          <StatisticLine  text="neutral" value ={clicks.neutral} />
          <StatisticLine  text="bad" value ={clicks.bad} />
          <StatisticLine  text="all" value ={all} />
          <StatisticLine  text="average" value ={average} />
          <StatisticLine  text="positive" value ={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  const[clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const onClickGood = () => setClicks({...clicks, good: clicks.good + 1})
  const onClickNeutral = () => setClicks({...clicks, neutral: clicks.neutral + 1})
  const onClickBad = () => setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <p>Give FeedBack</p>
      <Button text = 'good' onClick = {onClickGood} />
      <Button text = 'neutral' onClick = {onClickNeutral} />
      <Button text = 'bad' onClick = {onClickBad} />
      <Statistics clicks = {clicks}></Statistics>
    </div>
  )
}

export default App


 