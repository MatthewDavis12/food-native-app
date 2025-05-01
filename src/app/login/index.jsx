import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '@styles/login/page.jsx';
import LoginInputField from '@components/login/LoginInputField';
import { useAuth } from '@context/AuthContext';
import { router } from 'expo-router';

export default function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useAuth();

    // Login Handler
    const onLogin = async () => {
        console.log('Loggin in!')
        // await AsyncStorage.setItem('auth-token', 100);
        setIsLoggedIn(true);
        router.push('/home');
        console.log('logged in');
    }

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

                    <TouchableOpacity style={styles.loginSubmitBtn} onPress={() => onLogin()}>
                        <Text style={styles.loginSubmitTxt}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginFooterView}>
                    <Text style={styles.footerMsg}>Powered by EdgeVia</Text>
                </View>
            </View>
        </View>
    )
}