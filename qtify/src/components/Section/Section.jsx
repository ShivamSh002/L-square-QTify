import React, { useState } from 'react'
import styles from "./Section.module.css"
import Card from '../Card/CardComp';
import { CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';

const Section = ({ data, title, type }) => {
  const [toggleCaoursel, setToggleCaoursel] = useState(true);

  const handleToggle = () => {
    setToggleCaoursel(!toggleCaoursel);
  }
  return (
    <div ><div className={styles.header}>
      <h3>{title}</h3>
      <h4 className={styles.toggleText} onClick={handleToggle}>
        {toggleCaoursel ? "Show All" : "Collapse"}</h4></div>
      
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        !toggleCaoursel ? <div className={styles.wrapper}>
        {data.map((data) => (
            <Card data={data} type="album" key={data.id} />
          ))}
        </div> : (<Carousel data={data} renderComponent={(data) => <Card data={data} type={type} />} />)
      )}
    </div >
  )
}

export default Section