import React from 'react'
import NavigationBar from './NavigationBar'
import Post from './post/Post'
import PostList from './post/PostList'
import UserList from './user/UserList'
import UserScreen from './user/UserScreen'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      current_view: null,
      history: [],
      users: [],
      posts: [],
    }
    
    this.openUserScreen = this.openUserScreen.bind(this)
    this.goPreviousView = this.goPreviousView.bind(this)
    this.getUserName = this.getUserName.bind(this)
    this.goUsers = this.goUsers.bind(this)
    this.goPosts = this.goPosts.bind(this)
  }


  componentDidMount() {
    this.fetchUsers()
    this.fetchPosts()
  }

  getUserName(id) {
    let user = this.state.users.find((el, ind, arr) => el.id === id)
    return user.name
  }

  async fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({users: users}))
  }

  async fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts => this.setState({posts: posts}))
  }

  openUserScreen(id) {
    let user = this.state.users.find((el, i, arr) => el.id === id)
    let view = <UserScreen user={user} />
    this.setCurrentView(view)
  }

  setCurrentView(view) {
    this.setState((state) => ({
      current_view: view,
      history: state.history.concat(view)
    }))
  }

  goPreviousView() {
    if (this.state.history.length === 1) return
    let ind = this.state.history.length - 2
    let view = this.state.history[ind]
    let new_history = this.state.history.slice(0, ind + 1)
    this.setState({
      current_view: view,
      history: new_history
    })
  }

  goUsers() {
    let view = <UserList users={this.state.users} onNameClick={this.openUserScreen}/>
    this.setCurrentView(view)
  }

  goPosts() {
    let view = <PostList posts={this.state.posts} onAuthorClick={this.openUserScreen} getUserName={this.getUserName}/>
    this.setCurrentView(view)
  }

  render() {
    return (
      <div className='container'>
        <NavigationBar backBtnClick={this.goPreviousView} onUsersClick={this.goUsers} onPostsClick={this.goPosts}/>
        {this.state.current_view}
      </div>
    )
  }
}

export default App