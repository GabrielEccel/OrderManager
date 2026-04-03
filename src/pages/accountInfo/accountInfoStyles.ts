import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const accountInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        backgroundColor: colors.extraLightGray,
        flex: 1,
        padding: 24,
    },
    card: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20
    },
    name: {
        color: colors.darkGray,
        fontSize: 26,
        fontWeight: '500'
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 6
    },
    text: {
        fontSize: 16,
        color: colors.midGray,
        marginLeft: 4
    }
});