import React, { useEffect } from 'react'

export default function Temp() {


  useEffect(async ()=>{
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])
            
  return (
    <div>
    
    </div>
  )
}
