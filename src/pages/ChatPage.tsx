import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Camera,
  Paperclip,
  Heart,
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'image' | 'analysis';
  quickReplies?: string[];
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm Dr. Paw, your AI vet assistant! 🐾 I'm here to help with any pet health questions. Feel free to share a photo or tell me what's going on with your furry friend!",
      sender: 'ai',
      timestamp: new Date(),
      quickReplies: ["Upload a photo", "My pet is acting strange", "General checkup question"]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content),
        sender: 'ai',
        timestamp: new Date(),
        quickReplies: getQuickReplies(content)
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userMessage: string): string => {
    const responses = [
      "Based on what you're describing, I'd recommend a quick check-up. Let me analyze this further! 🔍",
      "That sounds concerning but treatable! I've seen similar cases before. Here's what I suggest... 💡",
      "Great question! This is actually quite common in pets. Let me break it down for you... 📚",
      "I'd love to help! Could you share a photo so I can get a better look? My ToothScan™ and PoopScan™ tech can provide instant insights! 📸",
      "Your pet's symptoms suggest we should book a vet visit. I can help you find the best price - up to 80% savings! 💰"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getQuickReplies = (userMessage: string): string[] => {
    const replies = [
      ["Book appointment", "Tell me more", "Upload photo"],
      ["What's the cost?", "Is it urgent?", "Home remedies?"],
      ["Find nearby vet", "Schedule follow-up", "Get second opinion"]
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const analysisMessage: Message = {
        id: Date.now().toString(),
        content: "📸 Analyzing your pet's photo with ToothScan™ technology...",
        sender: 'ai',
        timestamp: new Date(),
        type: 'analysis'
      };

      setMessages(prev => [...prev, analysisMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const resultMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "✅ Analysis complete! Your pet's teeth look healthy overall, but I notice some tartar buildup. I recommend a dental cleaning within the next 2-3 months. Would you like me to book an appointment?",
          sender: 'ai',
          timestamp: new Date(),
          quickReplies: ["Book dental cleaning", "Cost estimate", "Prevention tips"]
        };

        setMessages(prev => [...prev, resultMessage]);
        setIsTyping(false);
      }, 3000);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
        {/* Chat Header */}
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-t-3xl p-6 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dr. Paw AI
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Online • Always here for you</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Messages Container */}
        <div className="flex-1 bg-white/60 backdrop-blur-lg p-6 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex mb-6 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`max-w-xs lg:max-w-md ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl rounded-br-md' 
                    : 'bg-white rounded-2xl rounded-bl-md shadow-lg'
                } p-4`}>
                  {message.type === 'analysis' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-purple-600 animate-pulse" />
                      <span className="text-sm font-semibold text-purple-600">AI Analysis</span>
                    </div>
                  )}
                  
                  <p className={`${message.sender === 'user' ? 'text-white' : 'text-gray-800'} leading-relaxed`}>
                    {message.content}
                  </p>
                  
                  <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>

                  {/* Quick Replies */}
                  {message.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                className="flex justify-start mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-white rounded-2xl rounded-bl-md shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">Dr. Paw is thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-b-3xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={handleFileUpload}
              className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Camera className="w-5 h-5" />
            </button>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                placeholder="Ask Dr. Paw anything about your pet..."
                className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-purple-300 pr-12"
              />
              <button
                onClick={() => sendMessage(inputMessage)}
                disabled={!inputMessage.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              💡 Pro tip: Upload photos for instant ToothScan™ and PoopScan™ analysis!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;