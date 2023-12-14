import React, { useRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback, Keyboard } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        width: '100%',
        height: 50,
        marginBottom: 16,
        borderColor: '#380759'
    },
});

const MyTextInput = (props: TextInputProps) => {
    const textInputRef = useRef<TextInput>(null);

const dismissKeyboard = () => {
    if (textInputRef.current) {
      textInputRef.current.blur(); // Remover o foco do TextInput
    }
};

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <TextInput
                ref={textInputRef}
                placeholderTextColor="#727272"
                style={styles.input}
                {...props}
            />
        </TouchableWithoutFeedback>
    );
};

export default MyTextInput;
