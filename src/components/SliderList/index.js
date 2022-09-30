import {Link} from 'react-router-dom'
import ModeContext from '../../Context/ModeContext'
import {ImageContainer, Content, PageContainer} from './StyledComponents'

const SliderLists = props => {
  const {tabDetails, isActive, tabSelected} = props
  const {id, path, icon, displayText} = tabDetails
  const onChangeTab = () => {
    tabSelected(id)
  }

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <div>
           
          </div>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default SliderLists
