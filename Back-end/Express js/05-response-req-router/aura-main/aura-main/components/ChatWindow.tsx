
import React, { useState, useRef, useEffect } from 'react';
import { Message, MessageAuthor } from '../types';
import { sendMessageToAI } from '../services/geminiService';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';
import { SendIcon } from './icons/SendIcon';
import MoodTracker from './MoodTracker';

const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isUser = message.author === MessageAuthor.USER;
    return (
        <div className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && <BotIcon />}
            <div className={`max-w-md p-3 rounded-2xl ${isUser ? 'bg-sky-500 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none shadow-sm'}`}>
                <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
            {isUser && <UserIcon />}
        </div>
    );
};


const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { author: MessageAuthor.BOT, text: "Hi there! I'm Aura, your personal wellness companion. How are you feeling today? Feel free to share what's on your mind." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { author: MessageAuthor.USER, text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponse = await sendMessageToAI(input);
        const botMessage: Message = { author: MessageAuthor.BOT, text: aiResponse };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };
    
    const handleMoodSelect = (mood: string) => {
        const text = `I'm feeling ${mood.toLowerCase()} today.`;
        const userMessage: Message = { author: MessageAuthor.USER, text: text };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        sendMessageToAI(text).then(aiResponse => {
            const botMessage: Message = { author: MessageAuthor.BOT, text: aiResponse };
            setMessages(prev => [...prev, botMessage]);
            setIsLoading(false);
        });
    };

    return (
        <div className="bg-slate-100 rounded-2xl shadow-lg flex flex-col h-[75vh] max-h-[800px] w-full">
            <div className="flex-grow p-6 overflow-y-auto">
                <MoodTracker onMoodSelect={handleMoodSelect} />
                {messages.map((msg, index) => (
                    <ChatBubble key={index} message={msg} />
                ))}
                 {isLoading && (
                    <div className="flex items-start gap-3 my-4 justify-start">
                        <BotIcon />
                        <div className="max-w-md p-3 rounded-2xl bg-white text-slate-700 rounded-bl-none shadow-sm flex items-center space-x-2">
                           <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                           <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                           <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 bg-white/50 border-t border-slate-200">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full px-4 py-2 bg-slate-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                        disabled={isLoading}
                    />
                    <button type="submit" className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition-colors disabled:bg-slate-300" disabled={isLoading}>
                        <SendIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;
