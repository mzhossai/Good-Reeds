import { Stack } from "expo-router";
import { useAuth, AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout() {

  // const Guard = ({children} : {children: React.ReactNode}) => {

  //   const isAuth = false;

  //   if (!isAuth) {
      
  //   }


  //   return (
  //     <>
  //       {children}
  //     </>
  //   )
  // }



  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="StartPage" options={{ headerShown: false }} />
        <Stack.Screen name="Sign In" options={{ 
                                      headerShown: true, 
                                      headerTitle: "Sign In", 
                                      headerStyle: {backgroundColor: "#403A2F"},
                                      headerTitleStyle: {fontWeight: "bold", fontFamily: "serif"},
                                      headerTintColor: "#FAF7F0"}} />
        <Stack.Screen name = "Fiction Books"  options={{ 
                                            headerShown: true, 
                                            headerTitle: "Fiction Books", 
                                            headerStyle: {backgroundColor: "#403A2F"}, 
                                            headerTitleStyle: {
                                              fontWeight: "bold", 
                                              fontFamily: "serif",}, 
                                            headerTintColor: "#FAF7F0",
                                            }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
      </Stack>
    </AuthProvider>

  );
}
