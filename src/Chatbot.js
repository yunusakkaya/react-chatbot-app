import React, { useState } from 'react';
import axios from 'axios';

function ChatbotApp() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your Django API endpoint
    axios.post('http://127.0.0.1:8000', { user_input: userInput })
      .then((response) => {
        setBotResponse(response.data.bot_response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Chatbot</h1>

      {/* User input form */}
      <form id="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>

      {/* Display chatbot responses */}
      <div id="chat-display">
        {botResponse && (
          <div>
            <p>User: {userInput}</p>
            <p>Bot: {botResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatbotApp;


