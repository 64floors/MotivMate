import './App.css';
import Form from './form'
import Home from './home'
import { useState } from 'react';
import React from 'react';

function App() {
const [signUp,  setSignUp] = useState(false);

function signUpForm(){
  setSignUp(true);
}

  return (
    <div className="App">
      <header className="App-header">
        {signUp ? <Form /> : <Home signUp={signUpForm}/>}
      </header>
    </div>
  );
}

export default App;
