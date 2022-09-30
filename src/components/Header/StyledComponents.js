/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const PopupContainer = Styled.div`
    display:flex;
    height:100vh;
    width:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
`
export const LogoutButton = Styled.button`
    height:20px;
    width:70px;
    background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')}
    border:${props =>
      props.btnColor ? '1px solid #ffffff' : '1px solid #3b82f6'};
    border-radius:3px;
    padding-bottom:6px;
    margin-left:10px;
    text-align:center;
    background-color:transparent;
    color:${props => (props.btnColor ? '#ffffff' : '#3b82f6')};
    font-size:15px;
    cursor: pointer;
    outline:none;
`

export const Content = Styled.p`
   color: ${props => (props.textColor ? '#ffffff' : '#000000')};
   font-size:20px;
   font-family:"Roboto";
   font-weight:500;
`

export const ModeButton = Styled.button`
    height:40px;
    width:40px;
    background-color:transparent;
    border:none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:10px;
    cursor: pointer;
    outline:none;
    

`

export const ProfileImage = Styled.img`
    height:20px;
    width:20px;
    margin-right:10px;
`

export const LogoImage = Styled.img`
    height:40px;
    width:100px;
    
`

export const ProfileContainer = Styled.li`
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color:transparent;
`

export const HeadContainer = Styled.ul`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self:flex-start;
    padding: 10px;
    margin:0px;
    background-color:${props => (props.bgColor ? '#181818' : '#ffffff')};
    list-style-type: none;
`
