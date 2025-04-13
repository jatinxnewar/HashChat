import React, { useState } from 'react';
import { Login } from './components/Login';
import { Chat } from './components/Chat';
import { ThemeProvider } from './components/common/ThemeProvider';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <ThemeProvider>
            {isLoggedIn ? <Chat /> : <Login onLogin={handleLogin} />}
        </ThemeProvider>
    );
};

export default App;