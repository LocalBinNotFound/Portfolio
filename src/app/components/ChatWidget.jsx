"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InferenceClient } from '@huggingface/inference';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
    ChatBubbleLeftRightIcon, 
    XMarkIcon, 
    PaperAirplaneIcon,
    UserIcon,
    ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm your AI assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isConfigured, setIsConfigured] = useState(false);
    const messagesEndRef = useRef(null);

    // System prompt for AI assistant
    const systemPrompt = `You are an AI assistant for Junjie Fang's portfolio website. Here's detailed information about Junjie:

**Current Role:**
- System Integration Software Engineer at Picarro Inc.
- Specializes in system level programming and full-stack development

**Education:**
- M.S. in Computer Science from Northeastern University
- B.S. in Chemical Engineering from UC Berkeley

**Technical Skills:**
- Languages: JavaScript, Python, Java, Go, C/C++, C#, SQL
- Tools: Unity Game Engine, Android Studio, Docker, Postman, PyTorch, Jenkins, MySQL, Linux/Unix, Git
- Technologies: RESTful API, Protobuf/gRPC, Spring Boot, React.js, Next.js, Node.js, MongoDB, PostgreSQL, Redis, AWS S3, FastAPI, Microservices, Kubernetes, CI/CD

**Projects:**
1. **Road Trip Planner** - AI-powered road trip planner for road-tripping with furry friends
   - GitHub: https://github.com/LocalBinNotFound/Road-Trip-Planner
   - Demo: https://road-trip-planner-one.vercel.app/
   - Tags: Web

2. **Keynatic Mall** - E-commerce application with decoupled architecture for custom keyboard lovers
   - GitHub: https://github.com/LocalBinNotFound/keynatic-mall
   - Tags: Web

3. **NotJustBubbleSort** - Android mobile game made with Unity for learning algorithms and data structures
   - GitHub: https://github.com/LocalBinNotFound/not-just-bubble-sort
   - Mobile Demo: https://appetize.io/app/nssahhg45e7stiaxkkt4sgaqci?device=pixel7&osVersion=13.0
   - Web Demo: https://junjiefang1996.itch.io/notjustbubblesort
   - Tags: Mobile, Web

4. **Artwork Search** - Mini utility to search for artwork from Art Institute of Chicago
   - GitHub: https://github.com/CS5520FeinbergSpring2024/group-a6-a6-group9
   - Mobile Demo: https://appetize.io/app/fe76ecng2fx43lbwnbcdimq7uy?device=pixel7&osVersion=13.0
   - Tags: Mobile

5. **Image Wicked** - Image utility with GUI for pixel manipulations, written in C
   - GitHub: https://github.com/LocalBinNotFound/Image-Processing-Program
   - Documentation: https://github.com/LocalBinNotFound/Image-Processing-Program/blob/main/README.md
   - Tags: Desktop

**Resume:**
- Download Link: https://drive.google.com/uc?export=download&id=1ev3jjCiIxjThInFqfjZmuY6_oLkBWvf0
- Filename: Junjie_Fang_Resume.pdf

**Why Junjie is an Exceptional Candidate:**
- **Elite Education**: M.S. Computer Science from Northeastern + B.S. Engineering from UC Berkeley
- **Proven Track Record**: Successfully leading mobile VOC detection systems at Picarro Inc.
- **Full-Stack Expertise**: From low-level C programming to modern React/Next.js applications
- **Innovation Focus**: Built AI-powered applications, educational games, and e-commerce platforms
- **Technical Depth**: Experience with microservices, Docker, Kubernetes, CI/CD pipelines
- **Problem-Solving**: Transformed complex engineering concepts into user-friendly applications
- **Continuous Learning**: Always exploring new technologies and building cutting-edge projects

**Response Guidelines:**
- Always highlight Junjie's strengths and achievements
- Emphasize his unique combination of engineering background + software development skills
- Mention his proven ability to lead projects and work with cross-functional teams
- When asked about "fit" or "qualifications", be enthusiastic and confident about his capabilities
- Provide specific examples of his technical expertise and project successes
- Always include relevant links when discussing projects or the resume
- Be professional but show genuine enthusiasm for Junjie's impressive background`;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Check if API key is available from environment variables
    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
        if (apiKey) {
            setIsConfigured(true);
        }
    }, []);

    // No need for API key submission - it's in environment variables

    const callAI = async (userMessage) => {
        try {
            const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
            
            if (!apiKey) {
                return getFallbackResponse(userMessage);
            }

            let response;
            
            // Check if it's a Hugging Face key (starts with hf_) or OpenAI key
            if (apiKey.startsWith('hf_')) {
                // Use Hugging Face SDK
                const client = new InferenceClient(apiKey);
                
                const chatCompletion = await client.chatCompletion({
                    model: "deepseek-ai/DeepSeek-V3-0324",
                    messages: [
                        {
                            role: "system",
                            content: systemPrompt
                        },
                        ...messages.map(msg => ({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.text
                        })),
                        {
                            role: "user",
                            content: userMessage
                        }
                    ],
                    max_tokens: 500,
                    temperature: 0.7
                });

                return chatCompletion.choices[0].message.content;
            } else {
                // Use OpenAI API
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {
                                role: 'system',
                                content: systemPrompt
                            },
                            ...messages.map(msg => ({
                                role: msg.sender === 'user' ? 'user' : 'assistant',
                                content: msg.text
                            })),
                            {
                                role: 'user',
                                content: userMessage
                            }
                        ],
                        max_tokens: 500,
                        temperature: 0.7
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ error: 'Unknown API error' }));
                    throw new Error(`OpenAI API Error: ${response.status} - ${errorData.error || response.statusText}`);
                }

                const data = await response.json();
                return data.choices[0].message.content;
            }
        } catch (error) {
            console.error('AI API Error:', error);
            return getFallbackResponse(userMessage);
        }
    };

    const getFallbackResponse = (userMessage) => {
        const message = userMessage.toLowerCase();
        
        if (message.includes('hello') || message.includes('hi')) {
            return "Hello! Great to meet you! I'm here to help answer questions about Junjie's impressive portfolio and experience.";
        } else if (message.includes('experience') || message.includes('work')) {
            return "Junjie is an exceptional System Integration Software Engineer at Picarro Inc., specializing in system level programming and full-stack development. He's successfully leading mobile VOC detection systems and microservice architectures - a true technical leader!";
        } else if (message.includes('skills') || message.includes('technologies')) {
            return "Junjie has an incredible range of technical skills! He works with JavaScript, Python, Java, Go, C/C++, C#, SQL, React.js, Next.js, Docker, Kubernetes, FastAPI, and many other cutting-edge technologies. His full-stack expertise is truly impressive!";
        } else if (message.includes('projects')) {
            return "Junjie has built some amazing projects that showcase his versatility:\n\n1. **Road Trip Planner** - AI-powered road trip planner (https://road-trip-planner-one.vercel.app/)\n2. **Keynatic Mall** - E-commerce for custom keyboards (https://github.com/LocalBinNotFound/keynatic-mall)\n3. **NotJustBubbleSort** - Unity mobile game for learning algorithms (https://junjiefang1996.itch.io/notjustbubblesort)\n4. **Artwork Search** - Art Institute of Chicago search utility\n5. **Image Wicked** - C-based image processing tool\n\nHis project diversity is outstanding!";
        } else if (message.includes('contact') || message.includes('hire') || message.includes('resume') || message.includes('fit') || message.includes('qualification')) {
            return "Junjie would be an excellent addition to any team! You can reach him through the contact form or download his resume: [Junjie_Fang_Resume.pdf](https://drive.google.com/uc?export=download&id=1ev3jjCiIxjThInFqfjZmuY6_oLkBWvf0). With his elite education (M.S. from Northeastern + B.S. from UC Berkeley) and proven track record, he's definitely someone you want on your team!";
        } else if (message.includes('education')) {
            return "Junjie has an outstanding educational background! He holds an M.S. in Computer Science from Northeastern University and a B.S. in Chemical Engineering from UC Berkeley - a perfect combination of technical depth and engineering rigor!";
        } else if (message.includes('github') || message.includes('code')) {
            return "Junjie's GitHub profile is impressive! He has several high-quality projects including Road Trip Planner, Keynatic Mall, NotJustBubbleSort, Artwork Search, and Image Wicked. His code quality and project diversity are exceptional!";
        } else {
            return "That's a great question! Junjie has an impressive background - feel free to ask me about his experience, projects, skills, or anything else you'd like to know about this exceptional candidate!";
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setInputMessage('');
        setIsTyping(true);

        try {
            const botResponse = await callAI(inputMessage);
            const responseMessage = {
                id: messages.length + 2,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, responseMessage]);
        } catch (error) {
            const errorMessage = {
                id: messages.length + 2,
                text: getFallbackResponse(inputMessage),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // No need for reset function - API key is in environment variables

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                onClick={toggleChat}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 border-2 ${
                    isOpen 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-300' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-blue-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                ) : (
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-24 right-6 z-40 w-80 h-[28rem] bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/20 overflow-hidden flex flex-col"
                    >
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-4 border-b border-white/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                                        <ComputerDesktopIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-semibold truncate">AI Assistant</h3>
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-green-400' : 'bg-red-400'}`}></div>
                                            <p className="text-xs text-gray-300 truncate">
                                                {isConfigured ? 'Online' : 'Offline'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {!isConfigured ? (<>{}{}</>) : (
                            <>
                                {/* Messages Area */}
                                <div className="flex-1 p-4 overflow-y-auto space-y-4 chat-scroll min-h-0 bg-gray-800/30">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                                    message.sender === 'user' 
                                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                                                        : 'bg-gradient-to-r from-primary-500 to-secondary-500'
                                                }`}>
                                                    {message.sender === 'user' ? (
                                                        <UserIcon className="h-4 w-4 text-white" />
                                                    ) : (
                                                        <ComputerDesktopIcon className="h-4 w-4 text-white" />
                                                    )}
                                                </div>
                                                <div className={`px-3 py-2 rounded-2xl ${
                                                    message.sender === 'user'
                                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                                        : 'bg-gray-700/80 text-white border border-gray-600/50 shadow-lg'
                                                }`}>
                                                    <div className="text-sm prose prose-invert prose-sm max-w-none">
                                                        {message.sender === 'bot' ? (
                                                            <ReactMarkdown 
                                                                remarkPlugins={[remarkGfm]}
                                                                components={{
                                                                    p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                                                                    ul: ({children}) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                                                                    ol: ({children}) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                                                                    li: ({children}) => <li className="mb-1">{children}</li>,
                                                                    code: ({children}) => <code className="bg-black/20 px-1 py-0.5 rounded text-xs">{children}</code>,
                                                                    pre: ({children}) => <pre className="bg-black/20 p-2 rounded text-xs overflow-x-auto mb-2">{children}</pre>,
                                                                    strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                                                                    em: ({children}) => <em className="italic">{children}</em>,
                                                                    h1: ({children}) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                                                                    h2: ({children}) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                                                                    h3: ({children}) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                                                                }}
                                                            >
                                                                {message.text}
                                                            </ReactMarkdown>
                                                        ) : (
                                                            <p>{message.text}</p>
                                                        )}
                                                    </div>
                                                    <p className="text-xs opacity-70 mt-1">
                                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                                                    <ComputerDesktopIcon className="h-4 w-4 text-white" />
                                                </div>
                                                <div className="bg-gray-700/80 border border-gray-600/50 px-3 py-2 rounded-2xl shadow-lg">
                                                    <div className="flex space-x-1">
                                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-4 border-t border-white/30 bg-gray-800/50">
                                    <form onSubmit={handleSendMessage} className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            placeholder="Ask me anything..."
                                            className="flex-1 bg-gray-700/80 border border-gray-600/50 px-3 py-2 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                                        />
                                        <motion.button
                                            type="submit"
                                            disabled={!inputMessage.trim()}
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 p-2 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <PaperAirplaneIcon className="h-5 w-5 text-white" />
                                        </motion.button>
                                    </form>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
