import React, {useState, useEffect} from 'react'
import {View, Text, TextInput} from 'react-native'
import {Background, Body, ButtonStyled, ButtonText, Title, CepInput, CepViewInput, WarningText} from './styled'
import {handleCep} from './src/services/api'

export default () => 
{
  const [cep, setCep] = useState('')
  const [cepData, setCepData] = useState('')
  const [warning, setWarning] = useState('')

  const formatCep = (inputCep) =>
  {
    let number = inputCep.replace(/[^\d]+/g,'')

    if(number.length > 8)
      number = number.substring(0, 8)

    if(number.length > 5)
      number = `${number.substring(0,5)}-${number.substring(5,8)}`
  
    setCep(number)
  }

  const handleDataCep = () =>
  {
    setWarning('')
    if(cep.length === 9)
    {
      handleCep.get(`${cep}/json/`)
      .then((response) => {
        response.data.erro ? setWarning('CEP não encontrado') : setCepData(response.data)
      })
      .catch(() => {
        setWarning('Verifique sua conexão')
      })
    }
    else
    {
      setWarning('CEP deve conter 8 digitos')
    }
  }

  useEffect(() => {
    
  }, [cep])

  return (
      <Background>
          <Body>
            <Title>Consulte um CEP</Title>

            <View>
              <CepViewInput>
                <CepInput placeholder="Informe o CEP" maxLength={9} keyboardType={'numeric'}
                value={cep} onChangeText={e => formatCep(e)} />
              </CepViewInput>

              <WarningText>{warning}</WarningText>
            </View>

            <View>
              <ButtonStyled onPress={() => handleDataCep()}>
                <ButtonText>Buscar</ButtonText>
              </ButtonStyled>
            </View>
            
          </Body>
      </Background>
  )
}