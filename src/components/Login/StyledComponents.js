/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const ErrorMsg = Styled.p`
    color:#ff0b37;
    font-size: 15px;
    font-family: "Roboto";
    margin-top:10px;
`

export const LoginButton = Styled.button`
height:30px;
width:100%;
text-align:center;
background-color: #3b82f6;
border:none;
border-radius:7px;
align-self:flex-stretch;
color:#ffffff;
font-size:15px;
font-family:"Roboto";
font-weight:400;
margin-bottom:10px;
margin-top:10px;
cursor: pointer;
outline:none;
`

export const LabelElement = Styled.label`
    color:${props => (props.content ? '#616e7c' : ' #212121')};
    font-size:14px;
    font-family:"Roboto";
    font-weight:400;
    margin-bottom:7px;
`
export const Checkbox = Styled.input`
    cursor: pointer;
    outline:none;
`
export const LogoImage = Styled.img`
    width:100px;
    margin-bottom:20px;
    align-self:center;
`

export const ResponsiveContainer = Styled.div`
    display:flex;
    hight:700px;
    width:250px;
    padding:30px;
    flex-direction:column;
    box-shadow:0px 0px 5px 5px #cccccc;
`

export const LoginContainer = Styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#ffffff;
min-height:100vh;
`
