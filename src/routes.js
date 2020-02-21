import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from './screens/Search'
import Cep from './screens/Cep'

const Stack = createStackNavigator() 

export default () => (
    <Stack.Navigator initialRouteName="Buscar">
        <Stack.Screen name="Buscar" component={Search} />
        <Stack.Screen name="Informações" component={Cep} />
    </Stack.Navigator>
)