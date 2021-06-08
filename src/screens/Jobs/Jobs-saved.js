import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsSaved } from '../../actions/jobs';
import { Link } from 'react-router-dom';
import JobCardHoriz from '../../components/Cards/Card-job-horizontal';
import Button from '../../components/Button';
import '../../sass/pages/_jobs-all.scss';
import '../../sass/components/jobs.scss';

export default function JobsSaved () {
    const dispatch = useDispatch();
    const savedJobs = useSelector(state => state.savedJobs)

    useEffect(() => {
        dispatch(getJobsSaved());
    }, [dispatch]);

    return (     
        <div className="jobs saved">
            <div className="jobs-list"> 
                <h1 className="jobs-title">My Saved Jobs</h1>
                <div className="stack-horizontal">

                    { savedJobs.length === 0 ? (
                            <p className="loading">You have no saved jobs. Save a job to see it listed here.</p>
                        ) : (

                            savedJobs.map(job => 
                                <JobCardHoriz job={job} key={job.id} />
                            )
                        )}
        
                    </div>
                   
                </div>

                <div className="jobs-saved-btn">
                    <Link to="/jobs">
                        <Button text="See all jobs" />
                    </Link>
                </div>
            </div>
    )
}
