import React from 'react'
import {View, Text} from 'react-native'

export default ({route, navigation}) => 
{
  console.log(route.params.dataCep)
  return (
    <View>
      <Text>
        CEP ENCONTRADO
      </Text>
    </View>
  )
}