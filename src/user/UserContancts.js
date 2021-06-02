import '../css/views/user.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAt, faPhone, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'


export default function UserContacts(props) {
  return (
    <div className='user-contacts flex column'>
      <p className='user-email'><FontAwesomeIcon icon={faAt}/> {props.email}</p>
      <p className='user-phone'><FontAwesomeIcon icon={faPhone}/> {props.phone}</p>
      <p className='user-website'><FontAwesomeIcon icon={faExternalLinkAlt}/> <a href={'https://'+props.website}>{props.website}</a></p>
    </div>
  )
}