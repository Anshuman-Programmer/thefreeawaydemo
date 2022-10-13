import React from 'react'
import styles from './_table.module.scss'

const Table = () => {
  return (
    <div className={`${styles.tableWrapper} backgroundDark`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className='text'>ID number</th>
            <th className='text'>Nickname</th>
            <th className='text'>Registration time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text'>12314</td>
            <td className='text'>Anshuman</td>
            <td className='text'>12-11-2022   10:30</td>
          </tr>
            <tr>
            <td className='text'>12314</td>
            <td className='text'>Raj</td>
            <td className='text'>12-11-2022   10:30</td>
          </tr>
            <tr>
            <td className='text'>12314</td>
            <td className='text'>Rajnandini</td>
            <td className='text'>12-11-2022   10:30</td>
          </tr>
            <tr>
            <td className='text'>12314</td>
            <td className='text'>Ram</td>
            <td className='text'>12-11-2022   10:30</td>
          </tr>
          <tr>
            <td className='text'>12314</td>
            <td className='text'>Ayushman</td>
            <td className='text'>12-11-2022   10:30</td>
          </tr>
          <tr>
            <td className='text'>12314</td>
            <td className='text'>Lovili</td>
            <td className='text'>12-11-2022   10:30</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.bottomWrapper}>
        <span className='text'>&#60;</span>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <span className='text'>&#62;</span>
      </div>
    </div>
  )
}

export default Table