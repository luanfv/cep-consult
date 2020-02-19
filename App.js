import React, {useState, useEffect} from 'react'
import {View, Text, TextInput} from 'react-native'
import {Background, Body, ButtonStyled, ButtonText, Title, CepInput, CepViewInput} from './styled'

export default () => 
{
  const [cep, setCep] = useState()

  const formatCep = async (inputCep) =>
  {
    let number = inputCep.replace(/[^\d]+/g,'')
    /**
     * Consulta na API
     */

    if(number.length > 8)
      number = number.substring(0, 8)

    if(number.length > 5)
      number = `${number.substring(0,5)}-${number.substring(5,8)}`
  
    await setCep(number)
  }

  useEffect(() => {
  }, [cep])

  return (
      <Background>
          <Body>
            <Title>Consulte um CEP</Title>

            <CepViewInput>
                <CepInput placeholder="Informe o CEP" value={cep} onChangeText={async e => await formatCep(e)} />
            </CepViewInput>

            <View>
              <ButtonStyled>
                <ButtonText>Buscar</ButtonText>
              </ButtonStyled>
            </View>
            
          </Body>
      </Background>
  )
}