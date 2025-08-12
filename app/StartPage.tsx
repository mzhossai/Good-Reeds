/*
        1. Starting Page
         	- it says in big bold letters "GoodReeds		|Side Note| Try using an actual clean background image
         				        Find your next
         				       	  reed today ".
         	- somewhere in the middle center
         		- has two buttons: continue with google	    <-- redirects to signUp page
         				   continue with email	            <-- redirects to signUp page
         	- below that it says: "Already a reeder?"
         				Sign in			                    <-- redirects to signIn page

*/




import { View, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from "@/contexts/AuthContext";




export default function startPage() {
    const router = useRouter();
    const {isSession} = useAuth();

    return (
        <>
            
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FAF7F0"}}>   
                <StatusBar barStyle="dark-content"/>    
                <View style={{ justifyContent: "center", alignItems: "center", width: "90%", height: "100%"}}>
                    <View style={{ justifyContent: "center", alignItems: "flex-start", marginBottom: 30}}>
                        <Text
                            style={{
                                fontSize: 38, 
                                fontWeight: "bold",
                                fontFamily: "serif",
                                marginBottom: 20,
                                padding: 15,
                                borderWidth: 3,
                                borderBottomWidth: 7,
                                borderBottomColor: "#403A2F",
                                borderRadius: 20,
                                borderColor: "#403A2 ",
                                color: "#403A2F"
                                }}>
                            Good <Text style={{ color: "#BA8934"}}>Reeds </Text>
                            <FontAwesome5 
                                Icon name="book" 
                                size={35} 
                                color="#403A2F"
                                />
                        </Text> 
                        <Text
                            style={{
                                color: "#403A2F",
                                fontSize: 30, 
                                fontWeight: "bold",
                                fontFamily: "serif",
                                paddingLeft: 25,
                                }}>
                            Find your next
                        </Text> 
                        <Text
                            style={{
                                color: "#403A2F",
                                fontSize: 30, 
                                fontWeight: "bold",
                                fontFamily: "serif",
                                paddingLeft: 110
                                }}>
                            <Text style={{ color: "#BA8934" }}>Reed</Text> Today
                        </Text>
                    </View>
                            
                            
                    <Button 
                        mode="contained" 
                        onPress={() => console.log("Pressed")}
                        style={{
                            width: "90%",
                            borderColor: "#E8AB46",
                            borderWidth: 2,
                            backgroundColor: "#876A3A",
                            marginVertical: 5,
                            opacity: 0.92
                        }}>
                            Continue with Google
                    </Button>   
                    <Button 
                        mode="contained" 
                        onPress={() => router.push("/Sign Up")}
                        style={{
                            width: "90%",
                            borderColor: "#9E9B9B",
                            borderWidth: 2,
                            marginVertical: 5,
                            backgroundColor: "#403A2F",
                            opacity: 0.92
                        }}>
                            Continue with Email
                    </Button>   


                    <View style={{
                        alignItems: "center", 
                        justifyContent: "center", 
                        marginHorizontal: 25,
                        marginVertical: 15}}>
                        <Text style={{textAlign: "center"}}>
                            By Creating An Account You Agree To My <Text style={{color: "#BA8934", fontWeight: "bold"}}>Terms Of Use, 
                            Privacy Policy</Text> and <Text style={{color: "#BA8934", fontWeight: "bold"}}>Ads Policy</Text>
                        </Text>
                    </View>


                    <Text style={{marginTop: 20, fontWeight: "bold", color: "#403A2F"}}>
                        Already a Reeder?
                    </Text>
                    <Button 
                        mode="text" onPress={() => router.push("/Sign In")}
                        textColor="#BA8934">
                        Sign In
                    </Button>

                    <Button
                        onPress={() => router.push("/(tabs)/MyBooks")}>
                        Home
                    </Button>
                </View>
            </SafeAreaView>
        </>
    );
}