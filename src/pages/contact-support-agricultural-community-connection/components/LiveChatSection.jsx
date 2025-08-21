import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveChatSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'AgriPredict Support',
      message: 'Hello! I\'m Sarah, an agricultural specialist. How can I help you with your crop predictions today?',
      timestamp: new Date(Date.now() - 300000),
      isSupport: true
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const supportAgents = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Agricultural Specialist',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      status: 'online',
      expertise: 'Crop Predictions, Weather Analysis'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      role: 'Senior Agronomist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      status: 'online',
      expertise: 'Soil Science, Yield Optimization'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Technical Support',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      status: 'busy',
      expertise: 'Platform Issues, API Integration'
    }
  ];

  const quickQuestions = [
    'How do I interpret prediction confidence levels?',
    'What weather factors affect crop yields most?',
    'How often are predictions updated?',
    'Can I export prediction data?',
    'How accurate are the AI predictions?'
  ];

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      const userMessage = {
        id: chatMessages?.length + 1,
        sender: 'You',
        message: newMessage,
        timestamp: new Date(),
        isSupport: false
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages?.length + 2,
          sender: 'AgriPredict Support',
          message: 'Thank you for your question! Let me help you with that. Our agricultural experts are analyzing your query and will provide detailed guidance shortly.',
          timestamp: new Date(),
          isSupport: true
        };
        setChatMessages(prev => [...prev, supportResponse]);
      }, 1500);
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Live Agricultural Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect instantly with agricultural experts during critical farming periods. Our specialists are available to help with predictions, technical issues, and farming guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Agents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Icon name="Users" size={24} className="mr-3" />
                Available Experts
              </h3>
              
              <div className="space-y-4">
                {supportAgents?.map((agent) => (
                  <div key={agent?.id} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/30 growth-transition">
                    <div className="relative">
                      <img
                        src={agent?.avatar}
                        alt={agent?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        agent?.status === 'online' ? 'bg-success' : 'bg-warning'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{agent?.name}</h4>
                      <p className="text-sm text-muted-foreground">{agent?.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{agent?.expertise}</p>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      agent?.status === 'online' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                    }`}>
                      {agent?.status}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Clock" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-primary">Support Hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Mon-Sun: 5:00 AM - 10:00 PM EST\n
                  Extended hours during planting/harvest seasons
                </p>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={24} />
                  <div>
                    <h3 className="font-semibold">Live Agricultural Support</h3>
                    <p className="text-sm opacity-90">Connected to agricultural experts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm">Online</span>
                </div>
              </div>

              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/10">
                {chatMessages?.map((message) => (
                  <div
                    key={message?.id}
                    className={`flex ${message?.isSupport ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message?.isSupport
                        ? 'bg-white border border-border' :'bg-primary text-white'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-sm font-medium ${
                          message?.isSupport ? 'text-primary' : 'text-white/90'
                        }`}>
                          {message?.sender}
                        </span>
                        <span className={`text-xs ${
                          message?.isSupport ? 'text-muted-foreground' : 'text-white/70'
                        }`}>
                          {formatTime(message?.timestamp)}
                        </span>
                      </div>
                      <p className={`text-sm ${
                        message?.isSupport ? 'text-foreground' : 'text-white'
                      }`}>
                        {message?.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions?.slice(0, 3)?.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setNewMessage(question)}
                        className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-primary/10 hover:text-primary growth-transition"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e?.target?.value)}
                    onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your agricultural question..."
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary growth-transition"
                  />
                  <Button
                    onClick={handleSendMessage}
                    variant="default"
                    iconName="Send"
                    disabled={!newMessage?.trim()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
            <Icon name="Zap" size={32} color="var(--color-primary)" className="mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Instant Responses</h3>
            <p className="text-sm text-muted-foreground">
              Get immediate answers to common agricultural questions and technical issues.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl p-6">
            <Icon name="Users" size={32} color="var(--color-secondary)" className="mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Expert Knowledge</h3>
            <p className="text-sm text-muted-foreground">
              Connect with certified agronomists and agricultural data scientists.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-success/10 to-success/20 rounded-xl p-6">
            <Icon name="Shield" size={32} color="var(--color-success)" className="mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
            <p className="text-sm text-muted-foreground">
              Your farming data and conversations are protected with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChatSection;