// styles
import '../../sass/components/forms.scss';

import Button from '../Button';

export default function FormNewsletter({backgroundColor, inputColor, btnText, btnColor }) {
    return(
        <form className={`form ${backgroundColor}`}>
            <h2>Sign up for our newsletter!</h2>
            <p>Enter your details below to recieve our newsletter</p>

            <div className="form-group">
                <label htmlFor="name"></label>
                <input className={inputColor} id="name" name="name" type="text" placeholder="Enter your name"></input>
            </div>

            <div className="form-group">
                <label htmlFor="emailNewsletter"></label>
                <input className={inputColor} id="emailNewsletter" name="email" type="text" placeholder="Enter your email"></input>
            </div>

            <div className="form-group">
                    <Button text={btnText} color={btnColor} type="submit"/>
            </div>
        </form>
    )
}



