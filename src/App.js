import logo from './logo.svg';
import './App.css';
import React from 'react';
import Chatbot from './Chatbot'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Chatbot App</h1>
        <Chatbot /> {/* Include the Chatbot component */}
      </header>
    </div>
  );
}

export default App;

