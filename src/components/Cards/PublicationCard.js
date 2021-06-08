import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { isLogged } from '../../../src/localstorage';
import { FaRegThumbsUp, FaLinkedin, FaGithub, FaXing } from "react-icons/fa";
import moment from "moment";
import {Link}from "react-router-dom";
import {likePost, getLikesPost, getAllBlogPosts}from "../../actions/blog";
import "../../sass/components/publication-card.scss";


function PublicationsCard({
  hasName,
  hasAuthorDate,
  post,
  mentor,
  hasTitle,
  imgBlog,
  imgMentoring,
  hasProfession,
  hasLikes,
  hasSocialMedia,
}) {
  const dispatch = useDispatch();
  const logged= isLogged();
    useEffect(()=>{  
    if(post){
       dispatch(getLikesPost(post.id))
    }
  },[dispatch]);   

  const handleLike=()=>{
    if(logged){
      dispatch(likePost(post.id));
      dispatch(getAllBlogPosts());
    }
  } 
  
  let cardImg;
  if (imgBlog){
    const img = require("../../assets/diversity_staff_millennial.jpg");
    const bgBlogImg = {
    backgroundImage: `url(${img.default})`
    }
    cardImg =(<div className="header-img" style={bgBlogImg}></div>)
  }
  if (imgMentoring){
    const img = require("../../assets/faces/dark-hair-young-woman.jpg");
    const bgMentorImg = {
      backgroundImage: `url(${img.default})`
    };
    cardImg=(<div className="header-img" style={bgMentorImg}></div>)
  }
 
  let mentorName;
  if(hasName){
    mentorName =(
      <div className="mentor-name">
        <h2>{mentor.name}</h2>
      </div>
    );
  } 

  let header;
  if (hasAuthorDate){
    header=(
      <div className="header-txt">
        <p>by {post?.author?.account?.name}</p> 
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>
    )
  } 
  let mainTitle;
  if(hasProfession){
  mainTitle =(
      <>
      <div>
        <h2 className="publication-card-title mentor-profession">{mentor.position}</h2>
      </div>
      <p className="publication-card-text"> {mentor.description.substring(0, 100)}...</p>
      </>
    );
  }
  if (hasTitle){
  mainTitle=(
    <>
      <div>
      <Link to={`/blog/${post.id}`} style={{textDecoration: "none", color:"#092C48"}} key={post.id}><h2 className="publication-card-title">{post.title}</h2>
      </Link> 
      </div>  
      <p className="publication-card-text"> {post.body.substring(0,100)}...</p>
    </> 
    )
  } 

  let footer;

  if (hasLikes) {
    footer = (
      <div className="publication-card__footer">
        <div className="publication-card__likes">
        
          <FaRegThumbsUp onClick={handleLike}></FaRegThumbsUp>
          <p>{post?.likes?.count}</p>
          
        </div>
      </div>
    );
  }
  if (hasSocialMedia) {
    footer = (
      <div className="publication-card__footer">
        <div className="publication-card__social-media">
          <a href="https://de.linkedin.com/" rel="noreferrer" target="_blank" className="social-media-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" rel="noreferrer" target="_blank" className="social-media-link">
            <FaGithub />
          </a>
          <a href="https://www.xing.com/" rel="noreferrer" target="_blank" className="social-media-link">
            <FaXing />
          </a>
        </div>
      </div>
    );
  }
 
  return (
    <div className="publication-card">
      <div className="publication-card__header">
        {cardImg}
        <div>
          {header}
        </div>   
      </div>
      <div className="publication-card__body">
        {mentorName} 
        {mainTitle}
      </div>
      <div>
        {footer}
      </div>
    </div>
  );
}
export default PublicationsCard;
