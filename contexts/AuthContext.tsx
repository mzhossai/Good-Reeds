import { createContext, useContext, useState, useEffect } from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import { AppwriteException, ID, Models } from "react-native-appwrite";
import { account } from "@/lib/appwrite";


type AuthContextType = {
    isSession: boolean;
    someUser: Models.User<Models.Preferences> | null;
    signInFunc: (email: string, password: string) => Promise<string | null>;    // think of these is function declerations in C++
    signUpFunc: (email: string, password: string) => Promise<string | null>;
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is what you wrap your components in
export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    
    const [session, setSession] = useState<boolean>(false);
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        getUser();
    }, []);


    const getUser = async() => {
        const session = await account.get();
        setUser(session);
    }




    const signIn = async(email: string, password: string) => {
        try {

            console.log(email, password);
            await account.createEmailPasswordSession(email, password);
            setSession(true);
            console.log(session)
            
            console.log("Sign in Successful! Welcome!");
            return null;

        } catch(error) {
            if (error instanceof AppwriteException) {
                if (error.code === 401) {

                    if (error.message === "Creation of a session is prohibited when a session is active.") {
                        console.log("You are already signed in.");
                        setSession(true);
                        return "You are already signed in.";
                    }
                    console.log("Invalid Password or Email");
                    return "Invalid Password or Email";
                }
                else {
                    console.error(error.message, error.code);
                    return error.message;
                }
            }
            return "An unknown error occured during Sign IN";
        }
    }



    const signUp = async(email: string, password: string) => {
        console.log("Is this working?");
        try {
            console.log("Entered the try block");
            await account.create(ID.unique(), email, password);
            console.log("Account Created Successfully!");
            // await signIn(email, password);
            return null;

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
                return error.message;
            }
            console.error(error)
            return "An unknown error occured during Sign UP";
        }
    }




    const contextData: AuthContextType = {
        isSession: session,
        someUser: user,
        signInFunc: signIn,
        signUpFunc: signUp
    }


    // ****************     This is temporary       **************** //
    useEffect(() => {;
        setTimeout(() => {
            setLoading(false);
        }, 0);
    })
    // ****************     This is temporary       **************** //
    



    return (
        <AuthContext.Provider value={contextData}>
            {loading ? (
                <SafeAreaView 
                    style={{
                        flex:1, 
                        justifyContent: "center", 
                        alignItems: "center"}}>
                    <ActivityIndicator 
                        color={"#BA8934"}
                        size={60}/>
                </SafeAreaView>
                ) : (
                children
                )
            }
        </AuthContext.Provider>
    );
};


// This is a hook you made to call grab the necessary data
export const useAuth = () => {
    
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}