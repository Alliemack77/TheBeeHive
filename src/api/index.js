import axios from "axios";
import { loadState } from "../localstorage.js";

const url = "https://guarded-ridge-15699.herokuapp.com";

// login/register instance
const instance = axios.create({
  baseURL: url,
  headers: {'Content-Type' : 'application/json'}
});

// set token is used in all private routes
const setToken = () => {
  const data = loadState();
  if (data && data.token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`; // header added to all reqs
  }
}

////// login/register requests 
export const login = (user) => {
  return instance.post('/auth/login', user);
}

export const registerUser = (user) => {
  return instance.post("/accounts/register/user", user);
}

export const registerCompany = (company) => {
  return instance.post("/accounts/register/partner", company);
}

////// jobs requests

export const getJobsAll = () => {
  setToken();
  return instance.get('/jobs')
}

export const getJobsEdit = () => {
  setToken();
  return instance.get('/partners/jobs');
}

export const getJobsSaved = () => {
  setToken();
  return instance.get('/users/jobs')
}

export const getJobDetail = (jobId) => {
  setToken();
  return instance.get(`/jobs/${jobId}`)
}

// job CRUD actions
export const createJob = (jobData) => {
  setToken();
  return instance.post('/jobs', jobData)
}

export const updateJob = (jobId, updatedJob) => {
  setToken();
  return instance.patch(`/jobs/${jobId}`, updatedJob)
}

export const deleteJob = (jobId) => {
  setToken();
  return instance.delete(`/jobs/${jobId}`)
}


// job save or remove saved 
export const saveJob = (jobId) => {
  setToken();
  return instance.post('/users/jobs', jobId)
}

export const removeSavedJob = (jobId) => {
  setToken();
  return instance.delete(`users/jobs/${jobId}`)
}

// ----------------BLOG------------------------
// blog requests 
export const getAllBlogPosts = () => {
  setToken();
  return instance.get('/blog');
}

// blog one post request 
export const getOneBlogPost = (blogId) => {
  setToken();
  return instance.get(`/blog/${blogId}`);
}

//get posts to edit 
export const getPostsEdit = () => {
  setToken();
  return instance.get('/users/blog-posts') 
}

//------Blog CRUD actions-------------
//Create post
export const createPost = (postData) => {
  setToken();
  return instance.post('/blog', postData)
}
//Update post ---update the new function name on other files
export const updatePost = (blogId,updatedPost) => {
  setToken();
  return instance.patch(`blog/${blogId}`, updatedPost);
}

//delete post -OK
export const deletePost = (blogId)=> {
  setToken();
  return instance.delete(`/blog/${blogId}`)
};

//like a blog instance - OK
export const likePost = (blogId)=> {
  setToken();
  return instance.get(`/blog/like/${blogId}`)
};

//get all the likes of a post - OK
 export const getLikesPost = (blogId)=> {


  return instance.get(`/blog/likes/${blogId}`)
}; 


// ----------------MENTORING------------------------
//ADD mentee - form register
export const addMentee = (menteeData) => {
  setToken();
  return instance.post("/users/mentee", menteeData);
}

//ADD mentor - form register
export const addMentor = (mentorData) => {
  setToken();
  return instance.post("/users/mentor", mentorData);
}

//rendering all mentors in the page
export const getAllMentors = () => {
  setToken();
  return instance.get("/users/mentors");
}

