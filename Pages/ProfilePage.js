import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import CustomBtn from "../components/CustomBtn";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from "react";
import { LogContext } from "../App";
import { signOut } from "firebase/auth";
import auth from "../firebase/auth";

const ProfilePage = () => {
    const logValue= useContext(LogContext);
    const handleLogOut=()=>{
        signOut(auth).then(()=>{
            logValue.Login.setFunc();
            ToastAndroid.show("LogOut Success!", ToastAndroid.SHORT);
        }).catch((err)=>{
            ToastAndroid.show("Something went wrong!", ToastAndroid.SHORT);
            console.log(err);
        })
    }
    return (
        <GestureHandlerRootView>
            <View style={{ padding:20, alignItems:'center'}} >
                <Text style={{ fontSize: 27 }}>About User</Text>
                <TouchableOpacity style={{ width: 300, marginVertical:15 }} onPress={handleLogOut} >
                    <CustomBtn text={'log Out'} dark={false} />
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    )
}

export default ProfilePage;