// styles
import '../../sass/components/forms.scss';
import Button from '../Button';

export default function FormMentee({
    backgroundColor, 
    inputColor, 
    btnText, 
    btnColor }) {
    return(
        <form className={`form-mentor ${backgroundColor}`}>  
            <div className="form-group">
                <p id="program-option_label">Which program are you interested in?</p>
                <select className="dropdown" name="program" aria-labelledby="program-option_label" required>
                    <option disabled selected value>Select Program</option>
                    <option>Group mentoring</option>
                    <option>One to one mentoring</option>
                    <option>Online mentoring</option>
                </select>
            </div>

            <div className="form-group">
                <p id="experiance-level_label">Select your experiance level</p> 
                <label className="label" htmlFor="beginner">
                    <input className="input-checkbox" id="beginner" name="beginner" type="radio"/>
                    beginner
                </label>

                <label className="label" htmlFor="intermediate">
                    <input className="input-checkbox" id="intermediate" name="intermediate" type="radio"/>
                    intermediate
                </label>

                <label className="label" htmlFor="advanced">
                    <input className="input-checkbox" id="advanced" name="advanced" type="radio"/>
                    advanced
                </label>

            </div>

            <div class="form-group">
                <p id="comment_label">Additional comments</p>
                <textarea className="input-textarea" name="comment" aria-labelledby="comment_label" placeholder="Add a comment"></textarea>
            </div>

            <div className="form-group">
                    <Button text={btnText} color={btnColor}/>
            </div>
        </form>
    )
}