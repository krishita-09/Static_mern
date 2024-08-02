import React from 'react'

const Hello = () => {
  return (
    <>
    <div>
        <h1>Hello</h1>
        <Sample />
        <Greet name="Krishi" rollno = "27" />
        <Greet2 name="Krishi" rollno = "27" />
    </div>
    </>
  )
}

function Sample(){
    return <div>Welcome to React</div>
}

// parameterized function : props
function Greet({name, rollno}){
    return <div>Hello {name} with rollno.: {rollno}</div>
}

function Greet2(props){
    return `Hello ${props.name} with rollno.: ${props.rollno}`
}



export default Hello

// props = {titlevar: title}  object 
