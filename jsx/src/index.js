// 1) Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom'; 
import MyApp from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen 
root.render(<MyApp />); 