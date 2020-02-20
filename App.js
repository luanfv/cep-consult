import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from './src/screens/Search'
import Cep from './src/screens/Cep'

const Stack = createStackNavigator() 

export default () => 
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buscar CEP">
        <Stack.Screen name="Buscar CEP" component={Search} />
        <Stack.Screen name="Informações do CEP" component={Cep} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}