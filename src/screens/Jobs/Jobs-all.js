import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobsAll, getJobsEdit } from '../../actions/jobs';
import { Link } from 'react-router-dom'
import Button from '../../components/Button';
import Search from '../Jobs/components/Search';
import JobsList from './components/Jobs-list';
import '../../sass/pages/_jobs-all.scss';
import { isPartner, isLogged } from "../../localstorage";

export default function JobsAll () {

    const partner = isPartner();
    const loggedIn = isLogged();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobsAll())
        window.scrollTo(0,0);
    }, [dispatch]);

    const handleClick = () => {
        dispatch(getJobsEdit());
    }
    
    let userBtn;
    if (loggedIn && !partner) { //anyone who is logged in but not a partner
        userBtn = (
            <Link to='/user/jobs'>
                <Button text="View saved jobs" color="" type="button"/>
            </Link>
        )
    } else if (loggedIn && partner) { // anyone who is logged in and a partner
        userBtn = (
            <Link to='/partners/jobs'>
                <Button text="Edit a job" color="" type="button" onClick={() => handleClick}/>
            </Link>
        )
    } else { //anyone who is not logged in
        <></>
    }
    return (
        <div className="jobs">
            <div className="jobs__content">
                <div className="jobs-btn">
                    {userBtn}
                </div>

                <div className="jobs-search"> 
                    <Search />
                </div>

                <div className="jobs-list"> 
                    <h1 className="jobs-title">All Jobs</h1>
                    <JobsList />
                   
                </div>
            </div>
        </div>
    )
}