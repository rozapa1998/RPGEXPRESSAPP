import { StyleSheet } from "react-native";

export const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
    },
    fontText: {
        fontFamily: "Bokor",
        fontSize: 50,
        marginVertical: 25,
        color:"white"
    },
    fontTextButton: {
        fontFamily: "Bokor",
        fontSize: 35,
        paddingHorizontal: 25, 
    },
    buttonContainer:{
        marginBottom: 55,
        justifyContent:"center",
        alignItems:"center"
    },
    shadowContainer: {
        shadowColor: "#000000",
        shadowOpacity: 2.26,
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 8,
        elevation: 4,
    },
})