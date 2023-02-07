import React from "react";
import { View, Text, TouchableOpacity } from "react-native"; 

const ProfileScreen = () => {
    return (
        <View>
            <Text>Profile Screen</Text>
            <Text>Name: John Doe</Text>
            <TouchableOpacity>Edit Profile</TouchableOpacity>
        </View>
    )
};

export default ProfileScreen;