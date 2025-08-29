import React, { useState } from 'react';
import Icon from './AppIcon';
import Button from './ui/Button';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate a response from the bot
      setTimeout(() => {
        const botResponse = { text: "Thank you for your question! Our agricultural experts are analyzing your query and will provide detailed guidance shortly.", sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container bg-white rounded-lg shadow-lg p-4">
      <div className="chatbot-header flex items-center mb-4">
        <Icon name="Chat" size={24} />
        <h2 className="ml-2 text-lg font-semibold">Agricultural Support</h2>
      </div>
      <div className="chatbot-messages h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chatbot-input flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded p-2"
          placeholder="Type your message..."
        />
        <Button onClick={handleSend} variant="default">Send</Button>
      </div>
    </div>
  );
};

export default Chatbot;
