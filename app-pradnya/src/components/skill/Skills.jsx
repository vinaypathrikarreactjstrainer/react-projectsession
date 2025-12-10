import React from 'react'
import Caption from '../../utilities/Caption';
import './skill.css';
import SkillBox from './SkillBox';
const Skills = ({skill}) => {
    console.log('skill props => ', skill);
  return (
    <>
    <div className='sections bg-black'>
        <Caption 
            title = "My Work"
            subTitle = "Skills"
            summary = "I am proficient in Python (Pandas, NumPy, basic visualization) Power BI (interactive dashboards, DAX), Data"
        />
        {
            skill.map((item, index)=> {
                return <SkillBox 
                key={index}
                name = {item.name}
                score = {item.score}
                />
            } )
        }
        </div>
    </>
  )
}

export default Skills