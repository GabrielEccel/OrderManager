import { useSQLiteContext } from "expo-sqlite";

export type AccountDatabase = {
    id: number,
    name: string,
    cpf: string,
    rua?: string,
    numero?: string,
    bairro?: string,
    cidade?: string
}

export function useAccountDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<AccountDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO accounts (name, cpf) VALUES ($name, $cpf)"
        );

        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $cpf: data.cpf
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