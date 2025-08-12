import { Account, Client } from 'react-native-appwrite';
import 'dotenv/config';


const client = new Client()
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setDevKey(process.env.EXPO_PUBLIC_APPWRITE_DEVKEY!);



export const account = new Account(client);