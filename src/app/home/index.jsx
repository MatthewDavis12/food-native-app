import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useAuth } from "@context/AuthContext";
import { router, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

// Components
import styles from '@styles/home/page';
import MenuItem from '@components/home/MenuItem';
import TicketItem from "@components/home/TicketItem";
import LeftNavItem from '@components/home/LeftNavItem';
import MenuNavButton from '@components/home/MenuNavButton';

export default function HomePage() {
    const [isLoggedIn] = useAuth();
    const navState = useRootNavigationState();

    // Redirect back to login if the user isn't logged in.
    useEffect(() => {
        if (!navState?.key) return;

        if (!isLoggedIn) {
            router.replace('/login');
        }
    }, [navState, isLoggedIn]);

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
                        <LeftNavItem icon={require('@assets/images/home.png')} text='Home' isSelected={true} />
                        <LeftNavItem icon={require('@assets/images/tickets.png')} text='Tickets' />
                        <LeftNavItem icon={require('@assets/images/table.png')} text='Tables' />
                        {/* <LeftNavItem icon={require('@/assets/images/settings.png')} text='Settings' /> */}
                    </View>
                    <View style={styles.navLeftBottom}>
                        <LeftNavItem icon={require('@assets/images/settings.png')} text='Settings' />
                        <LeftNavItem icon={require('@assets/images/logout.png')} text='Logout' />
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
                    <View style={styles.rightNavTop}>
                        <View style={styles.rightNavTopLeft}>
                            <TouchableOpacity style={styles.newTicket}>
                                <View style={styles.newTicketIconWrapper}>
                                    <Image style={styles.newTicketIcon} source={require('@assets/images/square-plus.png')} />
                                </View>

                                <Text style={styles.newTicketText}>New Ticket</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.rightNavTopRight}>

                        </View>
                    </View>

                    <View style={styles.rightNavBody}>
                        <ScrollView style={{ padding: 10 }} contentContainerStyle={{ width: '100%', height: '100%' }}>
                            <TicketItem />
                        </ScrollView>
                    </View>

                    <View style={styles.rightNavBottom}>

                    </View>
                </View>
            </View>
        </View>
    )
}