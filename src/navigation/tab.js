import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Stats from "../components/Screens/Stats/main";
import ShopScreen from "../components/Screens/ShopScreen";
import ScreenNavigation from "./ScreenNavigation";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home" component={ScreenNavigation} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused }) =>(
                    <Ionicons name={focused ? "home" : "home-outline"} size={20} color={focused? "black":"grey"}/>
                )
            }}/>
            <BottomTab.Screen name="ShopTab" component={ShopScreen}
            options={{
                tabBarLabel: "Shop",
                tabBarIcon: ({focused }) =>(
                    <Ionicons name={focused ? "beer" : "beer-outline"} size={20} color={focused? "black":"grey"}/>
                )
            }}/>
            <BottomTab.Screen name="StatsTab" component={Stats}
            options={{
                tabBarLabel: "Stats",
                tabBarIcon: ({focused }) =>(
                    <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} size={20} color={focused? "black":"grey"}/>
                )
            }}/>
        </BottomTab.Navigator>
    ) 
}

export default TabNavigator