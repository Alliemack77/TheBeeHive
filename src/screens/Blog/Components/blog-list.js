import PublicationsCard from "../../../components/Cards/PublicationCard";
import "../../../sass/components/jobs.scss";
import {useSelector} from 'react-redux';

function BeehiveBlog() {
 
 const posts = useSelector((state) => state.posts) 
 
  return (
    <div className="stack">
    {posts.length === 0 ?(
      <p>Loading all posts...</p>
    ) :(
      posts.map(post => 
          <PublicationsCard 
            key={post.id}
            post={post} 
            imgBlog={true} 
            hasAuthorDate={true} 
            hasTitle={true}  
            hasLikes={true} />   
        )
    )}
    </div>
  );
}


export default BeehiveBlog;



// access posts from anywhere in the app b/c of redux and useSelector
    // passing the whole state obj into useSelector
    // getting back the array from state.posts
    // map posts array into individual post cards
    // pass each job down to job card via props

