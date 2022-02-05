import React from 'react'

import github from '../assets/icons/github.svg'
import location from '../assets/icons/location.svg'
import dowload from '../assets/icons/dowload.svg'
import avatar from '../assets/avatar.svg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:sardalashvili.levan@gtu.ge")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={avatar} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Levan <span>Sardalashvili</span> </div>
            <div className="sidebar__item sidebar__title">Front-End Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={dowload} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
          
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/levansardalashvili"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={location} alt="location" className="sidebar__icon mr-3" />
                    Georgia</div>
                <div className="sidebar__item">sardalashvili.levan@gtu.ge</div>
                <div className="sidebar__item">555 49 01 27</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Send Me</div>
        </motion.div>
    )
}

export default Sidebar;