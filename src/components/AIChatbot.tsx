import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LoadingFan from './LoadingFan';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am Parent Saathi AI Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you for your question: "${input}". This is a demo response. In production, I would provide detailed information about university policies, academic calendars, admissions, and more. I can also provide links to relevant documents and resources.`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 flex flex-col h-[600px]">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-t-xl flex items-center gap-3">
        <Bot className="w-6 h-6" />
        <h2 className="text-xl font-bold">{t('aiChatbot')}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === 'user' ? 'bg-green-500' : 'bg-blue-500'
              }`}
            >
              {message.sender === 'user' ? (
                <User className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-5 h-5 text-white" />
              )}
            </div>

            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-green-100 text-gray-800'
                  : 'bg-blue-50 text-gray-800'
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-center">
            <LoadingFan size={50} />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('askQuestion')}
            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            {t('send')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
