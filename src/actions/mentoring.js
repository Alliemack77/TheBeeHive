import * as api from '../api';
import {
    GET_ALL_MENTORS,
    ADD_MENTOR,
    ADD_MENTEE
} from '../constants/actions-types';

//Add mentor
export const addMentor = (mentorData) => async (dispatch) => {
    try {
        // grab mentor data from DB
        const {data} = await api.addMentor(mentorData); //waiting to comeback with the list

        // dispatch action
        dispatch({
            type: ADD_MENTOR,
            payload: data
        });

    } catch (error) {
        console.log(error.message)
    }
}

// get all mentors -rendering the page
export const getAllMentors = () => async (dispatch) => {
    try {
        // grab mentor data from DB
        const {data} = await api.getAllMentors(); //waiting to comeback with the list

        // dispatch action
        dispatch({
            type: GET_ALL_MENTORS,
            payload: data
        });

    } catch (error) {
        console.log(error.message)
    }
}
export const addMentee= (menteeData) => async (dispatch) => {
    try {
        // grab mentee data from DB
        const {data} = await api.addMentee(menteeData);

        // dispatch action
        dispatch({
            type: ADD_MENTEE,
            payload: data
        });

    } catch (error) {
        console.log(error.message)
    }
}
