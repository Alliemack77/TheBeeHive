import Hero from "../../components/Hero";
import Mission from "../../components/Mission";
import Features from  "./components/Features";
import Newsletter from  "./components/Newsletter";
import Publications from "./components/Publications";
import {useDispatch}from "react-redux";
import {useEffect} from "react";
import {getAllBlogPosts} from "../../actions/blog";


import '../../sass/pages/_landing.scss';
function Landing() {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getAllBlogPosts()) 
    window.scrollTo(0,0);
 }, [dispatch]); 
  return (
    <div className="landing">
      <div className="landing__content">
        <Hero image="dev-group-tint" title="The largest community of neurodiverse developers" fontWeight="regular" hasBtns={true}/>
        <Mission 
          title="Our Mission" 
          text="We are the BeeHive - a community of Neurodiverse developers like you.
          Our mission is to inspire Neurodiverse developers to excel in
          technology careers. Click a link below to learn more." 
          btnText1="Search jobs" 
          btnText2="Find a mentor" 
          link1="/jobs"
          link2="/users/mentors"
          />
        <Features />
        <Publications />
        <Newsletter />

      </div>
    </div>
  );
}

export default Landing;
