/* eslint-disable import/prefer-default-export */
import Styled from 'styled-components'

export const SearchButton = Styled.button`
    display:flex;
    height:23px;
    width:40px;
    justify-content:center;
    align-items:center;
    border:0.5px solid #e2e8f0;
    background-color:  #475569;
    margin:0px;
    cursor: pointer;
    outline:none;
`

export const SearchContainer = Styled.div`
    display:flex;
    height:20px;
    width:250px;
    justify-content:flex-end;
    align-items:center;
    margin-top:20px;
    align-self:flex-end;
`

export const BannerCloseButton = Styled.button`
    height:30px;
    width:30px;
    background-color:transparent;
    border:none;
    font-family:"Roboto";
    text-align:center;
    font-size:20px;
    margin:10px;
    cursor: pointer;
    outline:none;
`

export const BannerCloseContainer = Styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:flex-start;
    margin:0px;
`

export const BannerButton = Styled.button`
    height:30px;
    width:100px;
    background-color:transparent;
    border1px solid #212121;
    border-radius:5px;
    font-family:"Roboto";
    text-align:center;
    font-size:10px;
    margin-bottom:7px;
    cursor: pointer;
    outline:none;
`

export const BannerContent = Styled.p`
    color:#212121;
    font-size:15px;
    fon-family:"Roboto";
`

export const BannerImage = Styled.img`
    height:40px;
    width:120px;
    margin-top:7px;
`
export const BannerContentContainer = Styled.div`
    display:flex;
    flex-direction:column;
`

export const BannerContainer = Styled.div`
    background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size:cover;
    height:100%;
    display:flex;
    justify-content:space-between;
    padding-left:20px;
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
`

export const ChannelLogo = Styled.img`
    margin-top:13px;
    margin-right:13px;
    height:40px;
    width:40px;
`

export const DetailsContainer = Styled.div`
    display:flex;
    align-items:flex-start;
    margin:0px;
`
export const ThumbnailImage = Styled.img`
        height:150px;
        width:300px;
`

export const LstItemContainer = Styled.li`
    display:flex;
    flex-direction:column;
    flex-shrink:1;
    height:220px;
    width:300px;
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
    align-self:center;
    margin-top:150px;
`

export const SlideAndHome = Styled.div`
    display:flex;
    height:100vh;
    width:100%;
    justify-content:space-between;
`

export const HomeContainer = Styled.div`
    background-color:${props => (props.bgColor ? '#181818' : '#ffffff')};
    display:flex;
    flex-direction:column;
    height:100vh;
`
