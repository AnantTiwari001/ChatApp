import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import auth from "../firebase/auth";
import { get, ref, set } from "firebase/database";
import database from "../firebase/database";

const ChatPage = () => {
    const route = useRoute();
    const [chatArray, setChatArray]= useState(route.params.array)
    const [inputText, setInputText] = useState("");
    const handleSubmit = async () => {
        const myDocRef = ref(database, `/chats/${auth.currentUser.uid}/chatList/${route.params.key}`);
        // const response= await get(myDocRef);
        await set(myDocRef, [...route.params.array, { by: 'me', msg: inputText, time: formatedTime() }])
        setChatArray([...chatArray, {by: 'me', msg: inputText, time: formatedTime()}])
        // console.log(response);

        const targetDocRef= ref(database, `/chats/${route.params.key}/chatList/${auth.currentUser.uid}`);
        await set(targetDocRef, [...route.params.array, { by:'opponent', msg: inputText, time: formatedTime() }])
        setInputText('')
    }

    const formatedTime = () => {
        const timeObj = new Date();
        let time = "";
        timeObj.getHours() > 12
            ? (time =
                (timeObj.getHours() - 12).toString() +
                ":" +
                (timeObj.getMinutes > 9
                    ? "0" + timeObj.getMinutes().toString()
                    : timeObj.getMinutes().toString()) +
                " PM")
            : (time =
                timeObj.getHours().toString() +
                ":" +
                (timeObj.getMinutes > 9
                    ? "0" + timeObj.getMinutes().toString()
                    : timeObj.getMinutes().toString()) +
                "AM");
        return time;
    };

    useEffect(() => {
        // console.log(auth.currentUser.uid);
        // rough();
    }, [])
    const rough=async()=>{
        const myDocRef = ref(database, `/chats/${auth.currentUser.uid}/chatList/x43Q5qZ2f9QXPDhcghfbhnbTdEi1`);
        const response=  get(myDocRef);
        console.log(response);
    }
    return (
        <View style={{ marginTop: 43, flex: 1 }} >
            <View style={{ flex: 1 }}>
                {chatArray.map((item, index) => (
                    <View style={[styles.chatItem, item.by == 'me' ? { alignSelf: 'flex-end', backgroundColor: 'blue' } : { alignSelf: 'flex-start', backgroundColor: 'tomato' }]} key={index} >
                        <Text style={{ fontSize: 10, color: 'white', fontStyle: 'italic' }} >~ {item.by}</Text>
                        <Text style={{ fontSize: 16, color: 'white' }} >{item.msg} </Text>
                        <Text style={{ textAlign: "right", color: 'white', fontSize: 11 }} >{'10:11 PM '}</Text>
                    </View>
                ))}
            </View>
            <View style={{ padding: 11 }}>
                <TextInput onSubmitEditing={handleSubmit} value={inputText} onChangeText={(newText) => setInputText(newText)} placeholder="Type your message here" style={{ borderWidth: 1, paddingVertical: 7, paddingHorizontal: 11, borderRadius: 12 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chatItem: {
        backgroundColor: 'blue',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 17,
        marginVertical:4
    }
})

export default ChatPage;