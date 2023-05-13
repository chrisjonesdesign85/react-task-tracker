import React from 'react'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'if/else To-Do'
}

// CSS in JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }

export default Header