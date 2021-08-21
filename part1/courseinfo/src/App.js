import React from 'react'

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name : 'Fundamentals of React',
        exercises : 10
      },
      {
        name : 'Using props to pass data',
        exercises : 7
      },
      {
        name : 'State of a component',
        exercises : 14
      },
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part.name} : {props.part.exercises}
    </div>
  )
}

const Total = (props) => {
  var total = 0
  props.parts.forEach(item => {
    total += item.exercises;
  });    
  return (
    <p>Number of exercises {total}</p>
  )
}

export default App