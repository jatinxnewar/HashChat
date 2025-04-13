import React, { useState } from 'react';
import styles from '../styles/Chat.module.css';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messages}>
                {messages.map((message, index) => (
                    <div key={index} className={styles.message}>
                        {message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.input}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
                Send
            </button>
        </div>
    );
};

export default Chat;