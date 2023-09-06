import { View, Text, StyleSheet, TouchableOpacity, Image , Button} from "react-native";
import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database'
import database from "../firebase/database";
import auth from "../firebase/auth";
import { TabRouter } from "@react-navigation/native";

const HomePage = ({navigation}) => {
    const [contact, setContact] = useState({});
    useEffect(() => {
        console.log('Home Page!', auth.currentUser.uid);
        const docRef = ref(database, `/chats/${auth.currentUser.uid}/chatList`);
        onValue(docRef, (snapshot) => {
            let value = snapshot.val();
            setContact({ ...value })
            console.log(value);
        })
    }, [])
    const rough= ()=>{
        console.log(contact[Object.keys(contact)[0]])
    }
    return (
        <View style={{ paddingVertical: 30, paddingHorizontal: 7 }}  >
            {Object.keys(contact).map((key) => (
                auth.currentUser.uid!= key &&
                <TouchableOpacity key={key} style={styles.chatItem} onPress={() => navigation.navigate('chat', {array:contact[key], key:key})} >
                    <Image style={{ height: 40, aspectRatio: 1, borderRadius: 30, marginRight: 15 }} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg' }} />
                    <View>
                        <Text style={{ fontSize: 18, }} >{key}</Text>
                        <Text style={{ fontSize: 13, opacity: 0.7 }} >{contact[key][contact[key].length -1].msg}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            {/* <Button title="rough" onPress={rough} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    chatItem: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    }
})

export default HomePage;