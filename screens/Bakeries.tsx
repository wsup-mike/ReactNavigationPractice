import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { RootStackParams } from "../AppTabNavigator";
import BakeryCard from "../components/BakeryCard";
import Menu from "../components/Menu";
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, "BakeryStack">;

const BakeriesScreen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Bakeries Screen</Text>
            <ScrollView>
                <BakeryCard 
                    name="Rowie's Bakery" 
                    onPress={(name) => {
                        navigation.navigate("Bakery", {name: name});
                    }} 
                />
                <BakeryCard 
                    name="Mom's Bakery" 
                    onPress={(name) => {
                        navigation.navigate("Bakery", {name: name});
                    }}
                />
                <BakeryCard 
                    name="Panera Foods" 
                    onPress={(name) => {
                        navigation.navigate("Bakery", {name: name});
                    }}
                />
                <BakeryCard 
                    name="Dinkel's Bakery" 
                    onPress={(name) => {
                        navigation.navigate("Bakery", {name: name});
                    }}
                />
                <BakeryCard 
                    name="Lutz's Bakery" 
                    onPress={(name) => {
                        navigation.navigate("Bakery", {name: name});
                    }}
                />
                <BakeryCard 
                    name="Red Ribbon Bakery" 
                    onPress={(name) => {
                        navigation.navigate("Bakery", {name: name});
                    }}
                />
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