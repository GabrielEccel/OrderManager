import { useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse"
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Alert } from "react-native";
import { formatPhone } from "../../utils/formatPhone";

export default function AccountUpsertController() {

    const { id } = useLocalSearchParams();
    const isNew = id === "new";

    const accountDatabase = useAccountDatabase();

    const [name, setName] = useState<string>();
    const [phone, setPhone] = useState<string>('');
    const [rawPhone, setRawPhone] = useState<string>('');
    const [street, setStreet] = useState<string>();
    const [number, setNumber] = useState<string>();
    const [district, setDistrict] = useState<string>();
    const [city, setCity] = useState<string>();

    useEffect(() => {
        async function loadAccount() {
            try {
                const data = await accountDatabase.getById(id.toString());

                if (!data) return;

                setName(data.name);
                setRawPhone(data.phone);
                setPhone(formatPhone(data.phone));
                setStreet(data.street);
                setNumber(data.number);
                setDistrict(data.district);
                setCity(data.city);

            } catch (error) {
                console.log(error);
            }
        }

        if (!isNew) {
            loadAccount();
        }

    }, [id]);

    async function saveAccount() {

        if (!name || !rawPhone) {
            Alert.alert("Erro ao salvar", "É necessário preencher o Nome e o Telefone");
            return;
        };

        try {
            const payload = {
                name,
                phone: rawPhone?.toString(),
                street: street || "",
                number: number || "",
                district: district || "",
                city: city || "",
            }

            if (isNew) {
                await accountDatabase.create(payload)
            } else {
                await accountDatabase.update({
                    id: Number(id),
                    ...payload
                })
            }

            router.back()

        } catch (error) {
            console.log(error)
        }
    }

    const toggleName = (value: string) => {
        setName(value);
    }

    const togglePhone = (value: string) => {
        const numbers = value.replace(/\D/g, '').slice(0, 11);

        setRawPhone("55" + numbers);
        setPhone(formatPhone(numbers));
    }

    const toggleStreet = (value: string) => {
        setStreet(value);
    }

    const toggleNumber = (value: string) => {
        setNumber(value);
    }

    const toggleDistrict = (value: string) => {
        setDistrict(value);
    }

    const toggleCity = (value: string) => {
        setCity(value);
    }

    return {
        name,
        toggleName,
        phone,
        togglePhone,
        street,
        toggleStreet,
        number,
        toggleNumber,
        district,
        toggleDistrict,
        city,
        toggleCity,
        saveAccount,
    }
}