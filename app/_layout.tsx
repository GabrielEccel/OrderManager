import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { migrate } from '../src/database/migrate';

export default function RootLayout() {
    return (
        <SQLiteProvider databaseName="myDatabase.db" onInit={migrate}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }} />
            </GestureHandlerRootView>
        </SQLiteProvider>
    );
}