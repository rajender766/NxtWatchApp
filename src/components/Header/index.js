/* eslint-disable no-undef */
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import ModeContext from '../../Context/ModeContext'

import {
  HeadContainer,
  ProfileContainer,
  LogoImage,
  ProfileImage,
  ModeButton,
  LogoutButton,
  Content,
  PopupContainer,
} from './StyledComponents'

const Header = props => (
  <ModeContext.Consumer>
    {value => {
      const {isDarkMode, changeThemeMode} = value
      const onChangeMode = () => {
        changeThemeMode()
      }
      const BtnStyles = isDarkMode ? 'darkModeBtn' : 'lightModeBtn'
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const themeUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const logoUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeadContainer data-testid="home" bgColor={isDarkMode}>
          <li>
            <Link to="/">
              <LogoImage src={logoUrl} alt="website logo" />
            </Link>
          </li>
          <ProfileContainer bgColor={isDarkMode}>
            <ModeButton
              data-testid="theme"
              type="button"
              onClick={onChangeMode}
            >
              <ProfileImage src={themeUrl} alt="theme-mode" />
            </ModeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              model
              trigger={
                <button
                  data-testid="home"
                  className={BtnStyles}
                  onClick={onClickLogout}
                  type="button"
                >
                  Logout
                </button>
              }
              position="bottom"
            >
              {close => (
                <>
                  <PopupContainer>
                    <Content textColor={isDarkMode}>
                      Are you sure, you want to logout
                    </Content>
                    <div>
                      <LogoutButton type="button" onClick={() => close()}>
                        Cancel
                      </LogoutButton>
                      <LogoutButton type="button" onClick={onClickLogout}>
                        Confirm
                      </LogoutButton>
                    </div>
                  </PopupContainer>
                </>
              )}
            </Popup>
          </ProfileContainer>
        </HeadContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Header)
