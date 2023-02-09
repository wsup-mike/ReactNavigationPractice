import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import DrawerMenuIcon from '../icons/DrawerMenuIcon';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParams } from '../AppTabNavigator';

const TopDrawerNavigation = () => {
    
    const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                    (navigation as DrawerNavigationProp<RootStackParams>).toggleDrawer();
                }}
            >
                <DrawerMenuIcon color="#0073e5" size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    backButton: {
        borderRadius: 8,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TopDrawerNavigation;