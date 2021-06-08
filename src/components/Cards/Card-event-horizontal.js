import { Link } from 'react-router-dom';
import '../../sass/components/cards/card-horizontal.scss';
import Button from '../Button';

export default function CardEventHoriz ({ title, date, hosted_by, location, description }) {
    return (
        <div className="event-horizontal">
            <div className="event-horizontal__body">
                <h1 className="body-title">{title}</h1>
                <div>
                    <p className="body-subtitle"><span>Date: </span> {date}</p>
                    <p className="body-subtitle"><span>Hosted by:</span> {hosted_by}</p>
                    <p className="body-subtitle"><span>Location:</span> {location}</p>
                </div>
                <p className="body-text">{description}</p>
            </div>

            <div>
                <Link to="/events/signup">
                    <Button text="Sign up"/>
                </Link>
                
            </div>
        </div>
    )

}