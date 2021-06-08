import * as api from '../api';
import {
    GET_ALL_POSTS,
    GET_ONE_POST,
    GET_POST_EDIT,
    CREATE,
    UPDATE,
    DELETE,
    GET_LIKE,
    LIKE    
}from '../constants/actions-types';

// get all posts (add)
export const getAllBlogPosts = () => async (dispatch) => {
    try {
        // grab all blog posts from DB
        const {data} = await api.getAllBlogPosts();// data array of object representing the posts
        const allPosts = await Promise.all(data.map(async(post) => {
            const {data} = await api.getLikesPost(post.id);
            //console.log("likes", data);
            return{   //post + likes and return to the new array
                ...post,
                likes: data
            }
        }))
        console.log("posts", allPosts);
        
        dispatch({
            type:GET_ALL_POSTS,
            payload: allPosts
        
        });

    } catch (error) {
        console.log(error.message)
    }
}

// get one post
export const getOneBlogPost = (blogId) => async (dispatch) => {
    try {
        // grab one blog post from DB
        const {data} = await api.getOneBlogPost(blogId);
        
        // dispatch action
        dispatch({
            type: GET_ONE_POST,
            payload: data //one post
        });

    } catch (error) {
        console.log(error.message)
    }
}
// Creating post
 export const createPost = (postData) => async (dispatch) => {
    try{
        const {data} = await api.createPost(postData);
        console.log("DATA:", data);
        dispatch({
            type: CREATE,
            payload: data
        });
    } catch (error) {
        console.log(error.message)
    }
}

//get post to edit
export const getPostsEdit = () => async (dispatch) => {
    try {
      const { data } = await api.getPostsEdit(); 
       
      dispatch({
           type: GET_POST_EDIT, 
           payload: data.blogs
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  

// edit post
export const updatePost = (blogId, updatedPost) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(blogId, updatedPost);
        dispatch({
            type: UPDATE, 
            payload: data
        })

    } catch (error) {
        console.log(error.message)
    }
}

//delete post
export const deletePost = (blogId) => async (dispatch) => {
    try {
        await api.deletePost(blogId);
        dispatch({ 
            type: DELETE, 
            payload: blogId
        });
    } catch (error) {
        console.log(error.message);
    }
};
//like a post
export const likePost = (blogId)=> async (dispatch) => {
    try {
        const {data} = await api.likePost(blogId);
        console.log(data);
        dispatch({ 
            type: LIKE, 
            payload: data
        });

    } catch (error) {
        console.log(error.message);
    }
};

//get the total likes from a post
 export const getLikesPost = (blogId)=> async (dispatch) => {
    try {
        const {data} = await api.getLikesPost(blogId);
        dispatch({ 
            type: GET_LIKE, 
            payload: data
        });

    } catch (error) {
        console.log(error.message);
    }
}; 