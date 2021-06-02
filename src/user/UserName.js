import '../css/views/user.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIdBadge} from '@fortawesome/free-solid-svg-icons'

export default function UserName(props) {
  return (
    <div className='user-name-info flex column'>
      <p className='user-name' onClick={() => props.onNameClick && props.onNameClick()}>
        <FontAwesomeIcon icon={faIdBadge}/> {props.name}
        </p>
      <p className='user-username'>{props.username}</p>
    </div>
  )
}