import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const accountUpsertStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bg: {
        padding: 24,
        backgroundColor: colors.extraLightGray
    },
    info:{
        flex: 1,
        padding: 24,
        gap: 24,
        backgroundColor: 'white',
        borderRadius: 8
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkBlue,
        height: 50,
        borderRadius: 12
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
});