import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {

  return (
    <div className='App'>
      <div className='App-context'>
        <h1>
          Lista de compras
        </h1>
        <Form />
      </div>
    </div>
  );
}
export default App;