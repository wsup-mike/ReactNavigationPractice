import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BakeryCard from '../components/BakeryCard';

type Props = NativeStackScreenProps<RootStackParams, "Bakery">;

const BakeryScreen = ({ route, navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>{route.params.name}</Text>
            <Text>Related Bakeries</Text>
            <BakeryCard 
                name='Bakery 1' 
                onPress={() => {
                    navigation.push('Bakery', {name: 'Bakery 1'})
                }}
            />
            <BakeryCard 
                name='Bakery 2'
                onPress={() => {
                    navigation.push('Bakery', {name: 'Bakery 2'})
                }} 
            />
            <BakeryCard 
                name='Bakery 3'
                onPress={() => {
                    navigation.push('Bakery', {name: 'Bakery 3'})
                }} 
            />
        </View>
    );
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