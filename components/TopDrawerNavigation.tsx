import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import BackIcon from '../icons/BackIcon';


const TopBackNavigation = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <BackIcon color="#0073e5" size={20} />
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

export default TopBackNavigation;