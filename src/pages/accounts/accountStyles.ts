import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const accountStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        backgroundColor: colors.extraLightGray,
        padding: 24
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: colors.darkGray,
        fontWeight: '500',
        fontSize: 16
    }
});