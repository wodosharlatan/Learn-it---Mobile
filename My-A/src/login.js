import React from 'react';
import Axios from 'axios';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';


function Login({ navigation }) {

    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');


    const HandleLogin = async() => {
        console.log(text);
        console.log(text2);
        console.log(' - - - ');

        await Axios.post('https://learn-it-app', {
            phone: text,
            password: text2
        }).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Telefonni cislo"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="Heslo"
                />

                <Button
                    title="Login"
                    onPress={() => HandleLogin()}
                />

            </SafeAreaView>

            <View style={styles.container}>
                <Text>Login</Text>

                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});

export default Login;