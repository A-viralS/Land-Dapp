import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`  py-4 border-radius px-6 bg-amber-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Read More</button>
  )
}

export default Button