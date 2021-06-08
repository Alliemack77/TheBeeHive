import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import PublicationCard from "../../../components/Cards/PublicationCard";
import "../../../sass/components/publication-card.scss";
import {useSelector} from 'react-redux';

function Mentors() {
    const mentors = useSelector(state=> state.mentorList)
    const list = mentors.slice(0,3).map(mentor => 
        <PublicationCard key={mentor.id}
            imgMentoring={true}
            hasName={true}
            hasProfession={true}
            hasSocialMedia={true}
            mentor={mentor}    
        />
    )
    return (
        <div className="publications"> 
            <div className="publications__inner">
                <h2 className="publications__inner-title">Meet our Mentors</h2>
                <div className="publications__cards">
                    {list}
                </div>  
                <Link to="/users/mentors">
                    <Button text="See all mentors" />
                </Link>
            </div>
        </div>
    );
}



export default Mentors;
