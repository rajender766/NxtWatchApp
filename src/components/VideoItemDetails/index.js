/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import {CgPlayListAdd} from 'react-icons/cg'
import {BiDislike, BiLike} from 'react-icons/bi'

import ModeContent from '../../Context/ModeContext'

import Header from '../Header'
import Slider from '../SideBar'

import './index.css'

import {
  VideoViewContainer,
  SlideAndHome,
  SuccessContainer,
  LstItemContainer,
  DetailsContainer,
  DetailedContainer,
  LikeSharesContainer,
  LoaderContainer,
  ChannelLogo,
  HorizontalLine,
  Content,
  ContentDis,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureButton,
  VideoContainer,
  CustomButton,
  LikeButton,
} from './StyledComponents'

// import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const video = fetchedData.video_details
      const videoDetails = {
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        videoUrl: video.video_url,
        name: video.channel.name,
        imageUrl: video.channel.profile_image_url,
        subscriberCount: video.channel.subscriber_count,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetryVideos = () => {
    this.getVideosDetails()
  }

  onClickLike = () => {
    this.setState({
      isLiked: true,
      isDisliked: false,
    })
  }

  onClickDisLike = () => {
    this.setState({
      isLiked: false,
      isDisliked: true,
    })
  }

  renderSuccessfulView = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      title,
      id,
      videoUrl,
      name,
      imageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const saveText = isSaved ? 'Saved' : 'Save'
    return (
      <ModeContent.Consumer>
        {value => {
          const {isDarkMode, addVideosToSave} = value
          const onClickSave = () => {
            this.setState(prevState => ({
              isSaved: !prevState.isSaved,
            }))
            addVideosToSave({...videoDetails}, id)
          }
          return (
            <SuccessContainer bgColor={isDarkMode}>
              <LstItemContainer key={id}>
                <VideoContainer>
                  <ReactPlayer url={videoUrl} controls />
                </VideoContainer>
                <DetailsContainer>
                  <DetailedContainer>
                    <Content textColor={isDarkMode}>{title}</Content>
                  </DetailedContainer>
                  <LikeSharesContainer>
                    <DetailedContainer>
                      <ContentDis textColor={isDarkMode}>
                        {viewCount} Views
                      </ContentDis>
                      <ContentDis textColor={isDarkMode}>
                        <span>.</span>
                        {formatDistanceToNow(new Date(`${publishedAt}`))}
                        <span> ago</span>
                      </ContentDis>
                    </DetailedContainer>
                    <DetailedContainer>
                      <LikeButton
                        fontColor={isLiked}
                        onClick={this.onClickLike}
                        type="button"
                      >
                        <DetailedContainer>
                          <p>
                            <BiLike />
                          </p>
                          <Content fontColor={isLiked}>Like</Content>
                        </DetailedContainer>
                      </LikeButton>
                      <CustomButton
                        fontColor={isDisliked}
                        onClick={this.onClickDisLike}
                        type="button"
                      >
                        <DetailedContainer>
                          <BiDislike />
                          <Content fontColor={isLiked}>Dislike</Content>
                        </DetailedContainer>
                      </CustomButton>
                      <CustomButton
                        fontColor={isSaved}
                        onClick={onClickSave}
                        type="button"
                      >
                        <DetailedContainer>
                          <CgPlayListAdd />
                          <Content>{saveText}</Content>
                        </DetailedContainer>
                      </CustomButton>
                    </DetailedContainer>
                  </LikeSharesContainer>
                  <HorizontalLine textColor={isDarkMode} />
                  <DetailedContainer>
                    <ChannelLogo src={imageUrl} alt="channel logo" />
                    <div>
                      <ContentDis textColor={isDarkMode}>{name}</ContentDis>
                      <ContentDis textColor={isDarkMode}>
                        {subscriberCount} Subscribers
                      </ContentDis>
                      <ContentDis textColor={isDarkMode}>
                        {description}
                      </ContentDis>
                    </div>
                  </DetailedContainer>
                </DetailsContainer>
              </LstItemContainer>
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
              We are having some trouble to complete your request. Please try
              again.
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

  renderHomeVideoView = () => {
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
            <VideoViewContainer
              bgColor={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Header />
              <SlideAndHome>
                <Slider />
                {this.renderHomeVideoView()}
              </SlideAndHome>
            </VideoViewContainer>
          )
        }}
      </ModeContent.Consumer>
    )
  }
}

export default VideoItemDetails
