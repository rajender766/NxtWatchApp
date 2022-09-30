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
     @media screen and (min-width:768){
        margin-right:70px;
        
    }
`
export const ThumbnailImage = Styled.img`
        height:120px;
        width:200px;
        margin-right:7px;
`

export const LstItemContainer = Styled.li`
    display:flex;
    max-height:100vh;
    background-color:${props => (props.bgColor ? '#f1f1f1' : '#313131')}
    overflow-y:auto;
    width:300px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
`

export const ListItemsContainer = Styled.ul`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    min-height:100vh;
    min-width:410px;
    margin-top:20px;
    list-style-type:none;
`

export const SuccessContainer = Styled.div`
    display:flex;
    max-height:100vh;
    background-color:${props => (props.bgColor ? '#f1f1f1' : '#313131')}
    align-self:flex-end;
    justify-content:center;
    overflow-y:auto;
`

export const FailureButton = Styled.button`
    height:30px;
    width:80px;
    background-color: #00306e;
    border:none;
    border-radius:5px;
    color:${props => (props.textColor ? '#ffffff' : '#ffffff')};
    font-size:15px;
    font-family:"Roboto";
    text-align:center;
    font-size:15px;
    cursor: pointer;
    outline:none;
    margin-top:10px;
`

export const TrendingContent = Styled.h1`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:20px;
    font-weight:500;
    font-family:"Roboto";
`

export const Content = Styled.h1`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:20px;
    font-weight:500;
    font-family:"Roboto";
`

export const FailureDescription = Styled.p`
   color:${props => (props.textColor ? '#ebebeb' : '#909090')};
   font-size:15px;
   font-family:"Roboto";
   text-align:center;
   margin:0px;
`

export const FailureTitle = Styled.h1`
   color:${props => (props.textColor ? '#ebebeb' : '#231f20')};
   font-size:22px;
   font-family:"Roboto";
   text-align:center;
`

export const FailureImage = Styled.img`
    height:200px;
    width:200px;
`

export const FailureViewContainer = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
    height:100%;
    width:75%;
`
export const LoaderContainer = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:180px;
    
`

export const SlideAndHome = Styled.div`
    display:flex;
    height:100vh;
    width:100%;
    justify-content:space-between;
`

export const TrendingContainer = Styled.div`
    background-color=${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
    display:flex;
    flex-direction:column;
    height:100vh;
    max-height:1550px;
`

/*  width:75%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
    margin-bottom:170px; */
