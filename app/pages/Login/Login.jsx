import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style.jsx';
import LoginInputField from './components/LoginInputField/LoginInputField.jsx';

export default function LoginPage({ onLogin }) {
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