import React, {useState} from "react";
import { View, Image, Text, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import { style } from "./styles";

const ImageSelector = ( { onImage } ) => {
    const [pickedUri, setPickerUri] = useState()

    const verifyPermissions = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync()

        if(status !== "granted"){
            Alert.alert(
                "Permisos insuficientes",
                "Necesita dar permisos de la camara para usar la aplicacion"
                [{text:"Ok"}]
            )
            return false;
        }

        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return;
        
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        })

        setPickerUri(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={style.container}>
            <View style={style.preview}>
                {!pickedUri ? (<Text style={style.textPreview}>No hay imagen seleccionada...</Text>)
                : (<Image
                style={style.image}
                source={{uri:pickedUri}}
                />)
                }
            </View>
            <View style={style.buttonTextContainer}>
            <TouchableOpacity onPress={handlerTakeImage}>
                <Text style={style.buttonText}>Tomar Foto...</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageSelector