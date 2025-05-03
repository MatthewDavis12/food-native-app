import { Text, Image, TouchableOpacity } from 'react-native';
import styles from '@styles/home/LeftNavItem.styles';

export default function LeftNavItem({ icon, text, isSelected }) {
    return (
        <TouchableOpacity style={[styles.itemContainer, isSelected && styles.itemSelected]}>
            <Image source={icon} style={[styles.itemIcon, isSelected && styles.itemSelectedImage]} resizeMode="contain" />
            <Text style={[styles.itemText, isSelected && styles.itemSelectedText]}>{text}</Text>
        </TouchableOpacity>
    )
}