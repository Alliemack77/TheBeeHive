import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCrud from './Cards/Card-crud-horizontal';
import '../sass/pages/_create.scss';

//job 
import { getJobsEdit } from '../actions/jobs';
import FormCrudJob from './Forms/Form-job-crud';

//blog imports
import { getPostsEdit } from '../actions/blog';
import FormBlogCrud from './Forms/Form-blog-crud';


export default function CreatePost ( { createJob, createBlog } ) {

    const [blogId, setBlogId] = useState(null);
    const [jobId, setJobId] = useState(null);
    const dispatch = useDispatch();

    const jobs = useSelector((state) => state.jobs);
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        if (createJob) {
            dispatch(getJobsEdit());

        } else if (createBlog){
            dispatch(getPostsEdit()); 
        }
    
    }, [dispatch]);

    
    if (createJob) {
        return (
            <div className="create">
                
                <h1>Edit or add a new job</h1>
                <div className="create__inner">

                    <div className="inner-form">
                        <FormCrudJob btnColor="" btnText="Add" jobId={jobId} setJobId={setJobId} type="submit"/>
                    </div>

                   
                    <div className="inner-stack">
                        {jobs.length === 0 ? (
                            <p className="loading">Loading all jobs...</p> 
                        ) :  (
                            jobs.map(job => 
                                <CardCrud job={true} jobPost={job} key={job.id} jobId={jobId} setJobId={setJobId} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
    
    if (createBlog) {
        return (
            <div className="create">
                <h1>Edit or add a new post</h1>
                <div className="create__inner">

                    <div className="inner-form">
                        <FormBlogCrud btnColor="" setBlogId={setBlogId} blogId={blogId} btnText="Add" type="submit"/>
                    </div>

                    <div className="inner-stack">

                        {posts.length === 0 ? (
                            <p className="loading">Loading all posts...</p>
                        ) :  (
                            posts.map(post =>
                                <CardCrud blog={true} blogPost={post} key={post.id} blogId={blogId} setBlogId={setBlogId} />
                            )
                        )}
                    </div> 
                </div>
            </div>
        )
    } 
}

