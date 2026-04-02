import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../global/colors";
import { Feather } from "@expo/vector-icons";

type DrawerNav = DrawerNavigationProp<any>;

interface headerProps {
    label: string
}

export default function Header({ label }: headerProps) {
    const navigation = useNavigation<DrawerNav>();

    return (
        <View style={styles.container}>
            <View style={styles.sub}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={30} color='white' />
                </TouchableOpacity>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        height: 100,
        width: '100%',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    sub: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    label: {
        color: colors.extraLightGray,
        fontSize: 24
    }
})