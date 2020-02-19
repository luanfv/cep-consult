import styled from 'styled-components'
import {View, Text, TextInput, TouchableHighlight} from 'react-native'

export const Background = styled(View)`
    background-color: #5FB404;
    width: 100%;
    height: 100%;
`

export const Body = styled(View)`
    width: 80%;
    max-width: 300px;
    height: 60%;
    max-height: 400px;
    margin: auto;
    border-radius: 15px;
    background: #fff;
    padding: 10px; 

    display: flex;
    align-items: center;
    justify-content: space-around;
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
    background-color: #045FB4; 
`

export const ButtonText = styled(Text)`
    margin: auto;
    color: #fff;
    font-size: 16px;
`

export const CepInput = styled(TextInput)`
    width: 1000px;
    max-width: 90%;
    padding: 5px 15px;
    font-size: 16px;    
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