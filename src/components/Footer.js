import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../sass/components/footer.scss";
import '../../src/sass/components/forms.scss';
import FormNewsletter from '../components/Forms/Form-newsletter';
import { FiFacebook, FiTwitter,FiGithub} from 'react-icons/fi'; 

class Footer extends Component {
    render() {
      return (
        <footer>
            <div className="wrapper">

                <div className="footer__container">
                    <div className="nav-list__footer">
                        <ul className="nav-split__footer">
                            <li className="footer-split__item">
                                <Link 
                                    className="footer__link" to="/contact-us" >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="footer-split__item">
                                <Link 
                                    className="footer__link" to="/jobs">
                                    Jobs
                                </Link>
                            </li>
                            <li className="footer-split__item">
                                <Link className="footer__link" to="/mentoring" >
                                    Mentoring
                                </Link>
                            </li>
                            <li className="footer-split__item">
                                <Link className="footer__link" to="/network" >
                                    Network
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav-split__footer">
                            <li className="footer-split__item">
                                <Link className="footer__link" to="/community">
                                    Newsletter
                                </Link>
                            </li>
                            <li className="footer-split__item">
                                <Link className="footer__link" to="/blog" >
                                    Blog
                                </Link>
                            </li>
                            <li className="footer-split__item">
                                <Link className="footer__link" to="/community">
                                    Community News
                                </Link>
                            </li>
                            <li className="footer-split__item">
                                <Link className="footer__link" to="/community">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>                     
                <div className="footer__container">
                    <h1>The BeeHive</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                    Donec scelerisque sollicitudin enim eu venenatis. </p>
                    <div className="social">
                        <a className="social__link" href="https://www.facebook.com/">
                            <FiFacebook /></a>

                        <a className="social__link" href="https://twitter.com/?lang=en"> 
                            <FiTwitter /> </a>

                        <a className="social__link" href="https://github.com/">
                            <FiGithub /> </a>  
                    </div>
                </div>
                <div className="footer__container">
                    <FormNewsletter 
                    backgroundColor="bg-blue" 
                    inputColor="input-white" 
                    btnText='Subscribe' 
                    btnColor="outline-white"
                    />
                </div>
            </div>
        </footer>
      );
    }
} 
export default Footer;
  