import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

type DrawerNav = DrawerNavigationProp<any>;

export default function BotaoDrawer() {
    const navigation = useNavigation<DrawerNav>();

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>Abrir Menu</Text>
            </TouchableOpacity>
        </View>

    );
}