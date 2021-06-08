import {
    ADD_MENTOR,
    GET_ALL_MENTORS, 
    ADD_MENTEE
} from '../constants/actions-types';

const mentoringReducer = (mentorList = [], action) => {

    switch(action.type) {
        case GET_ALL_MENTORS:
            return action.payload; 
        case ADD_MENTEE:
            return action.payload;  
        case ADD_MENTOR:
            return [...mentorList, action.payload]
        default:
            return mentorList;        
    }
}
export default mentoringReducer;



