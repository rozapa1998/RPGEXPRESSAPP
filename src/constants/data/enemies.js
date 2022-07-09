import { Image } from "react-native"

export const Enemies = [
    
    //Nivel 1
    {
        id: 1,
        levelId: 1,
        name: "Lobo",
        HP: 20,
        ATQ: 3,
        DEF: 2,
        img: <Image source={require("../../../assets/img/Enemies/LV1/Wolf.gif")}/>
    },
    {
        id: 2,
        levelId: 1,
        name: "Escarabajo",
        HP: 15,
        ATQ: 3,
        DEF: 1,
        img: <Image source={require("../../../assets/img/Enemies/LV1/Escarabajo.gif")}/>
    },
    
    //Nivel 2
    {
        id: 3,
        levelId: 2,
        name: "Zombie",
        HP: 25,
        ATQ: 4,
        DEF: 2,
        img: <Image source={require("../../../assets/img/Enemies/LV2/Zombie.gif")} resizeMode="center" style={{height: 310, width: 250}}/>
    },
    {
        id: 4,
        levelId: 2,
        name: "Esqueleto",
        HP: 30,
        ATQ: 2,
        DEF: 4,
        img: <Image source={require("../../../assets/img/Enemies/LV2/Esqueleto.gif")}/>
    },
    {
        id: 5,
        levelId: 2,
        name: "Mago Esqueleto",
        HP: 30,
        ATQ: 2,
        DEF: 4,
        img: <Image source={require("../../../assets/img/Enemies/LV2/Mago-Esqueleto.gif")}/>
    },

    //Nivel 3
    {
        id: 6,
        levelId: 3,
        name: "Reaper",
        HP: 25,
        ATQ: 4,
        DEF: 2,
        img: <Image source={require("../../../assets/img/Enemies/LV3/Reaper.gif")}/>
    },
    {
        id: 7,
        levelId: 3,
        name: "Esqueleto",
        HP: 30,
        ATQ: 2,
        DEF: 4,
        img: <Image source={require("../../../assets/img/Enemies/LV3/Troll.gif")} resizeMode="center" style={{height: 310, width: 300}}/>
    },

    //Nivel 4
    {
        id: 8,
        levelId: 4,
        name: "Caballero",
        HP: 25,
        ATQ: 4,
        DEF: 2,
        img: <Image source={require("../../../assets/img/Enemies/LV4/Caballero.gif")}/>
    },
    {
        id: 9,
        levelId: 4,
        name: "Necro-Dragon",
        HP: 30,
        ATQ: 2,
        DEF: 4,
        img: <Image source={require("../../../assets/img/Enemies/LV4/Necro-dragon.gif")}/>
    }
]