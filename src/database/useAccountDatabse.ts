import { useSQLiteContext } from "expo-sqlite";
import { AccountDatabase } from "../types/accountDatabase";

export function useAccountDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<AccountDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO accounts (name, document, phone, street, number, district, city) VALUES ($name, $document, $phone, $street, $number, $district, $city)"
        );

        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $document: data.document,
                $phone: data.phone,
                $street: data.street ?? null,
                $number: data.number ?? null,
                $district: data.district ?? null,
                $city: data.city ?? null
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return { insertedRowId }

        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchByName(name: string) {
        try {
            const query = "SELECT * FROM accounts WHERE name LIKE ?"

            const response = await database.getAllAsync<AccountDatabase>(query, `%${name}%`)

            return response;
        } catch (error) {
            throw error;
        }
    }

    async function listAllAccounts() {
        try {
            const query = "SELECT * FROM accounts ORDER BY name"

            const response = await database.getAllAsync<AccountDatabase>(query)

            return response
        } catch (error) {
            throw error;
        }
    }

    async function deleteById(id: string) {
        try {
            await database.execAsync(`DELETE FROM accounts WHERE Id = ${id}`)
        } catch (error) {
            throw error;
        }
    }

    async function deleteAllAccounts() {
        try {
            await database.execAsync("DELETE FROM accounts");
        } catch (error) {
            throw error;
        }
    }


    return {
        create,
        searchByName,
        listAllAccounts,
        deleteById,
        deleteAllAccounts
    }
}