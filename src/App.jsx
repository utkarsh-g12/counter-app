import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function addValue() {
    setCount(count + 1)
  }


  function removeValue() {
    setCount(count - 1)
  }


  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-bold'>Count {count}</h1>
      </div>
      <div className='flex justify-center'>
        <button className='bg-green-600 item-center rounded p-3 outline-transparent m-3 hover:bg-green-400 font-medium' onClick={addValue}>Add Value</button>
        <button className='bg-blue-500 item-center rounded p-3 outline-transparent m-3 hover:bg-blue-300 font-medium' onClick={removeValue}>remove Value</button>
      </div>
    </>
  )
}

export default App
