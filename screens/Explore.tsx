import { View, Text, StyleSheet } from "react-native";
import BakeryCard from "../components/BakeryCard";

const ExploreScreen = () => {
    return (
        <View>
            <Text>Bakeries Near You</Text>
            <BakeryCard name="Rowie's Bakery" />
            <BakeryCard name="Mom's Bakery" />
            <BakeryCard name="Red Ribbon Bakery" />
        
            <Text>Most Popular Bakeries</Text>
            <BakeryCard name="Rowie's Bakery" />
            <BakeryCard name="Mom's Bakery" />
            <BakeryCard name="Red Ribbon Bakery" />
        </View>
    )
};

const styles = StyleSheet.create({
    restaurantCard: {
        backgroundColor: "#efefef"
    }
});

export default ExploreScreen;