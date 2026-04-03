import { FlatList, View } from "react-native";
import Header from "../../components/Header";
import AddAccountButton from "../../components/AddAccountButton";
import { accountStyles as styles } from "./accountStyles";
import ShowAccount from "../../components/showAccount";
import AccountController from "./accountController";

export default function Accounts() {
    const {accounts, fetchAccounts} = AccountController();

    return (
        <View style={styles.container}>
            <Header label="Contas" menu={true} />
            <AddAccountButton />
            <View style={styles.list}>
                <FlatList 
                    data={accounts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <ShowAccount account={item} onRefresh={fetchAccounts}/>
                    )}
                />
            </View>
        </View>
    );
}