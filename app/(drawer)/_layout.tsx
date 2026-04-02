import { Feather } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                drawerStyle: {
                    width: 250
                },
                drawerLabelStyle: {
                    fontSize: 20,
                }
            }}>
            <Drawer.Screen
                name="home"
                options={{
                    drawerLabel: 'Início',
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Feather name="home" size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="accounts"
                options={{
                    drawerLabel: 'Contas',
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Feather name="user" size={20} color={color} />
                    )
                }}
            />
        </Drawer>
    );
}