import React, { useState } from 'react'
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = props => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.from(Array(props.anecdotes.length), () => 0)
  )

  const onClickVote = () => {
    const tempVotes = [...votes];
    tempVotes[selected]++;
    setVotes(tempVotes);
  }

  const onClickNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  }

  const getMaxVotesAndIndex = v => {
    let maxVotes = 0;
    let maxVotesIndex = 0;
    for (let i = 0; i < v.length; i++) {
      if (v[i] > maxVotes) {
        maxVotes = v[i];
        maxVotesIndex = i;
      }
    }
    return [maxVotes, maxVotesIndex];
  };

  const [maxVotes, maxVotesIndex] = getMaxVotesAndIndex(votes);

  return (
    <div>
      <h4>Anecdotes of today</h4>
      <p>{props.anecdotes[selected]}</p>
      <Button text = 'vote' onClick = {onClickVote} />
      <Button text = 'next anecdotes' onClick = {onClickNextAnecdotes} />
      <h4>Anecdotes with most values</h4>
      <p>{props.anecdotes[maxVotesIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));