import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import { useAuth } from '../context/Auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    spacer: {
        height: 50
    },
    text: {
        fontWeight: '800'
    }
})

const SettingsScreen = () => {
    const { signOut } = useAuth()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página de settings</Text>

            <View style={styles.spacer} />

            <MyButton onPress={signOut}>Sair</MyButton>
        </View>
    );
}

export default SettingsScreen;