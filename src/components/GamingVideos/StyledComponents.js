/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const VideoViewContainer = Styled.div`
    height:100vh;
    width:100vh;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
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
    padding-top:3px;
    margin-right:15px;
    margin-left:50px;
`
export const SavedVideosHeader = Styled.div`
    height:50px;
    width:100vh;
    min-width:430px;
    background-color:${props => (props.bgColor ? '#424242' : '#cccccc')};
    display:flex;
    align-items:center;
`

// gaming icon

export const ContentDis = Styled.p`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:10px;
    font-family:"Roboto";
    margin:3px;
`

export const ContentText = Styled.p`
    color:${props => (props.textColor ? '#ffffff' : '#00000')};
    font-size:12px;
    font-family:"Roboto";
`

export const DetailsContainer = Styled.div`
    display:flex;
    align-items:flex-start;
    margin:0px;
`
export const ThumbnailImage = Styled.img`
        height:250px;
        width:150px;
`

export const LstItemContainer = Styled.li`
    display:flex;
    flex-direction:column;
    flex-shrink:1;
    height:280px;
    width:160px;
    margin:10px;
    margin-bottom:35px;
`

export const ListItemsContainer = Styled.ul`
    display:flex;
    width:100%;
    min-height:100vh;
    flex-wrap:wrap;
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
    width: 100vh;
    justify-content:space-between;
`

export const GameContainer = Styled.div`
    display:flex;
    flex-direction:column;
    width:100vh;
    height:100vh;
    max-height:1550px;
    background-color:${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
`
