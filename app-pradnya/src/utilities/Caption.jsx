import React from 'react'
import './caption.css';
const Caption = ({title, subTitle, summary}) => {
  return (
    <>
        <h1 className='title'>{title} <span>{subTitle}</span></h1>
        <p className='summary'>{summary}</p>
    </>
  )
}

export default Caption