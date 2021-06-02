import '../css/views/post.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default function Post(props) {
  return (
    <div className='post flex column'>
      <h3 className='post-title'>{props.post.title}</h3>
      <p className='post-body'>{props.post.body}</p>
      <p className='post-author' onClick={() => props.onAuthorClick && props.onAuthorClick()}>
        <FontAwesomeIcon icon={faUser} /> {props.author}
      </p>
    </div>
  )
}