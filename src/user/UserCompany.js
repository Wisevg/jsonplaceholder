import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/views/user.css'

export default function UserCompany(props) {
  return (
    <div className='user-company flex column a-center'>
      <h3><FontAwesomeIcon icon={faBriefcase}/> {props.name}</h3>
      <p>{props.catchPhrase}</p>
    </div>
  )
}