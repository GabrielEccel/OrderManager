import { View } from "react-native";
import Header from "../../components/Header";

export default function Home() {

    return (
        <View style={{ flex: 1 }}>
            <Header label="Início" menu={true} />
        </View>

    );
}