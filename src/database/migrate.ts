import { type SQLiteDatabase } from "expo-sqlite";

export async function migrate(database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS accounts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            document TEXT,
            street TEXT,
            number TEXT,
            district TEXT,
            city TEXT
            state TEXT
        );
    `);
}