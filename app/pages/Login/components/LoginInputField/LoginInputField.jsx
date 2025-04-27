import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style.jsx';

export default function LoginInputField(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>{props.labelText}</Text>
            <TextInput
                style={[styles.inputBox, isFocused && styles.inputBoxFocused]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={props.secureText}
            />
        </View>
    )
}