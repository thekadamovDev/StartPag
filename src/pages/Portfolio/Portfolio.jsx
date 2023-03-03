import './portfolio.css'
import './portfolioResponsive.css'
import card1 from '../../images/port1.png'
import card2 from '../../images/port2.png'
import card3 from '../../images/port3.png'
import card4 from '../../images/port4.svg'
import card5 from '../../images/port5.svg'
import card6 from '../../images/port6.svg'
import card7 from '../../images/port7.svg'
import card8 from '../../images/port8.png'
import { useState } from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
function Portfolio(){

    const [port, setPort] = useState([
        {
            img:card1
        },
        {
            img:card2
        },
        {
            img:card3
        },
        {
            img:card4
        },
        {
            img:card5
        },
        {
            img:card6
        },
        {
            img:card7
        },
        {
            img:card8
        }
    ])

    return(
        <div className="portfolio">
            <div className="mainPortfolio container">
                <div className="portfolioTitle">
                    <span>Works</span>
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="portfolioCards">
                    {
                        port.map(ports => (
                            <div className="portfolioCard">
                                <img src={ports.img}/>
                            </div>
                        ))
                    }
                </div>
                <button className="mainBtn">Learn More</button>
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

export default Portfolio