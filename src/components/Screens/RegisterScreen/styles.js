import { StyleSheet } from "react-native";

export const style = StyleSheet.create ({
    startContainer: {
        alignItems: "center",
        marginTop: 25,
    },
    containerKeyboard: {
        flex: 1,
        alignItems: "center",
    },
    fontTextTitleStart: {
        fontFamily: "Bokor",
        marginTop: 25,
        fontSize: 50,
        color:"#9932CC"
    },
    fontTextTitle: {
        fontFamily: "Bokor",
        fontSize: 35,
        textAlign:"center",
        color:"white"
    },
    fontText: {
        fontFamily: "Bokor",
        fontSize: 30,
        color:"white",
        textAlign:"center",
    },
    fontTextCuenta: {
        fontFamily: "Bokor",
        fontSize: 25,
        color:"white",
        textAlign:"center",
    },
    fontTextButton: {
        fontFamily: "Bokor",
        fontSize: 25,
        paddingHorizontal: 25, 
    },
    fontTextButtonLogin: {
        fontFamily: "Bokor",
        color:"#1E90FF",
        paddingHorizontal: 65,
        fontSize: 25, 
    },
    containerButton:{
        alignItems: "flex-end",
        padding: 20,
    },
    containerForm: {
        marginTop: 80,
    },
    input:{
        fontFamily:"Bokor",
        fontSize: 15,
        textAlign:"center",
        backgroundColor:"white",
        borderRadius: 10,
        height: 40,
        width: 220,
    },
    button: {
        marginEnd: 25,
        borderRadius:10,
        backgroundColor:"red",
    }
})