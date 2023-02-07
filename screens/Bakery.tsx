import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BakeryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Title</Text>
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
        fontWeight: 'bold'
    },
});

export default BakeryScreen;