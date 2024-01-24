import React from 'react'
import LogoImg from "../../assets/LogoImg.png"
import style from "./Logo.module.css"

const Logo = () => {
  return (
    <img className={style.logo} src={LogoImg} alt="logo" width={67} />
  )
}

export default Logo