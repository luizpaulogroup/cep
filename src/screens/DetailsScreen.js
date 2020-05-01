import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function DetailsScreen({ route }) {

    const { cep, state, city, neighborhood, street } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{cep}</Text>
            <Text>{state}</Text>
            <Text>{city}</Text>
            <Text>{neighborhood}</Text>
            <Text>{street}</Text>
        </SafeAreaView>
    )

}