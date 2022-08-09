import React from "react";
import { useState , useEffect} from "react";
import {View, Text, StyleSheet, Image, FlatList} from "react-native";



const Profile = () => {

    const [profile, setProfile] = useState('');
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        async function fetchData() {

        const response = await fetch('https://api.github.com/users/gaspigon');
        const json = await response.json();
        setProfile(json.avatar_url);
        setName(json.name);
        setLogin(json.login);
        setLocation(json.location);
        }
        fetchData();
     },[])

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{uri: profile}} style={styles.image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.title}  >Nombre: {name}</Text>
                <Text style={styles.title} >Usuario: {login}</Text>
                <Text style={styles.title} >Localidad: {location}</Text>
            </View>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
  
        justifyContent: "center",
        alignItems: "center",

        
        
        

    },
    image: {
    
        width: '60%',
        height: '60%',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        marginBottom: 40,

    },
    iima: {
        
        width: '100%',
        height: '100%',
        borderRadius: 15,

    
    },
    info: {
        
        width: '60%',
        height: 300,
        
        border: 1,
        borderColor: '#47484E',
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
},
    title: {
        width: '100%',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#47484E',
        maxWidth: '100%',
        fontFamily: 'RobotoBold',
        marginBottom: 10,



    }
});

export default Profile;