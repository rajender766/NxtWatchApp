import Styled from 'styled-components'

export const PageContainer = Styled.li`
    display: flex;
    align-items:center;
    align-self:center;
    background-color:transparent;
    margin-top:20px;
    color :${props => (props.tabColor ? '#ff0000' : '#00306e')};
   
`

export const ImageContainer = Styled.p`
    display: flex;
    align-items:center;
    background-color:transparent;
    margin:0px;
   
`

export const Content = Styled.h1`
    font-size:15px;
    font-family:"Roboto";
    margin:7px;
    color: ${props => (props.textColor ? '#f8fafc' : '#475569')};
`
