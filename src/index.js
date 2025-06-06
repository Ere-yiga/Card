import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){
  return(
    <div className='card'>
      <Image />
      <div className='data'>
        <Intro />
      </div>
    </div>
  )
}

function Image(){
  return(
    <img src="anime.jpg" className ="image" alt="Ereyiga" />
  )
}
function Intro(){
  return(
    <div className='data'>
      <h1>Ereyiga</h1>
      <p>
        Hey there! I am Ereyiga, an aspiring full stack dev buh currently in the frontend phase, learning React.
        Beyond coding, I enjoy playing socccer, be it gaming online with friends or hitting the field for a match. 
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);