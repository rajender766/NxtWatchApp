import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import ModeContext from './Context/ModeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkMode: false,
    savedVideosList: [],
  }

  changeThemeMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  addVideosToSave = video => {
    const {savedVideosList} = this.state
    const isHere = savedVideosList.find(eachVideo => eachVideo.id === video.id)
    if (isHere) {
      const filterList = savedVideosList.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({
        savedVideosList: filterList,
      })
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    }
  }

  render() {
    const {isDarkMode, savedVideosList} = this.state
    const appClassName = isDarkMode ? 'darkClass' : 'lightClass'
    return (
      <div className={appClassName}>
        <ModeContext.Provider
          value={{
            isDarkMode,
            changeThemeMode: this.changeThemeMode,
            savedVideosList,
            addVideosToSave: this.addVideosToSave,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/gaming" component={GamingVideos} />
            <ProtectedRoute exact path="/trending" component={TrendingVideos} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </ModeContext.Provider>
      </div>
    )
  }
}

export default App
