import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function MenuNavButton({ option, isSelected }) {
    return (
        <TouchableOpacity style={[styles.optionButton, isSelected && styles.optionSelected]}>
            <Text style={[styles.optionText, isSelected && styles.optionSelectedText]}>{option}</Text>
        </TouchableOpacity>
    )
}