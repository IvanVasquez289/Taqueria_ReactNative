import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from "./screens/HomeScreen";
import OrdenesPendientes from "./screens/OrdenesPendientes";
import StackScreen from "./screens/StackScreen";
import PedidoScreen from "./screens/PedidoScreen";
import ProductDetails from "./screens/ProductDetails";
const HomeStack = createNativeStackNavigator()
const MyStack = () => {
    return (
        <HomeStack.Navigator initialRouteName="HomeScreen">
            <HomeStack.Screen 
                name="Menú" 
                component={HomeScreen}
                options={{
                    headerStyle:{backgroundColor:'orange'},
                    headerTitleStyle:{fontSize:20, color:'white'}
                }}
            />
            <HomeStack.Screen 
                name="ProductDetails" 
                component={ProductDetails} 
                options={{
                    headerBackTitle: 'Menú',
                    headerStyle:{backgroundColor:'#33BBC5'},
                    headerTitleStyle:{fontSize:20, color:'white'},
                    title: 'Detalles del Producto'
                }}
            />
        </HomeStack.Navigator>
    )
} 


const Tab = createBottomTabNavigator();
const MyTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor:'orange',
       
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    tabBarBadge:4,
                    headerShown:false
                }}
            />

            <Tab.Screen
                name="Pedido"
                component={PedidoScreen}
                options={{
                    tabBarLabel:'Pedido',
                    tabBarIcon: ({color,size}) => (
                        <Ionicons name="fast-food" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Ordenes Pendientes" 
                component={OrdenesPendientes}
                options={{
                    tabBarLabel:'Ordenes',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="clipboard-list" size={size} color={color} />
                    ),
                    tabBarBadge:1,
                }}
            />
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

export default Navigation