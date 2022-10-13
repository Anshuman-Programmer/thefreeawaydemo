import React from 'react'
import styles from './_incomeDisplay.module.scss'

const IncomeDisplay = ({title, income}: any) => {
  return (
    <div className={`${styles.incomeDisplay} backgroundDarklight`}>
      <h5 className='text'>{title}</h5>
      <p className='text'>{income}</p>
    </div>
  )
}

export default IncomeDisplay