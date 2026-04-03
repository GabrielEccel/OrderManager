import { Text, TouchableOpacity, View } from "react-native";
import { accountInfoStyles as styles } from "./accountInfoStyles";
import Header from "../../components/Header";
import AccountInfoController from "./accountInfoController";
import Separator from "../../components/Separator";
import { colors } from "../../global/colors";
import { Feather } from "@expo/vector-icons";

interface AccountInfoProps {
    id: string
}

export default function AccountInfo({ id }: AccountInfoProps) {
    const { account, navigateToEditAccount } = AccountInfoController(id);

    return (
        <View style={styles.container}>
            <Header label="Dados da conta" back={true} />
            <View style={styles.bg}>
                <View style={styles.card}>
                    <View style={[styles.textRow, { justifyContent: 'space-between' }]}>
                        <Text style={styles.name}>{account?.name}</Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={navigateToEditAccount}>
                            <Feather name="edit" size={24} color={colors.darkGray} />
                        </TouchableOpacity>
                    </View>
                    <Separator color={colors.lightGray} />
                    <Separator label="Geral" icon="file-text" color='white' />
                    <View style={styles.textRow}>
                        <Text style={styles.text}>Telefone: {account?.phone}</Text>
                    </View>
                    <Separator color={colors.lightGray} />
                    <Separator label="Endereço" icon="map-pin" color='white' />
                    <View style={styles.textRow}>
                        <Text style={styles.text}>Rua: {account?.street}, {account?.number}</Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.text}>Bairro: {account?.district}</Text>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.text}>Cidade: {account?.city}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}