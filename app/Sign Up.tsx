import { useAuth } from "../contexts/AuthContext"
import { useState } from "react";
import { useRouter } from "expo-router";
import {SafeAreaView, StatusBar, View} from "react-native";
import {Text, Button, TextInput} from "react-native-paper";
import { account } from "@/lib/appwrite";
import { ID } from "react-native-appwrite";

export default function SignUp() {
    const [Email, setEmail] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [error, setError] = useState<String | null>(null);
    
    const router = useRouter();

    const { signUpFunc, isSession } = useAuth();

    // Sign In Function
    const handleSignUp = async() => {
        await signUpFunc(Email, Password);
        console.log(Email);
        console.log(Password);
    }

    




    return (
        <>
            <SafeAreaView style={{ 
                            flex: 1,
                            backgroundColor: "#FAF7F0",
                            paddingHorizontal: 30}}>

                <StatusBar barStyle="light-content"/>

                <View style={{
                        flex: 1,
                        justifyContent: "center",
                        marginBottom: "65%"
                        }}>
                    
                    {/* Email Field */}
                    <TextInput
                        onChangeText={setEmail}

                        label={"Email"}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        mode="outlined"
                        outlineColor="#403A2F"
                        activeOutlineColor="#BA8934"
                        outlineStyle= {{borderWidth: 1.5, borderRadius: 12}}
                        style={{ 
                            marginBottom: 10
                            }} />


                    {/* Password Field */}
                    <TextInput
                        onChangeText={setPassword}
                        secureTextEntry={false}

                        label={"Password"}
                        keyboardType="visible-password"
                        autoCapitalize="none"
                        mode="outlined"
                        outlineColor="#403A2F"
                        activeOutlineColor="#BA8934"
                        outlineStyle= {{borderWidth: 1.5, borderRadius: 12}}
                    />

                    {/* Sign In Button */}
                    <Button
                        onPress={() => {handleSignUp()}}

                        mode="outlined"
                        textColor="white"
                        style={{
                            marginHorizontal: 80,
                            marginTop: 30,
                            marginBottom: 10,
                            backgroundColor: "#BA8934",
                            opacity: 1,
                            borderColor: "#8A620E",
                            borderWidth: 1.5,
                            borderRadius: 12
                        }}>
                        Sign Up
                    </Button>

                    {/* Forgot Password Field */}
                    <Button 
                        mode="text"
                        textColor="#403A2F">
                        Forgot Password?
                    </Button>
                </View>

                <View style={{
                        alignItems: "center", 
                        justifyContent: "center", 
                        marginHorizontal: 30, 
                        marginBottom: "15%"}}>
                    <Text>
                        By Using This App You Agree To My <Text style={{color: "#BA8934", fontWeight: "bold"}}>Terms Of Use, 
                        Privacy Policy</Text> and <Text style={{color: "#BA8934", fontWeight: "bold"}}>Ads Policy</Text>
                    </Text>
                </View>
                    
                
            </SafeAreaView>
        </>
    );
}