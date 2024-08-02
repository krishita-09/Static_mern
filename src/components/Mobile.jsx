import React from 'react'

Mobile('abc','xyz','cde')

 function Mobile(props){
  return (
    <>
    <p>Brand: {props.brand}</p>
    <p>Rating: {props.rating}</p>
    <p>Color: {props.color}</p>
    </>
  )
}

export default Mobile

