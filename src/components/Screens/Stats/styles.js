import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30,
    },
    textFont:{
        color: "white",
        fontFamily:"Bokor",
        fontSize: 50,
    },
    fontTextSub:{
        fontFamily:"Bokor",
        fontSize: 20,
        color:"white"
    },
    buttonCreateStats:{
        marginTop: 25,
        backgroundColor:"red",
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    TextInput:{
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:"white",
        borderRadius: 10,
        fontFamily:"Bokor",
        fontSize: 15,
        padding: 8,
        width: 160,
    }
})