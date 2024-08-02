import React from 'react'

const Parent = () =>{
    return (
        <>
        <ConditionalRendering  isValid = {true}/>
        </>
    )
    
}

// function val(props) {
//     return <h1>Valid password</h1>;
// }
  
// function notval(props) {
//     return <h1>Invalid Password</h1>;
// }

const ConditionalRendering = (props) => {
  
    
    if(props.isValid)
    {
        return 'Valid Password'
    }
    else{
        return <h1>Invalid Password</h1>
    }

    // return(
    // <>
    // (<div>This is {props.isValid}</div>)
    // {/* {props.isValid ? <h1>Valid Password</h1> : <h1>Invalid Password</h1>} */}
    // </> 
//   )
}


export default Parent
