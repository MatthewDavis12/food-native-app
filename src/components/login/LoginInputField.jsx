import { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Animated, Easing } from 'react-native';
import styles from '@styles/login/LoginInputField.styles.jsx';
import { toVL } from '@utils/relativeSize.js';

export default function LoginInputField(props) {
    const [isFocused, setIsFocused] = useState(false);
    const borderWidthRef = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(borderWidthRef, {
            toValue: isFocused ? 2 : 1,
            duration: 50,
            easing: Easing.ease,
            useNativeDriver: false
        }).start();
    }, [isFocused])

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>{props.labelText}</Text>
            <Animated.View
                style={[
                    styles.inputBox,
                    isFocused && styles.inputBoxFocused,
                    { borderWidth: borderWidthRef }
                ]}>

                <TextInput
                    style={
                        { width: '100%', height: '100%', fontSize: toVL(1.5), textAlignVertical: 'center', padding: 0 }
                    }
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={props.secureText}>
                </TextInput>
            </Animated.View>
        </View>
    )
}