import './main.css';
import './mainResponsive.css';
import headerImg from '../../images/link1.svg'
import linkImg1 from '../../images/link2.svg'
import linkImg2 from '../../images/link3.svg'
import linkImg3 from '../../images/link4.svg'
import linkImg4 from '../../images/link5.svg'
import linkImg5 from '../../images/link6.svg'
import mainSvg1 from '../../images/Group.svg'
import mainSvg2 from '../../images/Group (1).svg'
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.png'
import avatar4 from '../../images/avatar4.png'
import { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function Main() {


    const [card, setCard] = useState([
        {
            img: avatar1,
            name: 'Peg Legge',
            work: 'Ceo'
        },
        {
            img: avatar2,
            name: 'Richard Guerra',
            work: 'Cto'
        },
        {
            img: avatar3,
            name: 'Alexandra Stolz',
            work: 'Designer'
        },
        {
            img: avatar4,
            name: 'Janet Bray',
            work: 'Developer'
        }
    ])

  return (
    <div className="main">
        <div className="headerMain">
            <div className="head container">
                <div className="headerDesc">
                    <span>Welcome</span>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <button className='headBtn'>Explore</button>
                </div>
                <div className="headerImg">
                    <img src={headerImg} />
                </div>
            </div>
            
        </div>
        <main className='container'>
            <div className="mainCompany">
                <div className="mainTitle">
                    <span className='upparcase'>Partners</span>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="mainLinks">
                    <img src={linkImg1}/>
                    <img src={linkImg2}/>
                    <img src={linkImg3}/>
                    <img src={linkImg4}/>
                    <img src={linkImg5}/>
                </div>
                <button className="mainBtn">Learn More</button>
            </div>
            <div className="mainWork">
                <div className="mainWorkImg">
                    <img src={mainSvg1} />
                </div>
                <div className="mainWorkTitle">
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <div className="workBtn"><button className='mainBtn'>Learn More</button></div>
                </div>
            </div>
            <div className="mainWork2">
                <div className="mainWorkTitle">
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <div className="workBtn"><button className='mainBtn'>Learn More</button></div>
                </div>
                <div className="mainWorkImg">
                    <img src={mainSvg2} />
                </div>
            </div>
            <div className="mainCard">
                <div className="mainCardTitle">
                    <span className='upparcase'>Team</span>
                    <h1>Our Talents</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        Suscipit nemo hic quos, ab,
                    </p>
                </div>
                <div className="mainCards">
                    {
                        card.map(cards => (
                            <div className="card">
                                <div className="cardPrimary">
                                    <div className="cardImg">
                                        <img src={cards.img} />
                                    </div>
                                    <div className="cardTitle">
                                        <h3>{cards.name}</h3>
                                        <span>{cards.work}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="mainBtn">View Team</button>
            </div>
        </main>
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
  );
}

export default Main;