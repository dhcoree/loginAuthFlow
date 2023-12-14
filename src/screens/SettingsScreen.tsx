import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyButton from '../components/MyButton';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const navigation = useNavigation();

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

    const handleLogOut = () => {
        //@ts-ignore
        navigation.navigate('HomeScreen')
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Página de settings</Text>

            <View style={styles.spacer} />

            <MyButton onPress={handleLogOut}>Sair</MyButton>
        </View>
    );
}

export default SettingsScreen;