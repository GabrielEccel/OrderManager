import { useSQLiteContext } from "expo-sqlite";

export type AccountDatabase = {
    id: number,
    name: string,
    document: string,
    street?: string,
    number?: string,
    district?: string,
    city?: string
    state?: string
}

export function useAccountDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<AccountDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO accounts (name, document) VALUES ($name, $document)"
        );

        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $document: data.document
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return {insertedRowId}

        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchByName(name: string){
        try {
            const query = "SELECT * FROM accounts WHERE name LIKE ?"

            const response = await database.getAllAsync<AccountDatabase>(query, `%${name}%`)

            return response;
        } catch (error) {
            throw error;
        }
    }


    return {
        create,
        searchByName
    }
}