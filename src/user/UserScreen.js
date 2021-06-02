import '../css/views/user_screen.css'
import UserName from './UserName'
import UserContacts from './UserContancts'
import UserCompany from './UserCompany'

export default function UserScreen(props) {
  if (!props.user) return null;
  let user = props.user
  return (
    <section className='screen-user flex column a-center'>
      <div className='screen-user-main-info flex'>
        <UserName name={user.name} username={user.username} />
        <UserContacts email={user.email} phone={user.phone} website={user.website} />
      </div>
      <UserCompany name={user.company.name} catchPhrase={user.company.catchPhrase}/>
    </section>
  )
}