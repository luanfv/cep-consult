import styled from 'styled-components'
import {View, Text, TextInput, TouchableHighlight} from 'react-native'

export const Body = styled(View)`
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 30% 2.5%;
`

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: 700;
`

export const ButtonStyled = styled(TouchableHighlight)`
    width: 1000px;
    max-width: 90%;
    padding: 15px;
    border-radius: 10px;
    background-color: #088A4B; 
`

export const ButtonText = styled(Text)`
    margin: auto;
    color: #fff;
    font-size: 18px;
`

export const CepInput = styled(TextInput)`
    width: 1000px;
    max-width: 90%;
    padding: 5px 15px;
    font-size: 18px;    
`

export const CepViewInput = styled(View)`
    border: #A4A4A4 solid 2px;
    border-radius: 5px;
`

export const WarningText = styled(Text)`
    padding-top: 5px;
    color: #A91D1D;
    text-align: center;
`