import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Stats from "../components/Screens/Stats/main";
import ShopScreen from "../components/Screens/ShopScreen";
import ScreenNavigation from "./ScreenNavigation";

 import { stylesTabNavigation } from "./stylesTabNavigation";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="Home" screenOptions={stylesTabNavigation} >
            <BottomTab.Screen name="Home" component={ScreenNavigation} 
            options={{
                tabBarIcon: ({focused }) =>(
                    <Ionicons name={focused ? "home" : "home-outline"} size={20} color={focused? "white":"black"}/>
                ),
            }}/>
            <BottomTab.Screen name="Shop" component={ShopScreen}
            options={{
                tabBarLabel: "Shop",
                tabBarIcon: ({focused }) =>(
                    <Ionicons name={focused ? "beer" : "beer-outline"} size={20} color={focused? "white":"black"}/>
                ),
            }}/>
            <BottomTab.Screen name="StatsTab" component={Stats}
            options={{
                tabBarLabel: "Stats",
                tabBarIcon: ({focused }) =>(
                    <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} size={20} color={focused? "white":"black"}/>
                ),
            }}/>
        </BottomTab.Navigator>
    ) 
}

export default TabNavigator