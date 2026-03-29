import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                drawerStyle: {
                    width: 250
                }
            }}>
            <Drawer.Screen name="home" options={{ title: 'Início', headerShown: false }} />
        </Drawer>
    );
}