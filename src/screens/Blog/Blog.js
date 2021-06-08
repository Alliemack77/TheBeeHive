import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllBlogPosts } from '../../actions/blog';
import Button from '../../components/Button';
import BeeHiveBlog from  "../Blog/Components/blog-list";
import '../../sass/pages/_blog.scss';
import {isMentor} from '../../localstorage';

function Blog() {
  const dispatch = useDispatch();
  const mentor = isMentor();

  useEffect(() => {
    window.scrollTo(0, 0) 
      dispatch(getAllBlogPosts())
  }, [dispatch]);

  
  let userBtn;

if(mentor){
  userBtn = (
    <Link to="/users/blog-posts">
      <Button text="Edit post" color="" type="button"/>
    </Link>
  )
}else{
  <> </>
}
  return (
    <div className="blog">
      <div className="blog__inner">
      
        <div>
          {userBtn}
        </div>

        <div className="blog-body">
          <h1 className="blog-title">The Beehive Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis elit ante, sit amet aliquet erat commodo vitae. Cras mattis ut magna ut venenatis. Aenean dui est, vestibulum sed sapien pellentesque, fringilla cursus leo. </p>
        </div>
        
        <div className="blog-list">
          <BeeHiveBlog />
        </div> 

      </div>             
    </div>
    
  ); 
}

export default Blog;
