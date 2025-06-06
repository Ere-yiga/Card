import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){

}
function Card(){
  return(
    <div>
      <img src="anime.jpg" alt="a dp"/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);