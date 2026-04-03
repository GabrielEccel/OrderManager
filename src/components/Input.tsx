import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../global/colors";

interface InputProps extends TextInputProps {
    label: string
}

export function Input({ label, ...rest }: InputProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.textInput} {...rest} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        gap: 4
    },
    text: {
        marginHorizontal: 4,
        color: colors.midGray
    },
    textInput: {
        height: 54,
        borderWidth: 1,
        borderColor: colors.midGray,
        borderRadius: 7,
        paddingHorizontal: 16
    }
});