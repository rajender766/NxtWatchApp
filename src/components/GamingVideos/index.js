/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Slider from '../SideBar'
import ModeContent from '../../Context/ModeContext'

import {
  GameContainer,
  SlideAndHome,
  SuccessContainer,
  ListItemsContainer,
  LstItemContainer,
  ThumbnailImage,
  DetailsContainer,
  LoaderContainer,
  ContentText,
  ContentDis,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureButton,
  VideoViewContainer,
  SavedVideosHeader,
  IconContainer,
} from './StyledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const {videos} = fetchedData
      const videosList = videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetryVideos = () => {
    this.getHomeVideos()
  }

  renderSuccessfulView = () => {
    const {videosList} = this.state
    return (
      <ModeContent.Consumer>
        {value => {
          const {isDarkMode} = value
          const textColor = isDarkMode ? 'dark' : 'lite'
          return (
            <SuccessContainer bgColor={isDarkMode}>
              <VideoViewContainer>
                <SavedVideosHeader bgColor={isDarkMode}>
                  <IconContainer>
                    <SiYoutubegaming />
                  </IconContainer>
                  <h1 className={textColor}> Gaming</h1>
                </SavedVideosHeader>
                <div>
                  <ListItemsContainer>
                    {videosList.map(eachVideo => (
                      <LstItemContainer key={eachVideo.id}>
                        <Link to={`/videos/${eachVideo.id}`}>
                          <ThumbnailImage
                            src={eachVideo.thumbnailUrl}
                            alt=" video thumbnail"
                          />
                        </Link>
                        <ContentText textColor={isDarkMode}>
                          {eachVideo.title}
                        </ContentText>
                        <DetailsContainer>
                          <ContentDis textColor={isDarkMode}>
                            {eachVideo.viewCount} Views
                          </ContentDis>
                        </DetailsContainer>
                      </LstItemContainer>
                    ))}
                  </ListItemsContainer>
                </div>
              </VideoViewContainer>
            </SuccessContainer>
          )
        }}
      </ModeContent.Consumer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="70" width="70" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ModeContent.Consumer>
      {value => {
        const {isDarkMode} = value

        const failureImage = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureTitle textColor={isDarkMode}>
              Oops! Something Went Wrong
            </FailureTitle>
            <FailureDescription textColor={isDarkMode}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailureDescription>
            <FailureButton type="button" onClick={this.onRetryVideos}>
              Retry
            </FailureButton>
          </FailureViewContainer>
        )
      }}
    </ModeContent.Consumer>
  )

  renderHomeVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessfulView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ModeContent.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GameContainer bgColor={isDarkMode} data-testid="gaming">
              <Header />
              <SlideAndHome>
                <Slider />
                {this.renderHomeVideosView()}
              </SlideAndHome>
            </GameContainer>
          )
        }}
      </ModeContent.Consumer>
    )
  }
}

export default GamingVideos
