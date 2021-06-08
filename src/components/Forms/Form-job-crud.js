import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createJob, updateJob } from '../../actions/jobs';
import '../../sass/components/forms.scss';
import Button from '../Button';

export default function FormCrudJob({
    backgroundColor, 
    inputColor, 
    btnText, 
    btnColor, 
    jobId, 
    setJobId 
    }) {
    const [jobData, setJobData] = useState({
        title: "",  
        location: "", 
        description: ""
    })

    const job = useSelector((state) => jobId ? state.jobs.find((job) => job.id === jobId) : null);
    console.log("what is being set as jobData:", job);
    const dispatch = useDispatch();

    useEffect(() => {
        if (job) {
            delete job.partner;
            setJobData(job)
        }
    }, [job])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (jobId) {
            dispatch(updateJob(jobId, jobData))
        } else {
            dispatch(createJob(jobData));
        }
        clear()
    } 
    const clear = () => {
        setJobId(null);
        setJobData({
            title: "", 
            location: "", 
            description: ""
        })
    }

    return(
        <form className={`form add ${backgroundColor}`} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Job title</label>
                <input 
                    className={inputColor} 
                    id="title"
                    name="title" 
                    type="text" 
                    placeholder="job title"
                    value={jobData.title}
                    onChange={(e) => setJobData({...jobData, title: e.target.value})}/>
            </div>

            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input 
                    className={inputColor} 
                    id="location"
                    name="location" 
                    type="text" 
                    placeholder="location"
                    value={jobData.location}
                    onChange={(e) => setJobData({...jobData, location: e.target.value})}/>

            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea 
                    className="input-textarea" 
                    id="description"
                    name="description" 
                    placeholder="description"
                    value={jobData.description}
                    onChange={(e) => setJobData({...jobData, description: e.target.value})} />
            </div>

            <div className="form-group--button">
                    <Button text={btnText} color={btnColor}/>
                    <Link to="/jobs">
                        <Button type="text" text="Back to all jobs" color="outline"/>
                    </Link>
            </div>
        </form>
    )
}