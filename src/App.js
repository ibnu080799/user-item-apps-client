import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './components/Profile';
import LearnButtons from './components/LearnButtons';
import LearnForms from './components/LearnForms';

function App() {
  return (
    <div className="container-fluid">
      <div className='container text-center'>
        <h1>Belajar React</h1>
        <p>Lorem Ipsum is a dummy</p>
        <hr />
      </div>
      <div className="container">
        <div className="row">

          <Profile />
          <LearnForms />
        </div>
      </div>

      {/* <LearnButtons /> */}
    </div >
  );
}

export default App;
