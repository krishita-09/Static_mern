
import { useState } from 'react'


// let name = ''




const Event_Handling = () => {
    const [name, setName] = useState('This is name')
    function handlerChange(e){
        console.log(e.target.value)  
      //   name = e.target.value 
      setName(e.target.value)
      console.log(name)
    }
  return (
    <div>
        <input type = "text" style = {{margin: "2em"}} onChange={handlerChange}></input>
        {/* <button onClick={() => x = handlerChange()}>Submit</button>
        <p>{x}</p> */}
        <p>{name}</p>

        
    </div>
  )
}

export default Event_Handling
