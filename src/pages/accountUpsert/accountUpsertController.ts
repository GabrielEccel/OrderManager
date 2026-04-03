import { useEffect, useState } from "react";
import { useAccountDatabase } from "../../database/useAccountDatabse"
import { router } from "expo-router";

export default function AccountUpsertController(){
    const accountDatabase = useAccountDatabase();

    const [name, setName] = useState<string>();
    const [document, setDocument] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [street, setStreet] = useState<string>();
    const [number, setNumber] = useState<string>();
    const [district, setDistrict] = useState<string>();
    const [city, setCity] = useState<string>();

    async function saveAccount(){
        try {
            const response = await accountDatabase.create({
                name: name ?? "",
                document: document ?? "",
                phone: phone ?? "",
                street: street ?? "",
                number: number ?? "",
                district: district ?? "",
                city: city ?? ""
            })

            router.back()
        } catch (error) {
            console.log(error)
        }
    }

    const toggleName = (value: string) => {
        setName(value);
    }

    const toggleDocument = (value: string) => {
        setDocument(value);
    }

    const togglePhone = (value: string) => {
        setPhone(value);
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
        document,
        toggleDocument,
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