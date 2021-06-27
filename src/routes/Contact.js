import './Contact.css'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import React,{useContext, useState} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import TextLogo from '../components/TextLogo';
import emailjs from 'emailjs-com'

import {motion} from 'framer-motion'
import {MotionContext} from '../Contexts.js'

function Contact() {
    const context = useContext(MotionContext)
    emailjs.init('user_dURQtNMjUs5RrztLUTqpo')
    const [email_info, setEmail_info] = useState({msg:'',style:{color:'greenyellow'}})
    const handleSubmit = event => {
        event.preventDefault();
        // console.log(event.target['user_name'].value !== '')
        for (const child in event.target) {
            if (Object.hasOwnProperty.call(event.target, child)) {
                const element = event.target[child];
                if (element.nodeName === 'INPUT' | 'TEXTAREA' && element.value === ''){
                    return setEmail_info({msg:'Please fill in every field',style:{color:'red'}})
                }
            }
        }
        emailjs.sendForm('service_nthm7l6', 'template_u336t9m', event.target)
                    .then(function() {
                        setEmail_info({msg:'Message Dilivered successflly',style:{color:'greenyellow'}})
                    }, function(error) {
                        setEmail_info({msg:'Message could not be dilivered',style:{color:'red'}})
                    });
        return
    }

    return (
        <motion.div className={'main main__home'}
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
        <div>
            
            <form id={'contact-form'} onSubmit={handleSubmit}> 
            <h1 className="title">Talk to Me</h1>
            <p id={'email_info'} style={email_info.style}>{email_info.msg}</p>
                <div className="form-group">
                    <label htmlFor="formName" className="d-block">
                        <i className={"icon fa fa-user-circle"} aria-hidden="true"></i>
                    </label>
                    <input type="text" id="formName" className="form-control thick" placeholder="Name" name='user_name' required />
                </div>
                <div className="form-group position-relative">
                    <label htmlFor="formEmail" className="d-block">
                    <i className={"icon fa fa-envelope-o"} aria-hidden="true"></i>

                    </label>
                    <input type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail" name='user_email' required/>
                </div>
                <div className="form-group message">
                    <textarea id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Message" name='message' required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
                </div>
        	    </form>
            </div>
        </motion.div>
        )
    }

export default Contact

