import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobsAll } from '../../actions/jobs';
import moment from 'moment';
import { RiComputerLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import '../../sass/components/cards/job-card.scss';
import '../../screens/Jobs/components/mock-jobs';


export default function CardJob({ job }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobsAll())
    }, [dispatch])

    return (
        <div className="job-card">
            <div className="job-card__header">
                <IconContext.Provider value={{ color: "$dark-blue", className:"header-icon"}}>
                    <div className="header-icons">
                        <RiComputerLine />
                    </div>
                </IconContext.Provider>
            </div>
            <div className="job-card__body">
                <h2 className="body-title">{job.title}</h2>
                <div>
                    <p className="body-subtitle"><span>Company:</span> {job.partner}</p>
                    <p className="body-subtitle"><span>Location:</span> {job.location }</p>
                </div>
                <p className="body-text">{job?.description?.substring(0, 100)} ...</p>

            </div>
            <div className="job-card__footer">
                <p>{moment(job.createdAt).fromNow()}</p>
            </div>
        </div>
    )
}
