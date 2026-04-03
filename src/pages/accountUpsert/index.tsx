import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { accountUpsertStyles as styles } from "./accountUpsertStyles";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import Separator from "../../components/Separator";
import AccountUpsertController from "./accountUpsertController";

export default function AccountUpsert() {
    const {name, toggleName, document, toggleDocument, phone, togglePhone, street, toggleStreet, number, toggleNumber, district, toggleDistrict, city, toggleCity, saveAccount} = AccountUpsertController();

    return (
        <ScrollView style={styles.container}>
            <Header label="Dados da contas" back={true} />
            <View style={styles.bg}>
                <View style={styles.info}>
                    <Separator label="Geral" icon="file-text" />
                    <Input placeholder="" label="Nome" value={name} onChangeText={toggleName}/>
                    <Input placeholder="" label="Documento" keyboardType="numeric" value={document} onChangeText={toggleDocument}/>
                    <Input placeholder="" label="Telefone" keyboardType="numeric" value={phone} onChangeText={togglePhone}/>
                    <Separator label="Endereço" icon="map-pin" />
                    <Input placeholder="" label="Rua" value={street} onChangeText={toggleStreet}/>
                    <Input placeholder="" label="Número" keyboardType="numeric" value={number} onChangeText={toggleNumber}/>
                    <Input placeholder="" label="Bairro" value={district} onChangeText={toggleDistrict}/>
                    <Input placeholder="" label="Cidade" value={city} onChangeText={toggleCity}/>
                    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={saveAccount}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}