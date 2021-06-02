import Post from "./Post";
import '../css/views/post_list.css'

export default function PostList(props) {
  return (
    <div className='post-list flex column a-center'>
      {props.posts.map((post) => 
        <Post key={post.id} post={post} author={props.getUserName(post.userId)} onAuthorClick={() => props.onAuthorClick(post.userId)} />)}
    </div>
  )
}