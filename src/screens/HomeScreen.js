import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

    const [cep, setCep] = useState("");

    const handleSubmit = async () => {

        fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(response => response.json())
            .then(response => {

                if (response.errors) {
                    return alert("CEP inválido");
                }

                const { cep, city, neighborhood, state, street } = response;

                navigation.navigate("DetailsScreen", {
                    cep,
                    city,
                    neighborhood,
                    state,
                    street
                });

            })
            .catch(error => console.log(error));

    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Enter your CEP</Text>
            <TextInput
                style={{
                    padding: 10,
                    backgroundColor: 'grey',
                    alignSelf: 'stretch',
                    marginHorizontal: 25
                }}
                value={cep}
                onChangeText={setCep}
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style={{
                    marginTop: 10,
                    alignSelf: 'stretch',
                    padding: 20,
                    backgroundColor: 'black',
                    marginHorizontal: 25
                }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Search</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}