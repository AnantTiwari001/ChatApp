import { View, Text, StyleSheet, Button } from "react-native";
import CustomBtn from "../components/CustomBtn";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomePage = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 30 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('signin')}>
                    <CustomBtn text={'Log In'} dark={false} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('signup')} >
                    <CustomBtn text={'Sign Up'} dark={true} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomePage;