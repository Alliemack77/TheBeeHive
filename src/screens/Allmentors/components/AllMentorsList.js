// the stack of cards for the following pages:/users/mentors
import {useSelector} from 'react-redux';
import CardMentorHoriz from "../../../components/Cards/Card-mentor-horizontal";
import '../../../sass/pages/_allmentors.scss';

export default function AllMentorsList () {
    const mentors = useSelector((state) => state.mentorList)
    return (
        <>
            {mentors.length === 0 ? (
                <p className="loading">Loading all mentors...</p>
            ) : (
                mentors.map(mentor => 
                    <CardMentorHoriz mentor={mentor} key={mentor.id}/>
                ))
            }
        </>    
    )
}

// access mentors from anywhere in the app b/c of redux and useSelector
    // passing the whole state obj into useSelector
    // getting back the array from state.mentors
    // map mentors array into individual mentor cards
    // pass each mentor down to mentor card via props