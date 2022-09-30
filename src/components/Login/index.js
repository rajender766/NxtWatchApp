/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  ResponsiveContainer,
  LoginContainer,
  Checkbox,
  LogoImage,
  LabelElement,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleCheckBox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  LoginVerification = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      showPassword,
    } = this.state
    const passwordType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <ResponsiveContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <form onSubmit={this.LoginVerification}>
            <LabelElement content htmlFor="username">
              USERNAME
            </LabelElement>
            <br />
            <input
              id="username"
              value={username}
              type="text"
              placeholder="username"
              onChange={this.onChangeUsername}
            />
            <br />
            <LabelElement content htmlFor="password">
              PASSWORD
            </LabelElement>
            <br />
            <input
              id="password"
              value={password}
              type={passwordType}
              placeholder="password"
              onChange={this.onChangePassword}
            />
            <br />
            <Checkbox
              id="check"
              type="checkbox"
              onChange={this.onToggleCheckBox}
            />

            <LabelElement content={false} htmlFor="check">
              Show Password
            </LabelElement>
            <br />
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </form>
        </ResponsiveContainer>
      </LoginContainer>
    )
  }
}

export default Login
