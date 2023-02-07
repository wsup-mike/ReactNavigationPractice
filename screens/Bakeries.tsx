import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BakeryCard from "../components/BakeryCard";
import Menu from "../components/Menu";

const BakeriesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Bakeries Screen</Text>
            <ScrollView>
                <BakeryCard name="Rowie's Bakery" />
                <BakeryCard name="Mom's Bakery" />
                <BakeryCard name="Panera Foods" />
                <BakeryCard name="Dinkel's Bakery" />
                <BakeryCard name="Lutz's Bakery" />
                <BakeryCard name="Red Ribbon Bakery" />
            </ScrollView>
            <Menu />
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

export default BakeriesScreen;