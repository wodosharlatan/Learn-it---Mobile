import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';


function Register({ navigation }) {

    const [text , onChangeText ] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [text3, onChangeText3] = React.useState('');
    const [text4, onChangeText4] = React.useState('');
    const [text5, onChangeText5] = React.useState('');
    const [text6, onChangeText6] = React.useState('');
    const [text7, onChangeText7] = React.useState('');

    return (
        <>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}


                    placeholder="Jmeno a prijmeni"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}

                    placeholder="Trida"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={text3}

                    placeholder="Telefonni cislo (rodic 1 - povinne!)"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText4}
                    value={text4}

                    placeholder="Telefonni cislo (rodic 2 - doporuceno!)"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText5}
                    value={text5}

                    placeholder="Telefonni cislo (vlastni)"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText6}
                    value={text6}

                    placeholder="Heslo (min. 8 znaku)"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText7}
                    value={text7}

                    placeholder="Heslo znovu"
                />

                <Button
                    title="Registrovat"
                    onPress={() => console.log('Registrace')}
                />

            </SafeAreaView>

            <View style={styles.container}>
                <Text>Register</Text>

                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
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

export default Register;