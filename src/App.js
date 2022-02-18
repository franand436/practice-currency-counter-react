import React, { useEffect} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://freecurrencyapi.net/api/v2/latest?apikey=0d7dce40-905c-11ec-949f-d550ba5f4fec'

function App() {

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow />
    <div className='equals'>=</div>
    <CurrencyRow />
    </>
  );
}

export default App;
