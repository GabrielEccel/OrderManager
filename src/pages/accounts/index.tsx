import { FlatList, Text, View } from "react-native";
import Header from "../../components/Header";
import AddAccountButton from "../../components/AddAccountButton";
import { accountStyles as styles } from "./accountStyles";
import ShowAccount from "../../components/showAccount";
import AccountController from "./accountController";
import Loading from "../../components/loading";
import Finder from "../../components/finder";

export default function Accounts() {
    const { accounts, fetchAccounts, loading, filtered, toggleFiltered } = AccountController();

    if (loading) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Header label="Contas" menu={true} />
            <Finder item={accounts} onFiltered={toggleFiltered}/>
            <AddAccountButton />
            <View style={styles.list}>
                <FlatList
                    data={filtered}
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