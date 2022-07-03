import React, { useState } from 'react'
import Character from './Components/Character'
import Header from './Components/Header'

const App = () => {
 const [text,setText] = useState('')


  return (
     <div>
     <Header setText={setText}/>
     <Character text={text}/>
     </div>
  )
}

export default App
