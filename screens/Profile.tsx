import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"; 

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Text>Name: John Doe</Text>
            <TouchableOpacity>
                <Text>
                    Edit Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },

    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },


});

export default ProfileScreen;