
import React from 'react'
import DashboardHeader from '../dashboardHeader/DashboardHeader'
import Income from '../income/Income'
import Refferal from '../refferal/Refferal'
import Table from '../table/Table'
import styles from './_dashboard.module.scss'

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
        <div className={`${styles.dashboardWrapper} backgroundDarker`}>
            <DashboardHeader/>
            <h2 className={`${styles.heading} text`}>My Team</h2>
            <div className={styles.topWrapper}>
                <Income/>
                <Refferal/>
            </div>
            <Table/>
        </div>
    </section>
  )
}

export default Dashboard