import '../../../sass/components/forms.scss';
import Button from '../../../components/Button';

export default function Search () {
    return (
        <div className="search bg-grey">
            <h1 className="search-title">Search for your next job</h1>
            <form className="search-form">
                <input className="input-grey" name="" placeholder="Search for title, tech, or company"></input>
                <input className="input-grey" name="" placeholder="Search for city, state, or zip"></input>
                <div>
                    <Button text="Search"/>
                </div>
            </form>
        </div> 
    )

}