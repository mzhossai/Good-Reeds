import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';





export default function Discover() {

    const router = useRouter();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Button onPress={() => router.push("/Fiction Books")}> Display Fiction Books </Button>
        </View>
    );
}