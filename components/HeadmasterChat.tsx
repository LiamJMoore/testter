import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { generateDeanResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const HeadmasterChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcom to Quality Learing Center! I am the Dean. Do you want to buy the dip or enrol in our spellign class?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    // Prepare rudimentary history string
    const history = messages.map(m => `${m.role}: ${m.text}`);

    try {
      const responseText = await generateDeanResponse(history, userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "System eror. Too much learing happened." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-learing-brown transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="bg-learing-teal p-4 border-b-4 border-learing-brown flex items-center gap-3">
        <div className="bg-learing-yellow p-2 rounded-full border-2 border-black">
          <Bot className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="font-comic font-bold text-xl text-white text-shadow-sm">Chat with the Dean</h3>
          <p className="text-learing-brown text-xs font-bold bg-white/30 px-2 rounded-full inline-block">Online (Hiding)</p>
        </div>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 bg-learing-yellow/10 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl border-2 ${
              msg.role === 'user' 
                ? 'bg-learing-teal text-white border-learing-brown rounded-tr-none' 
                : 'bg-white text-learing-brown border-learing-teal rounded-tl-none font-comic'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-500 p-3 rounded-2xl rounded-tl-none text-sm animate-pulse">
              Dean is typing badly...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-gray-50 border-t-2 border-learing-brown">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about tuition or tokens..."
            className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-learing-teal font-comic"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-learing-brown text-white p-2 rounded-lg hover:bg-opacity-90 transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadmasterChat;