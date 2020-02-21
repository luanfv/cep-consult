import React from 'react'
import {View, Text} from 'react-native'
import {Body, Report, ReportTitle, ReportContent} from './styled'

export default ({route, navigation}) => 
{
  const cep = route.params.dataCep

  return (
    <Body>
      <Report>
        <ReportTitle>cep</ReportTitle>
        <ReportContent>{cep.cep}</ReportContent>
      </Report>

      <Report>
        <ReportTitle>estado</ReportTitle>
        <ReportContent>{cep.uf}</ReportContent>
      </Report>

      <Report>
        <ReportTitle>local/cidade</ReportTitle>
        <ReportContent>{cep.localidade}</ReportContent>
      </Report>

      <Report>
        <ReportTitle>bairro</ReportTitle>
        <ReportContent>{cep.bairro}</ReportContent>
      </Report>

      <View>
        <ReportTitle>logradouro</ReportTitle>
        <ReportContent>{cep.logradouro}</ReportContent>
      </View>
    </Body>
  )
}