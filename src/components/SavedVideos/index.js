/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Slider from '../SideBar'

import ModeContext from '../../Context/ModeContext'

import {
  SavedContainer,
  ContentContainer,
  VideoViewContainer,
  SlideAndNotFound,
  Image,
  Content,
  SaveContent,
  TitleContent,
  Paragraph,
  ContentPage,
  ListItemsContainer,
  LstItemContainer,
  ThumbnailImage,
  DetailsContainer,
  DetailedContainer,
  ContentDis,
  SavedVideosHeader,
  IconContainer,
} from './StyledComponents'

const SavedVideos = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDarkMode, savedVideosList} = value
      const textColor = isDarkMode ? 'dark' : 'light'
      const noSavedVideosView = () => (
        <ContentContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Content textColor={isDarkMode}>No Saved videos Found</Content>
          <p className={textColor}>Save your videos by clicking a button</p>
        </ContentContainer>
      )
      const onSavedVideosView = () => (
        <VideoViewContainer>
          <SavedVideosHeader bgColor={isDarkMode}>
            <IconContainer>
              <FaFire />
            </IconContainer>
            <h1 className={textColor}>Saved Videos</h1>
          </SavedVideosHeader>
          <div>
            <ListItemsContainer>
              {savedVideosList.map(eachVideo => (
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
          </div>
        </VideoViewContainer>
      )
      const savedVideos =
        savedVideosList.length === 0 ? noSavedVideosView() : onSavedVideosView()
      return (
        <SavedContainer bgColor={isDarkMode} data-testid="savedVideos">
          <Header />
          <SlideAndNotFound>
            <Slider />
            <ContentPage>{savedVideos}</ContentPage>
          </SlideAndNotFound>
        </SavedContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default SavedVideos
