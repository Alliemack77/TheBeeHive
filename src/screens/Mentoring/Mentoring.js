import {useEffect} from 'react';
import {getAllMentors} from "../../actions/mentoring";
import {useDispatch}from 'react-redux'
import Hero from "../../components/Hero";
import Mission from "../../components/Mission";
import Features from  "../Mentoring/components/Features";
import Mentors from  "../Mentoring/components/Mentors";
import RegisterMent from "../Mentoring/components/Register-ment";
import '../../sass/pages/_mentoring.scss';


function Mentoring() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getAllMentors())
  }, [dispatch]);

  return (
    <div className="mentoring">
      <div className="mentoring__content">
        <Hero image="dev-group" fontStyle="italic" fontWeight="regular" title=" 'A clever quote about building communities' " subtitle="  - anonymous" />
        <Mission 
          title="Our mentorship program pairs you with a professional" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis elit ante, sit amet aliquet erat commodo vitae. Cras mattis ut magna ut venenatis. Aenean dui est, vestibulum sed sapien pellentesque, fringilla cursus leo. Aenean eget porta dui. Integer et dui ante."
          btnText1="Mentor application" 
          btnText2="Mentee application" 
          link1="/users/mentor"
          link2="/users/mentee"
          />
        <Mentors />
        <Features />
        <RegisterMent/>
      </div>
    </div>
  );
}

export default Mentoring;