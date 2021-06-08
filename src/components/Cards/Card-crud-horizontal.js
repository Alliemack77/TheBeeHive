// horizontal card for: /jobs/create page
import moment from "moment";
import { useDispatch } from 'react-redux';
import { deleteJob, updateJob } from '../../actions/jobs';
import {deletePost, updatePost} from '../../actions/blog';
import '../../sass/components/cards/card-horizontal.scss';
import Button from '../Button';

export default function CardCrud ({
    job, 
    jobPost, 
    setJobId, 
    blog,
    blogPost,
    setBlogId,
}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        if (job) {
            dispatch(deleteJob(jobPost.id))
        } 
        
        if (blog) {
           dispatch(deletePost(blogPost.id))
        }
    }
   
    const handleUpdate = () => {
        if (job) {
            setJobId(jobPost.id)
            dispatch(updateJob(jobPost.id))
            window.scrollTo(0,0)
        }else if(blog){
            setBlogId(blogPost.id)
            dispatch(updatePost(blogPost.id, blogPost))
            window.scrollTo(0,0)
        }  
    }

    let jobBody;
    if (job) {
        jobBody = (
            <>
                <h1 className="body-title">{jobPost.title} </h1>
                <div>
                    <p className="body-subtitle"> {jobPost.location} </p>
                    <p className="body-subtitle"> {moment(jobPost.createdAt).fromNow()} </p>
                </div>
                <p className="body-text">{jobPost.description}</p>
            </>
        )
    }

    let blogBody;
    if (blog) {
        blogBody = (
            <>
                <h1 className="body-title">{blogPost.title} </h1>
                <div>
                    <p className="body-subtitle"> {moment(blogPost.createdAt).fromNow()} </p>
                </div>
                <p className="body-text">{blogPost.body}</p> 
            </>
        )
    }
    return (
        <div className="crud-horizontal">
            <div className="crud-horizontal__body">
                {blogBody}
                {jobBody}
            </div>

            <div className="crud-horizontal__btns">
                <Button text="Edit" color="outline" type="button" onClick={handleUpdate}/>
                <Button text="Delete" color="red" type="button" onClick={handleDelete}/>
            </div>
        </div>
    )

}