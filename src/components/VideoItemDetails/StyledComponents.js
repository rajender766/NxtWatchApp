/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const LikeButton = Styled.button`
    background-color: transparent;
    border:none;
    color:${props => (props.fontColor ? '#2563eb' : '#64748b')};
    font-size:20px;
    font-family:"Roboto";
    text-align:center;
    cursor: pointer;
    outline:none;
    margin-right:5px;
`

export const CustomButton = Styled.button`
    background-color: transparent;
    border:none;
    color:${props => (props.fontColor ? '#2563eb' : '#64748b')};
    font-size:20px;
    font-family:"Roboto";
    text-align:center;
    cursor: pointer;
    outline:none;
    margin-right:5px;
`

export const LikeSharesContainer = Styled.div`
    display:flex;
    height:40px;
    width:100%;
    justify-content:space-between;
    margin-top:10px;
    @media screen and (min-width: 768px){
        margin-top:0px;
    }
`

export const HorizontalLine = Styled.hr`
 width:100%;
 height:2px;
background-color:${props => (props.textColor ? '#ffffff' : '#000000')};
`

export const VideoContainer = Styled.div`
    height:200px;
    width:400px;
    min-width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-size:cover;
    margin-top:50px;
    margin-bottom:30px;
    @media screen and (min-width: 768px){
        width:350px
        height:200px
        align-self:flex-start;
    }
`

export const ContentDis = Styled.p`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:10px;
    font-family:"Roboto";
    margin:3px;
`

export const Content = Styled.p`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:12px;
    font-family:"Roboto";
    align-items:center;
    margin-top:5px;
    @media screen and (min-width: 768px){
        margin-top:30px;
    }
`

export const ChannelLogo = Styled.img`
    margin-right:13px;
    height:40px;
    width:40px;
`

export const DetailedContainer = Styled.div`
    display:flex;
    align-items:flex-start;
    align-items:center;
    margin-top:0px;
`

export const DetailsContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-top:30px;
    @media screen and (min-width > 768px){
        margin-left:70px;
    }
   
`

export const LstItemContainer = Styled.div`
    min-hight:100vh;
    max-height:1000px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    margin:10px;
    overflow-y:auto;
`

export const SuccessContainer = Styled.div`
    display:flex;
    max-height:100vh;
    max-height:100%;
    background-color:${props => (props.bgColor ? '#f1f1f1' : '#313131')}
    align-items:center;
    overflow-y:auto;
    @media screen and (min-width: 768px){
       align-self:center;
       margin-left:180px;
    }
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
    align-self:flex-end;
    height:100%;
    width:75%;
`
export const LoaderContainer = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    align-self:center;
    margin-left:200px;
`

export const SlideAndHome = Styled.div`
    display:flex;
    height:100vh;
`

export const VideoViewContainer = Styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100%;
    max-height:1550px;
    flex-shrink:1;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
`

/*  width:75%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
    margin-bottom:170px; */
