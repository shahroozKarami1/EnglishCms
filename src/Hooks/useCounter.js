import React   ,  {useState  } from 'react'

export default function useCounter(init) {
    let [counter, setCounter] = useState(init)

    function plusHandler() {
  
      setCounter(prevCount => prevCount + 1)
    }
    function minusHandler() {
      setCounter(prevCount => prevCount - 1)
  
    }

    return  [counter  ,  plusHandler   ,  minusHandler]
}
