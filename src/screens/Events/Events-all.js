import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import {events} from '../Community/Components/mock-events-cards';
import CardEventHoriz from '../../components/Cards/Card-event-horizontal';
import '../../sass/pages/_jobs-all.scss'

export default function Events() {

    window.scrollTo(0,0)

    const list = events.map(event => 
        
        <CardEventHoriz 
            key={event.id}
            title={event.title}
            hosted_by={event.hosted_by}
            location={event.location}
            date={event.date}
            description={event.description}
        />
    )
    
    return (

        <div className="jobs saved">
                <div className="jobs-list"> 
                    <h1 className="jobs-title">Upcoming Events</h1>
                    {list}
                </div>

                <div className="">
                    <Link to="/community">
                        <Button text="Back to community" />
                    </Link>
                </div>

        </div>
        
    )
}