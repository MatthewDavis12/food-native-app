import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from './style';
import MenuItem from "./components/MenuItem/MenuItem";
import LeftNavItem from "./components/LeftNavItem/LeftNavItem";
import MenuNavButton from "./components/MenuNavButton/MenuNavButton";

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
                    <View style={styles.navLeftTop}>
                        <LeftNavItem icon={require('@/assets/images/home.png')} text='Home' isSelected={true} />
                        <LeftNavItem icon={require('@/assets/images/tickets.png')} text='Tickets' />
                        <LeftNavItem icon={require('@/assets/images/table.png')} text='Tables' />
                        {/* <LeftNavItem icon={require('@/assets/images/settings.png')} text='Settings' /> */}
                    </View>
                    <View style={styles.navLeftBottom}>
                        <LeftNavItem icon={require('@/assets/images/settings.png')} text='Settings' />
                        <LeftNavItem icon={require('@/assets/images/logout.png')} text='Logout' />
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.menuNav}>
                        <MenuNavButton option="Chicken" isSelected={true} />
                        <MenuNavButton option="Pasta" />
                        <MenuNavButton option="Fish" />
                        <MenuNavButton option="Drinks" />
                        <MenuNavButton option="Desert" />
                    </View>

                    <ScrollView style={styles.menuItems} contentContainerStyle={styles.menuItemsContainer} showsVerticalScrollIndicator={false}>
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