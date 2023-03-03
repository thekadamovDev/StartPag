import './contact.css'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
function Contact(){
    return(
        <div className="contact">
            <div className="contcats container">
                <div className="contactTitle">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="date">
                    <div className="inputs">
                        <label>Name</label>
                        <input type="text" />
                        <label>Email</label>
                        <input type="text" />
                        <label>Message</label>
                        <textarea></textarea>
                        <button className='inputButton'>Submit</button>
                    </div>
                    <div className="location">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"></iframe>
                    </div>
                </div>
            </div>
            <footer>
            <div className="footerHead container">
                <div className="footerLinks">
                    <ul>
                        <li>
                            <a href="#"><Facebook className='lucideIcon'/></a>
                            <a href="#"><Instagram className='lucideIcon'/></a>
                            <a href="#"><Twitter className='lucideIcon'/></a>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><Youtube className='lucideIcon'/></a>
                        </li>
                    </ul>
                </div>
                <div className="footerP">
                    <span>© Start, 2022. All rights reserved.</span>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Contact