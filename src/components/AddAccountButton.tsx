import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../global/colors";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AddAccountButton() {

    const handleNavigate = () => {
        router.push('/accountUpsert')
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={handleNavigate}>
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
        right: 20,

        zIndex: 999,
        elevation: 2
        
    }
});