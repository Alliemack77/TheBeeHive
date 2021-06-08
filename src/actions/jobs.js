import * as api from '../api';
import {
    GET_JOBS_ALL,
    GET_JOBS_EDIT,
    GET_JOBS_SAVED,
    SELECTED_JOB, 
    CREATE,
    UPDATE,
    DELETE,
    REMOVE_SAVED_JOB,
    
    
} from '../constants/actions-types';

export const getJobsAll = () => async (dispatch) => {
    try {
        const {data} = await api.getJobsAll();
      
        dispatch({
            type: GET_JOBS_ALL,
            payload: data
        });

    } catch (error) {
        console.log(error.message)
    }
}

export const getJobsEdit = () => async (dispatch) => {
    
    try {
        const {data} = await api.getJobsEdit(); 
        dispatch({
            type: GET_JOBS_EDIT,
            payload: data.jobs
        });

    }  catch (error) {
        console.log(error.message)
    }
}

export const getJobsSaved = () => async (dispatch) => {
    try {
        const {data} = await api.getJobsSaved(); 
        dispatch({
            type: GET_JOBS_SAVED,
            payload: data
        });

    } catch (error) {
        console.log(error.message)
    }
}


export const selectedJob = (jobId) => async (dispatch) => {
    try {
        const {data} = await api.getJobDetail(jobId);
        dispatch({
            type: SELECTED_JOB,
            payload: data //one job
        })

    } catch (error) {
        console.log(error.message);
    }
}

export const createJob = (jobData) => async (dispatch) => {
    try{

        const {data} = await api.createJob(jobData);
        dispatch({
            type: CREATE,
            payload: data
        });

    } catch (error) {
        console.log(error.message)
    }
}


export const updateJob = (jobId, updatedJob) => async (dispatch) => {
    try {
        const {data} = await api.updateJob(jobId, updatedJob);
        dispatch({
            type: UPDATE, 
            payload: data
        })

    } catch (error) {
        console.log(error.message)
    }
}


export const deleteJob = (jobId) => async (dispatch) => {
    try {
        await api.deleteJob(jobId)
        dispatch({
            type: DELETE,
            payload: jobId
        })

    } catch (error) {
        console.log(error.message)
    }
}

export const removeSavedJob = (jobId) => async (dispatch) => {
    try {
        await api.removeSavedJob(jobId) 

        dispatch({
            type: REMOVE_SAVED_JOB,
            payload: jobId
        })

    } catch (error) {
        console.log(error.message)
    }
}



