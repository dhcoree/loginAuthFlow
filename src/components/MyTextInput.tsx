import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        width: '100%',
        height: 50,
        marginBottom: 16,
    },
});

const TextInput = (props: TextInputProps) => {
    const {colors} = useTheme();
    return (
        <TextInput
            placeholderTextColor="#727272"
            style={[
                styles.input,
                {borderColor: colors.primary, color: colors.background},
            ]}
            {...props}
        />
    );

export default TextInput;