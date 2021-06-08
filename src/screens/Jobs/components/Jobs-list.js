// the stack of cards for the following pages:
//      /jobs

import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import JobCard from '../../../components/Cards/Card-job';
import '../../../sass/components/jobs.scss';


export default function JobsList () {


    const jobs = useSelector((state) => state.jobs)
    return (

        <div className="stack">

            {jobs.length === 0 ? (
                <p className="loading">Loading all jobs...</p>
            ) : (
                jobs.map(job => 
                    <Link to={`/jobs/${job.id}`} style={{textDecoration: "none", color: "#092C48"}} key={job.id} >
                        <JobCard job={job} />
                    </Link>
                ))
            }

        </div>
    )
}
