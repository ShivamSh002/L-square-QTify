import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"
import Button from '../Button/Button'
import Searchbox from '../Searchbox/Searchbox'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Searchbox placeholder="Search a album of your choice"/>
        <Button text="Give Feedback"/>
    </nav>
  )
}

export default Navbar