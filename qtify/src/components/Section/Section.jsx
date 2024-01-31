import React, { useState } from 'react'
import styles from "./Section.module.css"
import Card from '../Card/CardComp';
import { Box, CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({ data, title, type ,filteredSongs=[],toggle=false,handleChange=null,value=0,showText}) => {
  const [toggleCaoursel, setToggleCaoursel] = useState(true);

  const handleTextToggle = () => {
    setToggleCaoursel(!toggleCaoursel);
  }
  return (
    <div ><div className={styles.header}>
      <h3>{title}</h3>
      {showText && <h4 className={styles.toggleText} onClick={handleTextToggle}>
        {toggleCaoursel ? "Show All" : "Collapse"}</h4>}
      </div>
        {type==="songs"?<BasicTabs value={value} handleChange={handleChange}/>:null}
      {data.length === 0 ? (
        <Box sx ={{display:"flex",justifyContent:"center",alignItems:"center" }}> <CircularProgress /> </Box>
       
      ) : (
        !toggleCaoursel ? <div className={styles.wrapper}>
        {filteredSongs.map((data) => (
            <Card data={data} type={type} key={data.id} />
          ))}
        </div> : (<Carousel data={filteredSongs} renderComponent={(data) => <Card data={data} type={type} />} />)
      )}
    </div >
  )
}

export default Section