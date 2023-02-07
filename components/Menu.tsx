import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


const BakeryCard: React.FC<Props> = ({name}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Bakeries</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Profile</Text>
            </TouchableOpacity>
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