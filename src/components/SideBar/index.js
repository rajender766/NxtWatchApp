import {Link} from 'react-router-dom'
import {v4} from 'uuid'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ModeContext from '../../Context/ModeContext'


import {
  SliderContainer,
  SliderLinksContainer,
  PageContainer,
  LogosContainer,
  Content,
  ImageContainer,
} from './StyledComponents'

import './index.css'

const navItemsList = [
  {
    id: v4(),
    path: '/',
    displayText: 'Home',
    icon: <AiFillHome />,
  },
  {
    id: v4(),
    path: '/trending',
    displayText: 'Trending',
    icon: <FaFire />,
  },
  {
    id: v4(),
    path: '/gaming',
    displayText: 'Gaming',
    icon: <SiYoutubegaming />,
  },
  {
    id: v4(),
    path: '/saved-videos',
    displayText: 'Saved Videos',
    icon: <CgPlayListAdd />,
  },
]

const Slider = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const iconName = isDarkMode ? 'dark-mode-content' : 'light-mode-content'
     
      return (
        <SliderContainer bgColor={isDarkMode}>
          <SliderLinksContainer>
            {navItemsList.map(eachItem => (
              <Link to={`${eachItem.path}`}>
                <PageContainer>
                  <ImageContainer textColor={isDarkMode}>{eachItem.icon}</ImageContainer>
                  <Content textColor={isDarkMode}>{eachItem.displayText}</Content>
                </PageContainer>
             </Link>
            ))}
          </SliderLinksContainer>
          <LogosContainer>
            <p className={iconName}>CONTACT US</p>
            <PageContainer>
              <img
                className="social-icons"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <img
                className="social-icons"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <img
                className="social-icons"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </PageContainer>
            <p className={`${iconName} paragraph`}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </LogosContainer>
        </SliderContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default Slider
