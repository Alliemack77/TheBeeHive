import '../../sass/components/cards/mentor-card-horizontal.scss';
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'; 
import mentorImage from '../../assets/faces/young-woman.jpg';

export default function CardMentorHoriz ({mentor}) {
    return ( 
        <div className="card-horizontal">
            
            <div className="card-horizontal__body">
                <div className="body-heading">
                    <h1 className="body-title">{mentor.name}</h1>
                    <h2 className="body-subtitle">{mentor.position}</h2>
                    <p className="body-text">{mentor.description}</p>
                </div>
            
                <div className="body-social">
                    <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                    <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub/></a>
                    <a className="social-link" href="https://www.xing.com/" target="_blank" rel="noreferrer"><FaXing/></a>
                </div>
            </div>
            <div className="card-horizontal__img">
                <img src={mentorImage} alt="a BeeHive mentor"></img>
            </div> 

        </div>
      

        
    )

}