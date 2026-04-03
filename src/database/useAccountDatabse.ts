import { useSQLiteContext } from "expo-sqlite";
import { AccountDatabase } from "../types/accountDatabase";

export function useAccountDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<AccountDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO accounts (name, phone, street, number, district, city) VALUES ($name, $phone, $street, $number, $district, $city)"
        );

        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $phone: data.phone,
                $street: data.street ?? "",
                $number: data.number ?? "",
                $district: data.district ?? "",
                $city: data.city ?? ""
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return { insertedRowId }

        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function getById(id: string) {
        try {
            return await database.getFirstAsync<AccountDatabase>(`SELECT * FROM accounts WHERE Id = ${id}`)
        } catch (error) {
            throw error;
        }
    }

    async function getAllAccounts() {
        try {
            const query = "SELECT * FROM accounts ORDER BY name"

            const response = await database.getAllAsync<AccountDatabase>(query)

            return response
        } catch (error) {
            throw error;
        }
    }

    async function update(data: AccountDatabase) {
        const statement = await database.prepareAsync(
            "UPDATE accounts SET name = $name, phone = $phone, street = $street, number = $number, district = $district, city = $city WHERE id = $id"
        );

        try {
            await statement.executeAsync({
                $name: data.name,
                $phone: data.phone,
                $street: data.street ?? null,
                $number: data.number ?? null,
                $district: data.district ?? null,
                $city: data.city ?? null,
                $id: data.id
            })
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync()
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
        getById,
        getAllAccounts,
        update,
        deleteById,
        deleteAllAccounts
    }
}