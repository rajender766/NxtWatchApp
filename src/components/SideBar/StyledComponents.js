/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

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
export const PageContainer = Styled.li`
    display: flex;
    align-items:center;
    align-self:center;
    background-color:transparent;
    margin-top:20px;
    color :${props => (props.tabColor ? '#ff0000' : '#00306e')};
   
`

export const LogosContainer = Styled.div`
    display: flex;
    flex-direction:column;
    align-self:flex-start;
    background-color:transparent;
    margin:0px;
    list-style-type: none;
`

export const SliderLinksContainer = Styled.div`
    display: flex;
    flex-direction:column;
    align-self:flex-start;
    background-color:transparent;
    margin:0px;
    list-style-type: none;
`

export const SliderContainer = Styled.div`
    min-height:450px;
    max-height:100%;
    width: 125px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding-left:4px;
    margin:0px;
    background-color:${props => (props.bgColor ? '#272727' : '#ffffff')};
`
