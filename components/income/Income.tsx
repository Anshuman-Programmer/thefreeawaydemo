import React from 'react'
import IncomeDisplay from './incomeDisplay/IncomeDisplay'
import styles from './_income.module.scss'

const Income = () => {
  return (
    <div className={`${styles.income} backgroundDark`}>
        <div className={styles.incomeWrapper}>
            <IncomeDisplay title="Total Incomes" income="917.895"/>
            <IncomeDisplay title="Resudial Incomes" income="917.895"/>
        </div>
        <button className={styles.button}>Receive</button>
    </div>
  )
}

export default Income