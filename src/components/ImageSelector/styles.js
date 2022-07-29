import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        marginBottom: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderRadius: 100 ,
        borderColor: "red"

    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        width: 200,
        height: 195,
    },
    textPreview:{
        fontFamily:"Bokor",
        fontSize: 15,
        width: 200,
        textAlign:"center",
        color: "white"
    },
    buttonTextContainer:{
        marginTop: 10,
        padding: 10,
        backgroundColor:"blue",
        borderRadius: 20,
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        fontSize: 15 ,
        fontFamily:"Bokor",
    }
});