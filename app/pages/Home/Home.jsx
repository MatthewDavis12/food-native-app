import { View, Text, ScrollView } from "react-native";
import styles from './style';
import MenuItem from "./components/MenuItem/MenuItem";
import LeftNavItem from "./components/LeftNavItem/LeftNavItem";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.companyTitle}>EdgeVia POS</Text>
                </View>

                <View style={styles.headerRight}>
                    <Text style={styles.companyTitle}>Tables</Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyNavLeft}>
                    <LeftNavItem />
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.menuNav}>

                    </View>
                    <ScrollView style={styles.menuItems} contentContainerStyle={styles.menuItemsContainer} >
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