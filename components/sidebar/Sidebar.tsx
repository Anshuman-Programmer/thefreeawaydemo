import React from 'react'
import styles from "./_sidebar.module.scss"

const Sidebar = ({setColorTheme}: any) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <h2 className={`${styles.logo} text`}>LOGO</h2>
      </div>
      <hr className={styles.divider}/>
      <div className={styles.linksWrapper}>
        <div className={styles.linkWrapper}>
          <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
          <p className='text'>DashBoard</p>
        </div>
        <div className={`${styles.linkWrapper} ${styles.active} curves`}>
          <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
          <p className='text'>DashBoard</p>
        </div>
        <div className={styles.linkWrapper}>
          <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
          <p className='text'>DashBoard</p>
        </div>
        <div className={styles.linkWrapper}>
          <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
          <p className='text'>DashBoard</p>
        </div>
        <div className={styles.linkWrapper}>
          <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
          <p className='text'>DashBoard</p>
        </div>
      </div>
      <hr className={styles.divider}/>
      <div className={styles.linksWrapper}>
        <div className={styles.linkWrapper}>
          <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="icon"/>
          <p className='text'>Logout</p>
        </div>
      </div>
      <div className={styles.flex}>
      <div className={styles.themeChanger1} onClick={() => setColorTheme(true)}></div>
      <div className={styles.themeChanger2} onClick={() => setColorTheme(false)}></div>
      </div>
    </div>
  )
}

export default Sidebar