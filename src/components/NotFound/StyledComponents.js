/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const Paragraph = Styled.p`
color:${props => (props.textColor ? '#ffffff' : ' #212121')};
font-size:15px;
font-family:"Roboto";
font-weight:400;
margin:0px;
`

export const Content = Styled.h1`
color:${props => (props.textColor ? '#ffffff' : ' #212121')};
font-size:25px;
font-family:"Roboto";
font-weight:500;
`
export const Image = Styled.img`
    width:200px;
    height:200px;
    @media screen and (min-width:768px){
        width:270px;
        height:240px;
    }
`

export const ContentContainer = Styled.div`
    width:75%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
    margin-bottom:100px;
`

export const SlideAndNotFound = Styled.div`
    width:100%;
    display:flex;
    align-items:center;
`

export const NotFoundContainer = Styled.div`
    min-height:100vh;
    display:flex;
    flex-direction:column;
`
