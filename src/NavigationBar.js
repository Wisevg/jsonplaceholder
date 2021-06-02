import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faNewspaper, faUsers} from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends React.Component {

  render() {
    return (
      <div className='navbar flex column'>
        <div className='goback-btn' onClick={this.props.backBtnClick}><FontAwesomeIcon icon={faArrowLeft}/></div>
        <div className='line'></div>
        <nav>
          <ul>
            <li onClick={this.props.onUsersClick}><FontAwesomeIcon icon={faUsers}/> Пользователи</li>
            <li onClick={this.props.onPostsClick}><FontAwesomeIcon icon={faNewspaper}/> Статьи</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavigationBar