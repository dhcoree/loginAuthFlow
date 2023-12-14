import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
    children: string;
    onPress: TouchableOpacityProps['onPress'];
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8C52FF',
        paddingHorizontal: 46,
        marginHorizontal: 16,
        borderRadius: 8,
        height: 40,
    }
});

const MyButton = ({
    children, 
    onPress, 
    ...rest
}: MyButtonProps) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.button} {...rest}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

export default MyButton;