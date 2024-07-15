import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, CheckBox } from 'react-native';


function Register({ navigation }) {

    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [text3, onChangeText3] = React.useState('');
    const [text4, onChangeText4] = React.useState('');
    const [text5, onChangeText5] = React.useState('');
    const [text6, onChangeText6] = React.useState('');
    const [text7, onChangeText7] = React.useState('');

    const [isSelected, setSelection] = useState(false);


    const HandleRegistaration = () => {


        axios.post("http://0.0.0.0:3000/users/register", {
            text: text,
            text2: text2,
            text3: text3,
            text4: text4,
            text5: text5,
            text6: text6,
            text7: text7,
            isSelected: isSelected,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

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

                <View style={styles2.container}>
                    <Text style={styles2.label}>Zustat Prihlaseny</Text>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles2.checkbox}
                    />
                </View>






                <Button
                    title="Registrovat"
                    onPress={() => HandleRegistaration()}
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
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },

});

const styles2 = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
      },
      label: {
        marginRight: 10,
      },
      checkbox: {
        alignSelf: 'center',
      },
})

export default Register;