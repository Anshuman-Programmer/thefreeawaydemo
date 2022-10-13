import React from 'react'
import styles from './_dashboardHeader.module.scss'

const DashboardHeader = () => {
  return (
    <div className={styles.dashboardHeader}>
        <div className={styles.dashboardHeaderWrapper}>
            <input type={"text"} className={"backgroundDarklight"}/>
            <div className={styles.iconWrapper}>
                <img height={"20px"} src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
            </div>
            <img className={styles.avater} src="https://img.freepik.com/premium-vector/initial-cm-gaming-logo_460336-133.jpg?w=2000" alt="icon"/>
        </div>
    </div>
  )
}

export default DashboardHeader