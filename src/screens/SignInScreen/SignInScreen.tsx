import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';

//@ts-ignore
import logopurple from '../../assets/logopurple.png';
import MyTextInput from '../../components/MyTextInput';
import MyButton from '../../components/MyButton';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/Auth';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    logo: {
        width: 80,
        height: 80
    },
    spacing: {
        height: 16
    }
})


const SignInScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation()
    const { signIn } = useAuth();

    const handleSignIn = useCallback(() => {
        signIn(email, password)
        //@ts-ignore
        navigation.navigate('Home')
    }, [])

    return (
        <View style={style.container}>
            <Image
                style={style.logo}
                resizeMode='contain'
                source={logopurple}
            />

            <View style={style.spacing} />

            <MyTextInput
                placeholder='e-mail'
                value={email}
                onChangeText={setEmail}
            />

            <MyTextInput
                secureTextEntry
                placeholder='senha'
                value={password}
                onChangeText={setPassword}
                maxLength={12}
            />

            <View style={style.spacing} />

            <MyButton onPress={handleSignIn}>Acessar conta</MyButton>
        </View>
    );
}

export default SignInScreen;