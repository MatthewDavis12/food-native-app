import { router, useRootNavigationState } from 'expo-router';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '@context/AuthContext';

// Main App UI
export default function App() {
    const navState = useRootNavigationState();
    const [isLoggedIn, setIsLoggedIn] = useAuth();
    console.log('Login Status:', isLoggedIn);

    // Validate login for routing
    const checkLoginStatus = async () => {
        console.log('Checking login status')
        await AsyncStorage.removeItem('auth-token');
        const token = await AsyncStorage.getItem('auth-token');

        if (token) {
            setIsLoggedIn(true);
            router.replace('/home');
        } else {
            setIsLoggedIn(false);
            router.replace('/login');
        }
    }

    // Router after App component mounts
    useEffect(() => {
        if (!navState?.key) {
            return;
        }
        console.log('rendering!')
        checkLoginStatus();
    }, [navState])

    return (
        <View>
            <Text>Loading</Text>
        </View>
    )
}