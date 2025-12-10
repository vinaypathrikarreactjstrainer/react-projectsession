import React from 'react'

const SkillBox = ({name, score}) => {
  return (
    <>
      <div className='card'>
        <div className='card-icon'></div>
        <h3>{name}</h3>
        <span>{score}</span>
      </div>
    </>
  )
}

export default SkillBox
