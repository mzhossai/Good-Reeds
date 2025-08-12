// Note: Get a nice transition animation for switching between tabs


import { useAuth } from "../contexts/AuthContext"
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {SafeAreaView, StatusBar, View} from "react-native";
import {Text, Button, TextInput} from "react-native-paper";
import { AppwriteException } from "react-native-appwrite";






export default function Autherization() {


    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<String | null>(null);
    
    const router = useRouter();

    const { signInFunc, isSession } = useAuth();



        useEffect(() => {
        if (isSession) {
            router.replace("/(tabs)/MyBooks");
        }
        }, [isSession]);

    

    // Sign In Function
    const handleSignIn = async() => {

        setError(null);
        console.log("Before the signin function");
        const result = await signInFunc(email, password);
        

        if (result === "Invalid `password` param: Password must be between 8 and 256 characters long.") {
            setError("Password must be between 8 and 256 characters long.");
            return;
        }
        if (result === "Invalid `email` param: Value must be a valid email address") {
            setError("Email is invalid.");
            return;
        }
        if (result === "Invalid Password or Email") {
            setError("This password and email combination does not exist.");
            return;
        }
        if (result === "You are already signed in.") {
            setError(null);
            return;
        }
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
                        mode="outlined"
                        outlineColor="#403A2F"
                        activeOutlineColor="#BA8934"
                        outlineStyle= {{borderWidth: 1.5, borderRadius: 12}}
                    />

                    {/* Error Message */}
                    {error && <Text style={{ color: "#bf2b1d", marginTop: 10}}>{error}</Text>}

                    {/* Sign In Button */}
                    <Button
                        onPress={() => {handleSignIn()}}

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
                        Sign In
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