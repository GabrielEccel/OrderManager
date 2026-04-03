import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Separator from "./Separator";
import { colors } from "../global/colors";
import { Feather } from "@expo/vector-icons";
import { AccountDatabase } from "../types/accountDatabase";
import { useAccountDatabase } from "../database/useAccountDatabse";

interface ShowAccountProps {
    account: AccountDatabase;
    onRefresh: () => void;
}

export default function ShowAccount({ account, onRefresh }: ShowAccountProps) {

    const accountDatabase = useAccountDatabase();
    
    async function deleteAccount(id: string){
        try {
            const response = await accountDatabase.deleteById(id);
            
        } catch (error) {
            console.log(error);
        } finally {
            onRefresh();
        }
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View style={styles.row}>
                <View style={styles.info}>
                    <Text style={styles.name}>{account.name}</Text>
                    <View style={styles.infoRow}>
                        <Feather name='file' size={18} color={colors.darkGray} />
                        <Text style={styles.rowText}>{account.document}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Feather name='phone' size={18} color={colors.darkGray} />
                        <Text style={styles.rowText}>{account.phone}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.deleteButton} activeOpacity={0.7} onPress={() => deleteAccount(account.id.toString())}>
                    <Feather name='trash' size={18} color='white' />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 120,
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    info: {
        flex: 1,
        height: '100%',
        padding: 16,
        gap: 4
    },
    name: {
        fontSize: 18,
        color: colors.darkGray,
        marginBottom: 6,
        fontWeight: '500'
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginLeft: 4
    },
    rowText: {
        color: colors.darkGray
    },
    deleteButton: {
        backgroundColor: colors.red,
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    }
});