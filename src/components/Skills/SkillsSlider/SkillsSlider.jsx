import React from 'react';
import Marquee from "react-fast-marquee";
import { useThemeContext } from '../../../hooks/themeHook';
import './skillsSlider.css'

import { skillsData } from '../../Data/skillsdata'
import { skillsImage } from '../../Data/SkillsImage'

function SkillsSlider() {


    const { dark } = useThemeContext();

    const color = {
        primary30: "#26a641",
        primary: "#26a641",
        secondary1: "#0d1117",
        secondary2: "#ffffff",
        tertiary: "#39d353",
    }

    const skillBoxStyle = {
        backgroundColor: dark ? color.secondary1 : color.secondary2,
        boxShadow: `0px 0px 30px ${color.primary30}`
    }

    return (
        <div className="skills" style={{backgroundColor: dark ? color.secondary1 : color.secondary2}}>
            
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: color.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default SkillsSlider;