import { StyleSheet } from "react-native";

export const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
    },
    shadowContainer: {
        shadowColor: "#000000",
        shadowOpacity: 2.26,
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 8,
        elevation: 4,
    },
    fontText: {
        fontFamily: "Bokor",
        fontSize: 50,
        marginVertical: 25,
        color:"#ffffff"
    },
    fontTextButton: {
        fontFamily: "Bokor",
        fontSize: 35,
        paddingHorizontal: 25, 
    },
    image:{
        flex: 1,
        justifyContent:"center",
    },
    buttonContainer:{
        marginBottom: 55,
        justifyContent:"center",
        alignItems:"center"
    }
})