import '../css/views/user.css'

import UserName from './UserName'
import UserContacts from './UserContancts'


export default function UserView(props) {
  let user = props.user
  return (
    <div className='user'>
      <UserName name={user.name} username={user.username} onNameClick={props.onNameClick} />
      <UserContacts email={user.email} phone={user.phone} website={user.website} />
    </div>
  )
}