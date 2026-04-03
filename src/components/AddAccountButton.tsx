import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../global/colors";
import { Feather } from "@expo/vector-icons";

export default function AddAccountButton() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Feather name="plus" size={26} color='white' />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: 20,
        right: 20
    }
});