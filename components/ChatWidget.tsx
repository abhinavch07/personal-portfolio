import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm an AI assistant. Ask me anything about my creator's experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              onClick={() => setIsOpen(true)}
              className="p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-2xl hover:shadow-purple-500/40 transition-shadow flex items-center justify-center"
              aria-label="Open Chat"
            >
              <MessageSquare size={24} fill="currentColor" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-secondary text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="animate-pulse" />
                <span className="font-bold">Portfolio AI</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
              {messages.map((msg, idx) => (
                <div 
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                            ? 'bg-primary text-white rounded-br-none' 
                            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
                    }`}>
                        {msg.text}
                    </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-primary" />
                        <span className="text-xs text-slate-500">Thinking...</span>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-slate-900 border-t dark:border-slate-800">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my skills..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary border-transparent"
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
