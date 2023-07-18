import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

root.render(
  
        <BrowserRouter>
    <App />
    </BrowserRouter>  

  
)