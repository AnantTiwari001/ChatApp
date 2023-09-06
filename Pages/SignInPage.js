import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import { useContext, useState } from "react";
import auth from "../firebase/auth";
import { signInWithEmailAndPassword} from 'firebase/auth'
import { LogContext } from "../App";

const SignInPage = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const logValue= useContext(LogContext);

    const handleLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((credential)=>{
            const user = credential.user;
            ToastAndroid.show("Login Success", ToastAndroid.SHORT);
            logValue.Login.setFunc();
        }).catch((err)=>{
            console.log(err);
            ToastAndroid.SHORT("something went wrong", ToastAndroid.SHORT);
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.border}></View>
                <Text style={styles.title}>Log in</Text>
                <Text style={styles.desc}>Please log in to continue</Text>
            </View>
            <View style={styles.form}>
                <CustomInput
                    title={"Email"}
                    textInput={email}
                    setFunction={(newText) => {
                        setEmail(newText);
                    }}
                />
                <CustomInput
                    title={"Password"}
                    textInput={password}
                    setFunction={(newText) => setPassword(newText)}
                />
                <Text style={styles.forgot} onPress={() => console.log('currentUser here:')} >Forgot Password?</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
                <CustomBtn text={"Log in"} dark={false} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 35,
    },
    form: {
        marginBottom: 50,
    },
    forgot: {
        alignSelf: "flex-end",
        color: "#121212",
    },
    button: {
        alignSelf: "center",
    },
    title: {
        fontSize: 32,
        color: "#121212",
        fontWeight: "600",
    },
    desc: {
        opacity: 20,
        color: "#121212",
    },
    textContainer: {
        position: "relative",
        paddingVertical: 5,
        marginVertical: 20,
    },
    border: {
        borderWidth: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "25%",
        borderColor: "#121212",
    },
});

export default SignInPage;