import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMentors } from '../../actions/mentoring';
import AllMentorsList from "./components/AllMentorsList";

export default function AllMentors() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMentors())
        window.scrollTo(0, 0);
    }, [dispatch]);
   
    return (
        
        <div className="all-mentors"> 
            <h1>Meet our Mentors</h1>
            <AllMentorsList />  
        </div> 
      );
  }
  
