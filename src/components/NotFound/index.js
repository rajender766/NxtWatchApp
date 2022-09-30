/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import ModeContext from '../../Context/ModeContext'

import {
  NotFoundContainer,
  ContentContainer,
  Image,
  SlideAndNotFound,
  Content,
  Paragraph,
} from './StyledComponents'

import Header from '../Header'
import Slider from '../SideBar'

const NotFound = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const imageUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer>
          <Header />
          <SlideAndNotFound>
            <Slider />
            <ContentContainer>
              <Image src={imageUrl} alt="not found" />
              <Content textColor={isDarkMode}>Page Not Found</Content>
              <Paragraph textColor={isDarkMode}>
                we are sorry, the page you requested could not be found.
              </Paragraph>
            </ContentContainer>
          </SlideAndNotFound>
        </NotFoundContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default NotFound
