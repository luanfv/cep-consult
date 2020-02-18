import React from 'react'
import {View, Text, TextInput} from 'react-native'
import {Background, Body, ButtonStyled, ButtonText} from './styled'

export default () => 
{
    return (
        <Background>
            <Body>
              <Text>Consulte os dados do CEP</Text>

              <View>
                  <TextInput placeholder="Informe o CEP" />
              </View>

              <View>
                <ButtonStyled>
                  <ButtonText>Buscar</ButtonText>
                </ButtonStyled>
              </View>
              
            </Body>
        </Background>
    )
}