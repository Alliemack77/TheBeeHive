import Publications from '../Landing/components/Publications';
import EventList from "../Community/Components/Upcoming-events";
import {useDispatch}from 'react-redux';
import {getAllBlogPosts} from '../../actions/blog';
import {useEffect} from 'react';

function Community() {

 const dispatch = useDispatch();

  useEffect(() => { 
    window.scrollTo(0, 0) 
    dispatch(getAllBlogPosts()) 
  }, [dispatch]); 

  return (
    <div className="mentoring">
      <div className="mentoring__content">

        <div class="mentoring__content-header">
          <h1 className="mentoring-title">Welcome to the BeeHive Community</h1>
          <p className="mentoring-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales risus lorem, sodales ullamcorper erat tincidunt nec. Duis erat elit, fringilla ut blandit at, varius eget libero. </p>
        </div>

        <Publications />
        <EventList />
      </div>
    </div>
  );
}

export default Community;
