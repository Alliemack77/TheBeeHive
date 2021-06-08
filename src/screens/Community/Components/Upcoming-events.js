// the stack of job cards for /jobs
import { Link } from 'react-router-dom';
import CardEvent from '../../../components/Cards/Card-events.js';
import {events} from './mock-events-cards';
import '../../../sass/components/jobs.scss';
import Button from '../../../components/Button.js';
import '../../../sass/components/publications.scss';
export default function EventList () {

    const list = events.map(event => 
        <Link  to="/community/events" key={event.id} style={{textDecoration: "none", color: "#092C48"}}>
            <CardEvent 
                title={event.title}
                hosted_by={event.hosted_by}
                date={event.date}
                abstract={event.abstract}          
                location={event.location}          
            />
        </Link>
    )
    return (
        <div className="publications">
            <div className="publications__inner">
                <h2 className="publications__inner-title">Upcoming Events</h2>
                <div className="publications__cards">
                    {list}
                </div>
                <Link to="community/events">
                    <Button text="See all events" />
                </Link>
            </div>
        </div>
        

    )
}
