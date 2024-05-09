import React from 'react'

const Button = () => {

    const handleClick = ()  => {
        alert("Sos un crack")
    }

  return (
    <div>
      <button onClick={handleClick}>Se Feliz</button>
    </div>
  )
}

export default Button
