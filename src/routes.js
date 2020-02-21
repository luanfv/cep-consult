import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from './screens/Search'
import Cep from './screens/Cep'
import { Background } from './screens/Search/styled'

const Stack = createStackNavigator() 
const configHeader = {
    headerStyle: {
        backgroundColor: '#088A4B'
    }, 
    headerTintColor: '#fff',
}

export default () => (
    <Stack.Navigator initialRouteName="Buscar">
        <Stack.Screen name="Buscar" options={configHeader} component={Search} />
        <Stack.Screen name="Informações" options={configHeader} component={Cep} />
    </Stack.Navigator>
)