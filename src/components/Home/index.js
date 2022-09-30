/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import Slider from '../SideBar'
import ModeContent from '../../Context/ModeContext'

import {
  HomeContainer,
  SlideAndHome,
  SuccessContainer,
  ListItemsContainer,
  LstItemContainer,
  ThumbnailImage,
  DetailsContainer,
  LoaderContainer,
  ChannelLogo,
  Content,
  ContentDis,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureButton,
  BannerContainer,
  BannerContentContainer,
  BannerImage,
  BannerContent,
  BannerButton,
  BannerCloseContainer,
  BannerCloseButton,
  SearchContainer,
  SearchButton,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    showBaner: true,
    videosList: [],
    search: '',
    inputValue: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {search} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
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

  onChangeSearch = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onApplySearchInput = () => {
    const {inputValue} = this.state

    this.setState(
      {
        search: inputValue,
      },
      this.getHomeVideos,
    )
  }

  renderSuccessfulView = () => {
    const {videosList} = this.state
    return (
      <ModeContent.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <SuccessContainer bgColor={isDarkMode}>
              {videosList.length === 0 ? (
                <FailureViewContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <FailureTitle textColor={isDarkMode}>
                    No Search results found
                  </FailureTitle>
                  <FailureDescription textColor={isDarkMode}>
                    Try different key words or remove search filter
                  </FailureDescription>
                  <FailureButton type="button" onClick={this.onRetryVideos}>
                    Retry
                  </FailureButton>
                </FailureViewContainer>
              ) : (
                <ListItemsContainer>
                  {videosList.map(eachVideo => (
                    <LstItemContainer key={eachVideo.id}>
                      <Link to={`/videos/${eachVideo.id}`}>
                        <ThumbnailImage
                          src={eachVideo.thumbnailUrl}
                          alt="video thumbnail"
                        />
                      </Link>
                      <DetailsContainer>
                        <ChannelLogo
                          src={eachVideo.imageUrl}
                          alt="channel logo"
                        />
                        <div>
                          <Content textColor={isDarkMode}>
                            {eachVideo.title}
                          </Content>
                          <ContentDis textColor={isDarkMode}>
                            {eachVideo.name}
                          </ContentDis>
                          <DetailsContainer>
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
                          </DetailsContainer>
                        </div>
                      </DetailsContainer>
                    </LstItemContainer>
                  ))}
                </ListItemsContainer>
              )}
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

  onCloseBanner = () => {
    this.setState({
      showBaner: false,
    })
  }

  renderBannerAndSearchView = () => {
    const {showBaner, inputValue} = this.state
    return (
      <div>
        {showBaner && (
          <BannerContainer data-testid="banner">
            <BannerContentContainer>
              <BannerImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <BannerContent>
                Buy Nxt Watch Premium prepaid plans with <br /> UPI
              </BannerContent>
              <BannerButton type="button">GET IT NOW</BannerButton>
            </BannerContentContainer>
            <BannerCloseContainer>
              <BannerCloseButton
                data-testid="close"
                type="button"
                onClick={this.onCloseBanner}
              >
                x
              </BannerCloseButton>
            </BannerCloseContainer>
          </BannerContainer>
        )}
        <SearchContainer>
          <input
            type="search"
            placeholder="search"
            value={inputValue}
            onChange={this.onChangeSearch}
          />
          <SearchButton
            type="button"
            onClick={this.onApplySearchInput}
            data-testid="searchButton"
          >
            <BsSearch />
          </SearchButton>
        </SearchContainer>
      </div>
    )
  }

  render() {
    return (
      <ModeContent.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <HomeContainer bgColor={isDarkMode} data-testid="home">
              <Header />
              <SlideAndHome>
                <Slider />
                <div>
                  {this.renderBannerAndSearchView()}
                  {this.renderHomeVideosView()}
                </div>
              </SlideAndHome>
            </HomeContainer>
          )
        }}
      </ModeContent.Consumer>
    )
  }
}

export default Home
