/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import Slider from '../SideBar'
import ModeContent from '../../Context/ModeContext'

import {
  TrendingContainer,
  SlideAndHome,
  // SuccessContainer,
  ListItemsContainer,
  LstItemContainer,
  ThumbnailImage,
  DetailsContainer,
  DetailedContainer,
  LoaderContainer,
  // TrendingContent,
  ContentDis,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureButton,
  VideoViewContainer,
  SavedVideosHeader,
  TitleContent,
  IconContainer,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
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
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        name: eachVideo.channel.name,
        imageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
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
          const textColor = isDarkMode ? 'dark' : 'light'
          return (
            <VideoViewContainer>
              <SavedVideosHeader bgColor={isDarkMode}>
                <IconContainer>
                  <FaFire />
                </IconContainer>
                <h1 className={textColor}>Trending</h1>
              </SavedVideosHeader>
              <ListItemsContainer>
                {videosList.map(eachVideo => (
                  <LstItemContainer key={eachVideo.id}>
                    <Link to={`/videos/${eachVideo.id}`}>
                      <ThumbnailImage
                        src={eachVideo.thumbnailUrl}
                        alt=" video thumbnail"
                      />
                    </Link>
                    <DetailsContainer>
                      <TitleContent textColor={isDarkMode}>
                        {eachVideo.title}
                      </TitleContent>
                      <ContentDis textColor={isDarkMode}>
                        {eachVideo.name}
                      </ContentDis>
                      <DetailedContainer>
                        <ContentDis textColor={isDarkMode}>
                          {eachVideo.viewCount} Views
                        </ContentDis>
                        <ContentDis textColor={isDarkMode}>
                          <span>.</span>
                          {formatDistanceToNow(
                            new Date(`${eachVideo.publishedAt}`),
                          )}
                          <span> ago</span>
                        </ContentDis>
                      </DetailedContainer>
                    </DetailsContainer>
                  </LstItemContainer>
                ))}
              </ListItemsContainer>
            </VideoViewContainer>
          )
        }}
      </ModeContent.Consumer>
    )
  }

  // <SuccessContainer bgColor={isDarkMode}>

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
            <TrendingContainer bgColor={isDarkMode} data-testid="trending">
              <Header />
              <SlideAndHome>
                <Slider />
                {this.renderHomeVideosView()}
              </SlideAndHome>
            </TrendingContainer>
          )
        }}
      </ModeContent.Consumer>
    )
  }
}

export default TrendingVideos
