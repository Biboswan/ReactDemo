import React, { useEffect } from 'react';
import useCounter from "./custom-hooks/useCounter"
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button"

const  App = () => {
  const [counter1, incrememt1] = useCounter(0);
  const [counter2, incrememt2] = useCounter(0);

  useEffect(()=> {
    console.log('Hey Root component mounted');
  },[]);

  useEffect(() => {
    console.log('Counter1 Updated!');
  },[counter1]);

  useEffect(() => {
    console.log('Counter2 Updated!');
  }, [counter2]);

  return(
    <>
    <Header title="See Button Counter"/>
      <main><div className="btn-container"><Button onClick={incrememt1} value={counter1} /><Button onClick={incrememt2} value={counter2} /></div></main>
    </>
  )
    
  };

export default App;
