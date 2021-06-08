import React, { useEffect } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { connect, useDispatch } from "react-redux";

// JWT related
import { loadState } from "./localstorage";
import jwt from "jsonwebtoken";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./screens/Landing/Landing.js";
import Mentoring from "./screens/Mentoring/Mentoring.js";
import AllMentors from "./screens/Allmentors/AllMentors";
import MentorApplication from "./screens/Applications/Mentors.js";
import MenteeApplication from "./screens/Applications/Mentee.js";
import Partners from "./screens/Partners/Partners.js";
import Community from "./screens/Community/Community.js";
import Blog from "./screens/Blog/Blog.js";
import Events from './screens/Events/Events-all.js';
import EventMessage from './screens/Events/components/EventMessage.js';
import Jobs from "./screens/Jobs/Jobs-all.js";
import JobsSaved from "./screens/Jobs/Jobs-saved.js";
import CreatePost from "./components/CreatePost";
import DetailsPage from "./components/DetailsPage.js";
import Login from "./screens/Login/Login.js";
import Register from "./screens/Register/Register";
import WelcomeMessage from "./screens/WelcomeMessage/WelcomeMessage";
import SubmitMessage from "./screens/Applications/components/SubmitMessage";
import ContactUs from "./screens/ContactUs/ContactUs";

//Private routes - view pages permissions according to user's type:
import PrivateRoute from "./components/private-routes/PrivateRoute";

function App({ logged, user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Saving JWT into Redux
    const data = loadState();
    // Check if there is a JWT
    if (data && data.login) {
      // Decode
      const userData = jwt.decode(data.token); 

      // Check if it is valid
      let dateNow = new Date();
      if (userData.exp < dateNow.getTime()) {
        // save it to redux
        dispatch({
          type: "LOGIN",
          payload: userData,
        });
      }
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <div> {logged} </div>
      <div className="container">
        <Route exact path="/" component={Landing} />
        <Route exact path="/mentoring" component={Mentoring} />
        <PrivateRoute
          pathComponent="/users/mentors"
          PrivateComponent={AllMentors}
          userType="all"
        />
        <PrivateRoute
          pathComponent="/users/mentor"
          PrivateComponent={MentorApplication}
          userType="all"
        />

        <PrivateRoute
          pathComponent="/users/mentee"
          PrivateComponent={MenteeApplication}
          userType="all"
        />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/community/events" component={Events} /> 
        <Route exact path="/events/signup" component={EventMessage} /> 
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact-us" component={ContactUs} />

        <PrivateRoute
          pathComponent="/users/blog-posts"
          userType="mentor"
          PrivateComponent={CreatePost}
          createBlog={true}
          hasLikes={true} 
        />
        <Route
          exact path="/blog/:blogId"
          render={() => (
            <DetailsPage post={true} postBtnGroup={true}/>
            )} 
        /> 
        <PrivateRoute
          pathComponent="/jobs" 
          userType="all"
          PrivateComponent={Jobs} 
        />

        <PrivateRoute
        pathComponent="/user/jobs" 
        userType="all"
        PrivateComponent={JobsSaved} />

        <PrivateRoute 
          pathComponent="/partners/jobs" 
          userType="partner"
          PrivateComponent={CreatePost}
          createJob={true} 
          />

        <PrivateRoute 
          pathComponent="/jobs/:jobId" 
          userType="all"
          PrivateComponent={DetailsPage}
          job={true} 
          jobBtnGroup={true}
          />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/welcomemessage" component={WelcomeMessage} />
        <Route exact path="/submitmessage" component={SubmitMessage} />
        
      </div>
      <Footer />
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    logged: state.login.logged,
    user: state.login.user,
  };
}
export default connect(mapStateToProps)(App);


