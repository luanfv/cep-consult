import styled from 'styled-components'
import {View, Text, TextInput, TouchableHighlight} from 'react-native'

export const Background = styled(View)`
    background-color: #5FB404;
    width: 100%;
    height: 100%;
`

export const Body = styled(View)`
    width: 80%;
    height: 60%;
    margin: auto;
    border-radius: 15px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: space-around;
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