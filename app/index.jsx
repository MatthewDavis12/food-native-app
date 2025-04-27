import LoginPage from '@/app/pages/Login/Login.jsx';
import HomePage from './pages/Home/Home';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

// Main App UI
export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function onLogin() {
        await AsyncStorage.setItem('auth-token', 'true');
        setIsLoggedIn(true);
    }

    useEffect(() => {
        const checkAuth = async () => {
            // await AsyncStorage.removeItem('auth-token');
            const token = await AsyncStorage.getItem('auth-token');

            if (token) {
                setIsLoggedIn(true);
            }
        }
        checkAuth();
    }, [])

    if (!isLoggedIn) {
        return (<LoginPage onLogin={onLogin} />)
    }

    return (<HomePage />)
}