import { useLocalSearchParams } from "expo-router";
import AccountInfo from "../../src/pages/accountInfo";

export default function AccountInfoScreen(){
    const { id } = useLocalSearchParams();

    return <AccountInfo id={id as string} />
}