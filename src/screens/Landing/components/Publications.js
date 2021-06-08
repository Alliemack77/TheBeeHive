import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import PublicationCard from "../../../components/Cards/PublicationCard";
import "../../../sass/components/publications.scss";
import {useSelector, useDispatch}from 'react-redux';
import {useEffect} from "react";
import {getAllBlogPosts}from "../../../actions/blog";


function Publications() {
  const dispatch = useDispatch();
  useEffect(()=>{  
    dispatch(getAllBlogPosts())
  },[dispatch]);
const posts= useSelector(state =>state.posts)
  //console.log(posts);
  const list = posts.slice(0,3).map(post => 
    <PublicationCard  
      key={post.id}
        imgBlog={true}
        hasAuthorDate={true}
        hasTitle={true}
        hasLikes={true}
        post={post}
         />
  )    
  return (
    <div className="publications">
      <div className="publications__inner">
        <h2 className="publications__inner-title">Our Publications</h2>
        <div className="publications__cards">
          {list}
        </div>
        <Link to="/blog">
          <Button text="Go to Blog" />
        </Link>
      </div>
    </div>
  );
}

export default Publications;


 
