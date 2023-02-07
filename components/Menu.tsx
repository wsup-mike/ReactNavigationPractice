import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


const Menu = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation</Text>
            <TouchableOpacity 
                onPress={() => { 
                    // go to Explore
                }}
            >
                <Text style={styles.link}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { 
                    // go to Bakeries
                }}
            >
                <Text style={styles.link}>Bakeries</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { 
                    // go to Profile
                }}
            >
                <Text style={styles.link}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 16,
        marginTop: 8,
    },

    link: {
        fontSize: 16,
        marginTop: 4,
        color: '#097ade',
    },

    title: {
        fontSize: 18,
    }
  });

export default Menu;