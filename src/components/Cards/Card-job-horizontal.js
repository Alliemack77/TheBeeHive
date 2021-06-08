import { useDispatch } from 'react-redux';
import { removeSavedJob } from '../../actions/jobs';
import Button from '../Button';
import '../../sass/components/cards/card-horizontal.scss';

export default function CardJobHoriz ({ job }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(removeSavedJob(job.id))
    }
    return (
        <div className="job-horizontal">
            <div className="job-horizontal__body">
                <h1 className="body-title">{job.title}</h1>
                <div>
                    <p className="body-subtitle"><span>Company:</span> {job.partner.account.name}</p>
                    <p className="body-subtitle"><span>Location:</span> {job.location}</p>
                </div>
                <p className="body-text">{job.description}</p>
            </div>
            <div>      
                <Button text="Remove from saved" onClick={handleClick}/>
            </div>
        </div>
    )
}