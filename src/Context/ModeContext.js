import React from 'react'

const ModeContext = React.createContext({
  isDarkMode: false,
  changeThemeMode: () => {},
  savedVideosList: [],
  addVideosToSave: () => {},
})

export default ModeContext
