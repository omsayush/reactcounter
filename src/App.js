import React, { useState } from 'react';

const App = () =>{
  const [count, setCount] = useState(0);

const IncCount = () =>{
  setCount(count + 1);
}

  return(
    <>
    <h1>{count}</h1>
    <button onClick={IncCount}>Click</button>
    </>
  )
}

export default App;
