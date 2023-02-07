import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BakeryCard from "../components/BakeryCard";

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.sectionTitle}>Bakeries Near You</Text>
                <BakeryCard name="Rowie's Bakery" />
                <BakeryCard name="Mom's Bakery" />
                <BakeryCard name="Red Ribbon Bakery" />
            
                <Text>Most Popular Bakeries</Text>
                <BakeryCard name="Rowie's Bakery" />
                <BakeryCard name="Mom's Bakery" />
                <BakeryCard name="Red Ribbon Bakery" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    
    restaurantCard: {
        backgroundColor: "#efefef"
    },

    sectionTitle: {
        fontSize: 16,
        marginTop: 16,
    }
});

export default ExploreScreen;