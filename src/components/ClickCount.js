import {useState} from 'react'

function ClickCount() {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        if(count < 10){
            setCount(count + 1)
        }  
    }

    function handleDecrement() {
        if(count > 0) {
            setCount(count - 1)
        } 
    }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default ClickCount;
