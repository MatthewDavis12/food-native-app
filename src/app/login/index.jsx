import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '@styles/login/page.jsx';
import LoginInputField from '@components/login/LoginInputField';
import { useAuth } from '@context/AuthContext';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';

export default function LoginPage() {
    const canLogin = useRef(true);
    const [isLoggedIn, setIsLoggedIn] = useAuth();

    const spinAnim = useRef(new Animated.Value(0)).current;
    const spinVal = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    // Login Handler
    const onLogin = async () => {
        if (!canLogin.current) {
            return;
        }

        console.log('Loggin in!')
        // await AsyncStorage.setItem('auth-token', 100);
        setIsLoggedIn(true);
        canLogin.current = false;

        router.push('/home');
        console.log('logged in', canLogin.current);
    }

    // Render login
    const renderLoginBtn = () => {
        if (canLogin.current) {
            return <Text style={styles.loginSubmitTxt}>Login</Text>
        } else {
            return <Animated.Image
                style={[
                    styles.loginLoadingImg,
                    { transform: [{ rotate: spinVal }] }
                ]}
                source={require('@assets/images/loading.png')} />
        }
    }

    // Run loading animation on component mount
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
                easing: Easing.linear
            }),
        ).start()
    }, [])

    // Login Page Component
    return (
        <View style={styles.mainPage}>
            <View style={styles.loginView}>
                <View style={styles.loginHeaderView}>
                    <Text style={styles.loginHeaderTitle}>Employee Login</Text>
                </View>

                <View style={styles.loginBodyView}>
                    <View>
                        <Text style={styles.loginHeaderSubtitle}>Welcome to EdgeVia POS</Text>
                    </View>

                    <LoginInputField labelText='Username' />
                    <LoginInputField labelText='Password' secureText={true} />

                    <TouchableOpacity style={[styles.loginSubmitBtn, !canLogin.current && styles.loginSubmitDisabled]} onPress={() => onLogin()}>
                        {renderLoginBtn()}
                    </TouchableOpacity>
                </View>

                <View style={styles.loginFooterView}>
                    <Text style={styles.footerMsg}>Powered by EdgeVia</Text>
                </View>
            </View>
        </View>
    )
}