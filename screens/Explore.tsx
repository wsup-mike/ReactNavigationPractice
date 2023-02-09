import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParams } from "../AppTabNavigator";
import BakeryCard from "../components/BakeryCard";
import TopDrawerNavigator from "../components/TopDrawerNavigation";

type Props = NativeStackScreenProps<RootStackParams, "ExploreStack">;

const ExploreScreen = ({ navigation }: Props) => {
    return (
        <ScrollView style={styles.container}>
            <TopDrawerNavigator />
            <Text style={styles.screenTitle}>Bakeries</Text>
            <View>
                <Text style={styles.sectionTitle}>Bakeries Near You</Text>
                <BakeryCard name="Rowie's Bakery" onPress={() => {
                    // navigation.push('Bakery', {name: "Rowie's Bakery"})
                    navigation.navigate("BakeryStack", { screen: "Bakery", params: { name:  "Hello from Explorer!" }})
                }} />
                <BakeryCard name="Mom's Bakery" onPress={() => {
                    navigation.push('Bakery', {name: "Mom's Bakery"})
                }} />
                <BakeryCard name="Red Ribbon Bakery" onPress={() => {
                    navigation.push('Bakery', {name: 'Red Ribbon Bakery'})
                }} />
            
                <Text>Most Popular Bakeries</Text>
                <BakeryCard name="Rowie's Bakery" onPress={() => {
                    navigation.push('Bakery', {name: "Rowie's Bakery"})
                }} />
                <BakeryCard name="Mom's Bakery" 
                onPress={() => {
                    navigation.push('Bakery', {name: "Mom's Bakery"})
                }} />
                <BakeryCard name="Red Ribbon Bakery" onPress={() => {
                    navigation.push('Bakery', {name: 'Red Ribbon Bakery'})
                }} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16, 
        marginTop: 24,
    },
    
    restaurantCard: {
        backgroundColor: "#efefef"
    },

    sectionTitle: {
        fontSize: 16,
        marginTop: 16,
    },

    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    }
});

export default ExploreScreen;