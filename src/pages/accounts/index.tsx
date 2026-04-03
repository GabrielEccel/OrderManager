import { View } from "react-native";
import Header from "../../components/Header";
import AddAccountButton from "../../components/AddAccountButton";
import { accountStyles as styles } from "./accountStyles";

export default function Accounts() {

    return (
        <View style={styles.container}>
            <Header label="Contas" menu={true} />
            <AddAccountButton/>
        </View>

    );
}