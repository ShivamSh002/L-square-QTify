import React, { useState } from 'react'
import styles from "./Section.module.css"
import Card from '../Card/CardComp';

const Section = ({data,title,type}) => {
    const[toggleCaoursel,setToggleCaoursel] = useState(false);

    const handleToggle = ()=>{
        setToggleCaoursel(!toggleCaoursel);
    }
  return (
    <div ><div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText}>
           Collapse</h4></div>
           <div className={styles.wrapper} > 
            {data.map((topAlbums) => (
        <Card data={topAlbums} type="album" key={topAlbums.id} />
      ))}
      </div>
          
           </div>
  )
}

export default Section