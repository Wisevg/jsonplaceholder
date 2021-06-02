import '../css/views/user_list.css'
import UserView from './UserView'

export default function UserList(props) {
  return (
    <div className='user-list'>
      {props.users.map((user) => <UserView key={user.id} user={user} onNameClick={() => props.onNameClick(user.id)} />)}
    </div>
  )
}