import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    LevelContainer: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 120,
    },
    stage:{
        fontFamily:"Bokor",
    },
    Level:{
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.36,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 2,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        padding: 10,
        width: 320,
    },
    title:{
        fontFamily: "Bokor",
        fontSize: 20,
    },
})