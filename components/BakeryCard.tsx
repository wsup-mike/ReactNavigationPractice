import React from "react";
import { View, Text, StyleSheet} from "react-native";

interface Props {
    name: string;
}

const BakeryCard: React.FC<Props> = ({name}) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 16,
        marginTop: 8,
    }
  });

export default BakeryCard;