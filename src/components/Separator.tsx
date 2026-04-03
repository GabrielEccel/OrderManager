import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

interface SeparatorProps {
    label?: string,
    icon?: keyof typeof Feather.glyphMap,
    color?: string,
    margin?: number
}

export default function Separator({label, icon, color = colors.midGray, margin = 30}: SeparatorProps){
    return(
        <View style={[styles.container, {height: margin}]}>
            <Feather name={icon} size={18} color={colors.midGray} />
            <Text style={styles.text}>{label}</Text>
            <View style={[styles.line, {backgroundColor: color}]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    text:{
        fontSize: 16,
        color: colors.midGray,
        fontWeight: '600'
    },
    line: {
        height: 1,
        flex: 1,
    }
});