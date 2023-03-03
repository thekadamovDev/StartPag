import { Check } from 'lucide-react'
import { useState } from 'react'
import './servis.css'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
function Servis() {

    const [servicCard, setServis] = useState([
        {
            name: 'Basic',
            price: '$100',
            paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            title1: 'Lorem ipsum, dolor sit',
            title2: 'Lorem ipsum, dolor sit',
            title3: 'Lorem ipsum, dolor sit',
            title4: 'Lorem ipsum, dolor sit',
            title5: 'Lorem ipsum, dolor sit',
        },
        {
            name: 'Basic',
            price: '$100',
            paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            title1: 'Lorem ipsum, dolor sit',
            title2: 'Lorem ipsum, dolor sit',
            title3: 'Lorem ipsum, dolor sit',
            title4: 'Lorem ipsum, dolor sit',
            title5: 'Lorem ipsum, dolor sit',
        },
        {
            name: 'Basic',
            price: '$100',
            paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            title1: 'Lorem ipsum, dolor sit',
            title2: 'Lorem ipsum, dolor sit',
            title3: 'Lorem ipsum, dolor sit',
            title4: 'Lorem ipsum, dolor sit',
            title5: 'Lorem ipsum, dolor sit',
        }
    ])

    return (
        <div className="ser">
            <div className='servis container'>
                <div className="servisTtile">
                    <span>Plans</span>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="servisCards">
                    {
                        servicCard.map(servises => (
                            <div className="servisCard">
                                <span className='span1'>{servises.name}</span>
                                <div className="price"><h1>{servises.price}</h1> <span className='month'>/month</span></div>
                                <p className='parag'>{servises.paragraph}</p>
                                <div className="checks">
                                    <div className="check">
                                        <Check color='#74C69D' />
                                        <p>{servises.title1}</p>
                                    </div>
                                    <div className="check">
                                        <Check color='#74C69D' />
                                        <p>{servises.title2}</p>
                                    </div>
                                    <div className="check">
                                        <Check color='#74C69D' />
                                        <p>{servises.title3}</p>
                                    </div>
                                    <div className="check">
                                        <Check color='#74C69D' />
                                        <p>{servises.title4}</p>
                                    </div>
                                    <div className="check">
                                        <Check color='#74C69D' />
                                        <p>{servises.title5}</p>
                                    </div>
                                </div>
                                <div className="servisBtn">
                                    <button className="mainBtn2">Learn more</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
                <footer>
                    <div className="footerHead container">
                        <div className="footerLinks">
                            <ul>
                                <li>
                                    <a href="#"><Facebook className='lucideIcon' /></a>
                                    <a href="#"><Instagram className='lucideIcon' /></a>
                                    <a href="#"><Twitter className='lucideIcon' /></a>
                                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                                    <a href="#"><Youtube className='lucideIcon' /></a>
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

export default Servis