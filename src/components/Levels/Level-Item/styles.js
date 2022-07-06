import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    LevelContainer: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems:"center",
    },
    stage:{
        fontFamily:"Bokor",
        fontSize: 20
    },
    Level:{
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.36,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 2,
        padding: 15,
        paddingHorizontal: 50,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontFamily: "Bokor",
        fontSize: 20,
    },
    containerStage:{
        justifyContent:"center",
        alignItems:"center",
    }
})