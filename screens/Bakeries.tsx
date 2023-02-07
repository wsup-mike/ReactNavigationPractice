import React from "react";
import { View, Text, ScrollView } from "react-native";
import BakeryCard from "../components/BakeryCard";

const BakeriesScreen = () => {
    return (
        <View>
            <Text>Bakeries Screen</Text>
            <ScrollView>
                <BakeryCard name="Rowie's Bakery" />
                <BakeryCard name="Mom's Bakery" />
                <BakeryCard name="Panera Foods" />
                <BakeryCard name="Dinkel's Bakery" />
                <BakeryCard name="Lutz's Bakery" />
                <BakeryCard name="Red Ribbon Bakery" />
            </ScrollView>
        </View>
    )
};

export default BakeriesScreen;