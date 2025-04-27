import { View, Text, ScrollView } from "react-native";
import styles from './style';
import MenuItem from "./components/MenuItem/MenuItem";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>

            <View style={styles.body}>
                <View style={styles.bodyNavLeft}>

                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.menuNav}>

                    </View>
                    <ScrollView style={styles.menuItems} contentContainerStyle={styles.menuItemsContainer} showsHorizontalScrollIndicator={true}>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </ScrollView>
                </View>

                <View style={styles.bodyNavRight}>

                </View>
            </View>
        </View>
    )
}