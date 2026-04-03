import { FlatList, Text, View } from "react-native";
import Header from "../../components/Header";
import AddAccountButton from "../../components/AddAccountButton";
import { accountStyles as styles } from "./accountStyles";
import ShowAccount from "../../components/showAccount";
import AccountController from "./accountController";
import Loading from "../../components/loading";

export default function Accounts() {
    const { accounts, fetchAccounts, loading } = AccountController();

    if (loading) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Header label="Contas" menu={true} />
            <AddAccountButton />
            <View style={styles.list}>
                <FlatList
                    data={accounts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ShowAccount account={item} onRefresh={fetchAccounts} />
                    )}
                    contentContainerStyle={{ gap: 8 }}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyText}>
                            Nenhuma conta encontrada
                        </Text>
                    )}
                />
            </View>
        </View>
    );
}