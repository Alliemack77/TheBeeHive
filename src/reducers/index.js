import { combineReducers } from 'redux';
import login from "./login";
import mentoringReducer from "./mentoring";
import {postsReducer, onePostReducer, likesReducer} from "./blog";
import { jobsReducer, savedJobsReducer, selectedJobReducer } from "./jobs";

export default combineReducers({
    login,
    jobs: jobsReducer, 
    job: selectedJobReducer,
    savedJobs: savedJobsReducer,
    mentorList: mentoringReducer,
    posts: postsReducer,
    post: onePostReducer,
    like:likesReducer
});
