import '../../sass/components/cards/job-card.scss';
import '../../screens/Community/Components/mock-events-cards';
import Button from '../Button';
export default function CardEvent({ title, hosted_by, date, location, abstract, btnColor}) {
    return (
        <div className="job-card">
            <div className="job-card__body">
                <h2 className="event-title">{title}</h2>
                <div>
                    <p className="body-subtitle"><span>Hosted by: </span>{hosted_by}</p>
                    <p className="body-subtitle"><span>Date: </span>{date}</p>
                    <p className="body-subtitle"><span>Loaction: </span>{location}</p>
                </div>
                <p className="body-text">{abstract}</p>
            </div>
            <div className="job-card__footer">
                <Button text="More info" color={btnColor}/>
            </div>   
         </div>
    )
}