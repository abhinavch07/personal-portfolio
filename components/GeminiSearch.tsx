
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, Sparkles, ArrowRight, Command } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface GeminiSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTIONS = [
  "What is his tech stack?",
  "Does he know React Native?",
  "Tell me about his experience at Tech Corp.",
  "Show me his open source work.",
  "How can I contact him?"
];

const GeminiSearch: React.FC<GeminiSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setResult('');
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResult('');
    
    // Call the shared Gemini service
    const response = await sendMessageToGemini(query);
    
    setResult(response);
    setIsLoading(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    // Trigger search immediately after setting query (needs a small delay or direct call)
    setIsLoading(true);
    setResult('');
    sendMessageToGemini(suggestion).then(res => {
        setResult(res);
        setIsLoading(false);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Header */}
            <div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800 gap-3">
              <Search className="text-slate-400 w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Ask Gemini anything about this portfolio..."
                className="flex-1 bg-transparent text-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
              <div className="flex items-center gap-2">
                 {isLoading ? (
                    <Loader2 className="animate-spin text-primary w-5 h-5" />
                 ) : (
                    <button 
                        onClick={() => handleSearch()}
                        className="p-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <ArrowRight size={18} />
                    </button>
                 )}
                 <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                 <button 
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                 >
                    <span className="text-xs font-medium border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5">ESC</span>
                 </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-0 overflow-y-auto">
                {/* Initial State / Suggestions */}
                {!result && !isLoading && (
                    <div className="p-6">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                            <Sparkles size={14} />
                            <span>Suggested queries</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SUGGESTIONS.map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary-foreground text-slate-600 dark:text-slate-300 text-sm rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
                            <p>Powered by Google Gemini 2.5 Flash</p>
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {isLoading && !result && (
                    <div className="p-12 flex flex-col items-center justify-center text-slate-400">
                        <div className="relative mb-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 animate-ping absolute inset-0"></div>
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center relative">
                                <Sparkles className="text-primary w-6 h-6 animate-pulse" />
                            </div>
                        </div>
                        <p>Analyzing portfolio data...</p>
                    </div>
                )}

                {/* Result State */}
                {result && (
                    <div className="p-6 bg-slate-50/50 dark:bg-black/20 min-h-[200px]">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <Sparkles className="text-white w-4 h-4" />
                                </div>
                            </div>
                            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                {result.split('\n').map((line, i) => (
                                    <p key={i} className="mb-2 last:mb-0">{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Footer */}
            {result && (
                <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end">
                    <button 
                        onClick={() => { setQuery(''); setResult(''); inputRef.current?.focus(); }}
                        className="text-xs text-slate-500 hover:text-primary flex items-center gap-1"
                    >
                        <Command size={12} /> New Search
                    </button>
                </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GeminiSearch;
