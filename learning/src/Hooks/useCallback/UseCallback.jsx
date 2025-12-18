import {useState, useCallback}from 'react'

export const UseCallback = () => {
    const [count, setcount] = useState(0);
    const increment = useCallback(()=>{
        setcount(pre => pre + 1);
    },[]);
  return (
    <>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    </>
  )
}

