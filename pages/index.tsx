import type { NextPage } from 'next'
import { useState } from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Sidebar from '../components/sidebar/Sidebar'
// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [colorTheme, setColorTheme] = useState(false)
  return (
    <div className={`app ${colorTheme && "dark"}`}>
      <Sidebar setColorTheme={setColorTheme}/>
      <Dashboard/>
    </div>
  )
}

export default Home
