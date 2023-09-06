import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from "../firebase/auth";
import { get, ref, set } from "firebase/database";
import database from "../firebase/database";

const SignUpPage = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleSignUp= async ()=>{
        await createUserWithEmailAndPassword(auth, email, password)
        // const user= credential.user;
        ToastAndroid.show("Sign Up Success", ToastAndroid.SHORT);
        await set(ref(database, `users/${auth.currentUser.uid}`),{
            displayName:`name${Math.random()}`,
            email:email,
            photoUrl:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'
        })
        let tempObj={}
        const res= await get(ref(database, `users`))
        const val= res.val();
        console.log('hy Ram!')
        // console.log('object here', val);
        for(let key in val){
            tempObj[key]= [{by:'test', msg:'test message', time:'12:12 PM'}]
        }
        console.log('final', tempObj);
        await set(ref(database, `chats/${auth.currentUser.uid}/chatList`),{...tempObj});
        // .catch((err)=>{
        //     console.log(err);
        //     ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
        // })
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.border}></View>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.desc}>Please Sign up to continue</Text>
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
            <TouchableOpacity style={styles.button} onPress={()=>handleSignUp()}>
                <CustomBtn text={"Sign up"} dark={false} />
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

export default SignUpPage;