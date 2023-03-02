import logo from './MotiveMateLogo.png';
import './App.css';
import React from 'react';

function Form() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logoContainer'>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="formBox">
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeEpaEcenSGTQqyn6S6AlQy7YbmXdbrdajK6s5I6n1qZOgK4w/viewform?embedded=true" 
        width="640" height="684" frameborder="0">Loading…</iframe> */}
        <form action="https://docs.google.com/forms/d/1lB0wq_tskL-sc0yJZJh5z2uiGE81FoaXL47Hja2ckSI/formResponse"  method="POST">
          <label for="name">Name</label>
          <input name="entry.683437260" type="text" id="name"/>
          <label for="email">Email</label>
          <input name="entry.322523339" type="email" id="email"/>
          <label>&nbsp;</label>
          <button type="submit">Submit</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default Form;
