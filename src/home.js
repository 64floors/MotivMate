import logo from '../src/MotiveMateLogo.png';
import './App.css';
import React from 'react';

function Home(props) {

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logoContainer'>
        <img src={logo} className='App-logo' alt="logo" />
        </div>
        <div className='mainContent'>
        <h1>Find Your Motive Mate</h1>
        <p>Step 1- Write down daily goals on what would be a perfect day</p>
        <p>Step 2- Add some long term goals</p>
        <p>Step 3- Mark your goals complete daily and get a daily score</p>
        <p>Step 4- Track your month and see how high of a score can you get</p>
        <button className='signUp' onClick={props.signUp}>Sign Up Now</button>
        </div>
        <div className='policy'>
        At MotivMate, we take your privacy seriously. This privacy policy describes what information we collect from you, how we use that information, and how we protect your privacy.
        Information we collect:
        When you sign up for our app, we collect your email address. When you create goals in the app, you may also provide additional information related to those goals.
        How we use your information:
        We only use your email address to provide you with access to our app and to communicate with you about our app. We do not share your email address or any other information with third parties.
        How we protect your information:
        We take the security of your information seriously and take steps to protect your information from unauthorized access, disclosure, and use. We use industry-standard security measures to protect your information, including encryption and secure storage.
        Updates to this privacy policy:
        We may update this privacy policy from time to time by posting a new version on our website or within our app. We will notify you of any material changes to this privacy policy by email or through our app.
        Contact us:
        If you have any questions or concerns about this privacy policy or our practices, please contact us at losttower@proton.me .
        </div>
      </header>
    </div>
  );
}

export default Home;
