import { type SQLiteDatabase } from "expo-sqlite";

export async function migrate(database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS accounts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            cpf TEXT,
            rua TEXT,
            numero TEXT,
            bairro TEXT,
            cidade TEXT
        );
    `);
}