import React from 'react'
import styles from './_refferal.module.scss'


const Refferal = () => {
  return (
    <div className={`${styles.refferal} backgroundDark`}>
        <h4 className='text'>Refferal System:</h4>
        <p className='text'>Earn 10% for direact Refferal and 5% for indireact Refferal</p>
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
        <img className={styles.image} src="https://ouch-cdn2.icons8.com/KbFaioMDLAFQADTQMG6Ty2ZcXBX3i9pTAmuu7KwbvgM/rs:fit:512:512/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDgv/YTBkN2RjMDItNzZl/Mi00YzBiLWJkYTYt/NWFkYWE2ODNhZmJj/LnBuZw.png" alt=""/>
        </div>
    </div>
  )
}

export default Refferal