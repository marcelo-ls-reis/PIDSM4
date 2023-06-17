import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Registration from './pages/registration'

const Stack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{
                    title: 'LOGIN',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#3498db'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                    }}/>
                 <Stack.Screen name="registration" component={Registration} options={{
                    title: 'Cadastro de Usuário',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#3498db'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#F2F5F7',
                    },
                }}/> 
                <Stack.Screen name="dashboard" component={Dashboard} options={{
                    title: 'Projeto 4º DSM',
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#3498db'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#F2F5F7',
                    },
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}