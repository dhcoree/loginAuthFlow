import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import { useNavigation } from '@react-navigation/native';

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

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleNavigateSettings = () => {
        //@ts-ignore
        navigation.navigate('Settings')
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Essa tela só vai ser exibida para usuários autenticados!</Text>

            <View style={styles.spacer} />

            <MyButton onPress={handleNavigateSettings}>Ir para configurações</MyButton>
        </View>

        
    );
}

export default HomeScreen;