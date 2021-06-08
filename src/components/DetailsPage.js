import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedJob } from '../actions/jobs'
import { saveJob } from '../api/index';
import { getOneBlogPost} from '../actions/blog';
import { isLogged , isPartner} from '../localstorage';
import '../sass/pages/_jobs-all.scss';
import '../sass/components/details.scss'
import Button from './Button';
import moment from 'moment';

export default function DetailsPage ({
    post,
    likes,
    job,
    postBtnGroup,
    jobBtnGroup
} ) {
    const [btnText, setBtnText] = useState("Save");
    const [btnColor, setBtnColor] = useState("outline");
    const dispatch = useDispatch();
    
    //job
    const { jobId } = useParams();
    const singleJob = useSelector((state) => state.job);
    const { partner, location, description } = singleJob;
    const jobTitle= singleJob.title;
    const LoggedIn = isLogged();
    const Partner = isPartner();
    
    //blog post
    const { blogId } = useParams();
    const singlePost = useSelector((state) => state.post);
    const {title, body, createdAt} = singlePost;
    const img = require('../assets/group-meeting.jpg');

    //// job
    useEffect(() => {
        window.scrollTo(0, 0);
        if(jobId && jobId !== "") {
            dispatch(selectedJob(jobId));
        }
    }, [jobId, dispatch]);

    //// blog
    useEffect(() => {   
        if(blogId && blogId !== "") {
            dispatch(getOneBlogPost(blogId));
         }             
    }, [blogId, dispatch]);

    /////JOB handleClick
    const handleClick = async () => {
        let buttonText = btnText === "Save" ? "Saved" : "Save";
        setBtnText(buttonText);

        let buttonColor = btnColor === "outline" ? "grey" : "outline"
        setBtnColor(buttonColor)

        try {
            const response = await saveJob(JSON.stringify({"jobId": jobId}));
            console.log("RES",  response);

        } catch (error){    
            console.log(error);
        }
    }
    ////////////////////////////////// Jobs Details page
    let jobGroup;
    if (job) {
        jobGroup = (
            <>
                <h2 className="body-title">{jobTitle}</h2>
                <div className="body-group job">
                    <p className="body-group__subtitle"><span>Company:</span> {partner}</p>
                    <p className="body-group__subtitle"><span>Location:</span> {location} </p>
                </div>
                <p>{description}</p>
            </>
        );
    }

    let btnJob;
    if (jobBtnGroup && LoggedIn && !Partner) {
        btnJob = (
            <div className="detail__btn">
                <Link to="/jobs">
                    <Button text="Back to all jobs" color=""/>
                </Link>
                <Button text={btnText} color={btnColor} onClick={handleClick}/>
                {/* <p className="save-warning">{warning}</p> */}
            </div>
        );
    } else if(!postBtnGroup){
        btnJob = (
            <div className="detail__btn">
                <Link to="/jobs">
                    <Button text="Back to all jobs" color=""/>
                </Link>
            </div>
        )
    }
    //////////////////////////////////// Blog details page
    let postGroup;
    if (post) {
        postGroup = (
            <>
                <h2 className="body-title">{title}</h2>
                <div className="body-group blog">
                    <p className="body-group__subtitle">by {singlePost?.author?.account?.name}</p>
                    <p className="body-group__subtitle">{moment(createdAt).fromNow()}</p>
                </div>
                <p>{body}</p>
               
            </>
        )
    }   
    let btnPost;
    if (postBtnGroup) {
        btnPost = (
             <div className="detail__btn">
                <Link to="/blog" >
                    <Button text="Go to Blog" color=""/>
                </Link>    
            </div>
        ) ;
    }
    
    return (
        <div className="detail">
            <div className="detail-inner">
                <img className="detail__img" src={img.default} alt="four developers having a discussion around a table"></img> 
                <div className="detail__body">
                     
                    { job && Object.keys(singleJob).length === 0 ? 
                        (<p className="loading">Loading all jobs...</p>) : (jobGroup)
                    }

                    { post && Object.keys(singlePost).length === 0 ? 
                    (<p className="loading">Loading all posts...</p>) : (postGroup)
                    }

                </div>
                {btnJob}
                {btnPost} 
            </div>
        </div>
    )
}