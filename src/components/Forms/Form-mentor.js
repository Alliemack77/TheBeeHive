// styles
import{useState} from "react";
import '../../sass/components/forms.scss';
import Button from '../Button';
import {addMentor} from '../../actions/mentoring';
import {useDispatch}from "react-redux";
import { Redirect } from "react-router";
import * as api from "../../api";

export default function FormMentor({
    backgroundColor, 
    inputColor, 
    btnText, 
    btnColor }) {
        const [redirect, setRedirect] = useState(false);
        const [mentorError, setMentorError] = useState(""); // shows a  message when the mentor is already registered
        const [serverError, setServerError] = useState(""); // shows a  message when there is a server error
        const[ mentorData , setMentorData] = useState({
        position:"",
        description: "",
     }) 
     //useState for local storage
    const dispatch= useDispatch(); 
     const handleSubmit= (e)=> {
        e.preventDefault();
        dispatch(addMentor(mentorData))
        api.addMentor(mentorData)
    // backend response
        .then((response) => {
        setRedirect(true); // setting the redirect to the submit message page
    })
        .catch((error) => {
        if (error.response.status === 401) {   //check 401 with Frank
        setMentorError("Mentor already registered");
        } else {
        setServerError("Unknown error. Please contact admin.");
      }
    });
     }
     if (redirect) {
        return <Redirect to="/submitMessage" />;
    } else {
    return(
        <form className={`form-mentor ${backgroundColor}` }
            onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="position">What was your latest position?</label>
                <input 
                onChange={(e)=> setMentorData({
                    ...mentorData, 
                    position:e.target.value
                })} 
                value={mentorData.position} 
                className={inputColor} 
                id="position"
                name="position" 
                type="text" 
                placeholder="Enter your latest position">
                </input>
            </div>

            <div className="form-group">
                <p>Select all that apply</p> 
                <label className="label" htmlFor="html">
                    <input className="input-checkbox" id="html" name="htmlCss" type="checkbox"/>
                HTML</label>

                <label className="label" htmlFor="css">
                    <input className="input-checkbox" id="css" name="htmlCss" type="checkbox"/>
                CSS</label>

                <label className="label" htmlFor="javascript">
                    <input className="input-checkbox" id="javascript" name="javascript" type="checkbox"/>
                JavaScript</label>

                <label className="label" htmlFor="php">
                    <input className="input-checkbox" id="php" name="php" type="checkbox"/>
                PHP</label>

                <label className="label" htmlFor="node">
                    <input className="input-checkbox" id="node" name="nodeExpress" type="checkbox"/>
                Node</label>

                <label className="label" htmlFor="Express">
                    <input className="input-checkbox" id="express" name="nodeExpress" type="checkbox"/>
                Express</label>

                <label className="label" htmlFor="react">
                    <input className="input-checkbox" id="react" name="reactAngularVue" type="checkbox"/>
                React</label>

                <label className="label" htmlFor="bootstrap">
                    <input className="input-checkbox" id="bootstrap" name="bootstrapTailwind" type="checkbox"/>
                Bootstrap</label>
            </div>

            <div className="form-group">
                <p id="additional-comments_label">Additional comments</p>
                <textarea 
                onChange={(e)=> setMentorData({
                ...mentorData, 
                description:e.target.value
                })} 
                value={mentorData.description} 
                className="input-textarea" 
                aria-labelledby="additional-comments_label"
                name="description" 
                placeholder="Add a comment">
                </textarea>
            </div>
                <p>{mentorError}</p> 
                <p>{serverError}</p>   
            <div className="form-group">
                    <Button type="submit" text={btnText} color={btnColor}/>
            </div>
        </form>
    )}
}