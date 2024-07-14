import React from 'react';
import { StyleSheet, Text, View,  TextInput, SafeAreaView, Button } from 'react-native';


function Login({ navigation }) {

    const [text, onChangeText] = React.useState('Some text');



    return (
        <>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Placeholder"
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