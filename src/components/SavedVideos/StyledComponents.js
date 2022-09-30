/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const VideoViewContainer = Styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
`

export const TitleContent = Styled.p`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:10px;
    font-family:"Roboto";
`

export const IconContainer = Styled.p`
    height:30px;
    width:30px;
    border:none;
    border-radius:15px;
    background-color:#000000;
    font-size:20px;
    color: #ff0000;
    text-align:center;
    margin-right:15px;
    margin-left:50px;
`
export const SavedVideosHeader = Styled.div`
    height:50px;
    width:100%;
    min-width:430px;
    background-color:${props => (props.bgColor ? '#424242' : '#cccccc')};
    display:flex;
    align-items:center;
`

export const ContentDis = Styled.p`
    color:${props => (props.textColor ? '#cbd5e1' : '#00000')};
    font-size:7px;
    font-family:"Roboto";
    margin:3px;
`

export const ChannelLogo = Styled.img`
    margin-top:13px;
    margin-right:13px;
    height:40px;
    width:40px;
`

export const DetailedContainer = Styled.div`
    display:flex;
    align-items:center;
    margin:0px;
`

export const DetailsContainer = Styled.div`
    display:flex;
    min-width:220px;
    flex-direction:column;
    align-items:flex-start;
    margin:0px;
`
export const ThumbnailImage = Styled.img`
        height:120px;
        width:200px;
        margin-right:7px;
`

export const LstItemContainer = Styled.li`
    display:flex;
    align-items:flex-start;
    flex-shrink:1;
    width:300px;
    margin-left:10px;
    margin-bottom:10px;
`

export const ListItemsContainer = Styled.ul`
    display:flex;
    flex-direction:column;
    width:100%;
    min-height:100vh;
    min-width:410px;
    margin-top:20px;
    overflow-y:scroll;
`

// list containers above

export const Paragraph = Styled.p`
color:${props => (props.textColor ? '#ffffff' : ' #212121')};
font-size:15px;
font-family:"Roboto";
font-weight:400;
margin:0px;
`

export const SaveContent = Styled.h1`
color:${props => (props.textColor ? '#ffffff' : ' #212121')};
font-size:25px;
font-family:"Roboto";
font-weight:500;
`

export const Content = Styled.h1`
color:${props => (props.textColor ? '#ffffff' : ' #212121')};
font-size:25px;
font-family:"Roboto";
font-weight:500;
`
export const Image = Styled.img`
    width:200px;
    height:180px;
`

export const ContentContainer = Styled.div`
    width:75%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:50px;
    margin-left:100px;
`

export const ContentPage = Styled.div`
    display:flex;
    align-self:center;
`

export const SlideAndNotFound = Styled.div`
    width:100%;
    display:flex;
`

export const SavedContainer = Styled.div`
    min-height:100vh;
    display:flex;
    flex-direction:column;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#ffffff')}
`
