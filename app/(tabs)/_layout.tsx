import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    
    <Tabs>
      <Tabs.Screen name="MyBooks" options={{ headerShown: false }} />
      <Tabs.Screen name = "Discover" options={{ headerShown: false }} />
      <Tabs.Screen name = "Search" options={{ headerShown: false }} />
    </Tabs>

  );
}