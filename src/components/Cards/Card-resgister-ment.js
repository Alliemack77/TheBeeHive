import '../../sass/components/cards/registerMent.scss';
import Button from '../Button';
import {Link}from 'react-router-dom';

export default function CardRegisterMent({
    title,
    link,
    btnText, 
    btnColor, 
}) {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi repellendus itaque minus."; 
     
    return ( 
        <div className="ment">
            <div className="ment__card">
                <div className="ment__card-features">
                    <h2>{title}</h2>
                    <p className="body-text">{text}</p>
                </div>       
                <div className="form-group">
                    <Link to={link}>
                        <Button text={btnText} color={btnColor}/> 
                     </Link>

                 </div>
            </div>  
        </div>    
    )   
}

