import Styled from 'styled-components'

export const PageContainer = Styled.li`
    display: flex;
    align-items:center;
    align-self:center;
    background-color:transparent;
    margin-top:20px;
    color :${props => (props.tabColor ? '#ff0000' : '#00306e')};
   
`


