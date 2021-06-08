import {
    GET_ALL_POSTS,
    GET_ONE_POST,
    GET_POST_EDIT,
    CREATE,
    UPDATE,
    DELETE, 
    GET_LIKE,
    LIKE, 
} from '../constants/actions-types';

export const postsReducer = (posts = [], action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            return action.payload;

        case GET_POST_EDIT:
            return action.payload;
        
        case CREATE:
            return [...posts, action.payload];
        
        case  UPDATE:
            return posts.map((post)=> post.id === action.payload.id ? action.payload : post);
        
        case DELETE:
     
        return posts.filter((post)=> post.id !== action.payload);// returns an array containing blog with id's that do not match the action.payload ( an id --> a number)
        
        default:
            return posts;  
        
    }
}

export const onePostReducer = (post = {}, action) => {
    switch (action.type) {
        case GET_ONE_POST:  
            return action.payload;
        default:
            return post;
    }

}

 export const likesReducer =(like ={}, action)=>{
    //console.log("like",like);
    //console.log("action", action);
    switch (action.type) {
        
        case LIKE:
            return like
        
        case GET_LIKE:
            return action.payload
        
        default:
        return like;
    }
}
