import './About.css'
import React, {Component} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import {MotionContext} from '../Contexts.js'
import List from '../components/List'
import TextLogo from '../components/TextLogo'
import downArrow from '../media/down-arrow.png'
// import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills_list:[
                {title:'For Front-End:',skills:['HTML5','CSS3','JavaScript','React Js']},
                {title:'For Back-End:',skills:['Python','Django','Django REST Framework','Mysql / SQLite / PostgreSQL']},
            ]
        }
    }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  static contextType = MotionContext
    render(){
        const context = this.context
        return (
            <>
            <motion.div className={'main main__about'}
            style={context.pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={context.pageVariants}
            transition={context.pageTransition}
            >
                <RouterLink to='/' className='a_no_style'>
                    <TextLogo title='GoBack'/>
                </RouterLink>
                <div className={'about__body'}>
                <div className={'about__body__upper'}>
                    <div className={'about__heading__cont'}>
                        <p className={'about__heading'}>
                            I design <span style={{color:'red'}}>&</span> build <br/> <span style={{color:'#03a9f4'}}>Awesome</span> Websites
                        </p>   
                    </div>
                    <Link
                        className="about__down__arrow"
                        activeClass="active"
                        to="about__body__bottom"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                    >
                        <img src={downArrow} alt="Scroll Down" />
                    </Link>
                </div>
                <div className={'about__body__bottom blurred-box'} id={'about__body__bottom'}>
                    <p className={'about__text'}>
                    <h2>About</h2>
                    Hey, Aneeq here. A Full-Stack Python (Django) Web Dev. I can build site from scratch and update existing sites. I have experience in Website development. Mainly focused on: Django, React JS, Django rest framework, HTML5, CSS3, Bootstrap4 I create responsive and SEO-friendly user interfaces using React JS, Bootstrap.
                    <br/>
                    <br/>
                    Want a new website for your Brand? Then you are in right place I can develop a simple CRUD application to a full-featured web application, <RouterLink to='/contact' className='a_no_style' style={{color:'#03a9f4',fontWeight:'bold'}}>So Lets get Connected</RouterLink>

                    <ul className={'about__text__skills'}>
                        <li>
                            <h3>Skills I have under my Belt:</h3>
                            <ul>
                                {this.state.skills_list.map(skill => {
                                    return(
                                        <li>
                                            <List title={skill.title} list={skill.skills} className={'about__text__list'}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                    <br/>

                    Thank You,<br/>
                    Regards<br/>
                    Aneeq Akbar Khan
                    </p>
                </div>
                </div>
            </motion.div>
            <button className={'scroll_to_top'} onClick={()=>{this.scrollToTop()}}>
                <img src={downArrow} alt="Back To Top" style={{transform: 'rotate(180deg)'}} />
            </button>
            
            </>
        )
    }
}
