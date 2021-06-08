import {
    GET_JOBS_ALL,
    GET_JOBS_EDIT,
    GET_JOBS_SAVED,
    SELECTED_JOB, 
    CREATE,
    UPDATE,
    DELETE,
    SAVE,
    REMOVE_SAVED_JOB
    
} from '../constants/actions-types';

export const jobsReducer = (jobs = [], action) => {

    switch(action.type) {
        case GET_JOBS_ALL:
            return action.payload;

        case GET_JOBS_EDIT: 
            return action.payload;

        case CREATE:
            return [...jobs, action.payload];

        case UPDATE:
            return jobs.map((job) => job.id === action.payload.id ? action.payload : job);

        case DELETE:
            return jobs.filter((job) => job.id !== action.payload); // returns an array containing jobs with id's that do not match the action.payload ( an id --> a number)

        default:
            return jobs;
    }
}

export const selectedJobReducer = (job = {}, action) => {

    switch (action.type) {
        case SELECTED_JOB:
            return action.payload;

        default:
            return job;
    }

}


export const savedJobsReducer = (savedJobs = [], action) => {
    switch(action.type) {
        case GET_JOBS_SAVED:
            return action.payload;

        case SAVE:
            //console.log("SAVE action.payload", action.payload)
            return [...savedJobs, action.payload ];

        case REMOVE_SAVED_JOB:
            //console.log("ACTION.PAYLOAD", action.payload, ) //jobId --> number
            return savedJobs.filter((job) => Number(job.id) !== action.payload ); // returns an array containing jobs with id's that do not match the action.payload ( an id --> a number)

        default:
            return savedJobs
    }


}

//
//console.log('JOBID', typeof Number(job.id))