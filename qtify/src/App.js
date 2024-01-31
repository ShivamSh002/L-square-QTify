import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    generateSongsData(newValue);
  };

  const generateSongsData = (value) => {
    let key;

    if (value === 0) {
      setFilteredSongs(allSongs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    console.log(key);
    const data = allSongs.filter((item) => {
      return item.genre.key === key;
    });
    setFilteredSongs(data);
    console.log(filteredSongs);
  };

  const getTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbums(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getNewAlbums = async () => {
    try {
      const data = await fetchNewAlbums();
      console.log(data);
      setNewAlbums(data);
    } catch (err) {
      console.error(err);
    }
  };
  const getSongs = async () => {
    try {
      const data = await fetchSongs();
      console.log(data);
      setAllSongs(data);
      setFilteredSongs(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTopAlbums();
    getNewAlbums();
    getSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={topAlbums}
          title="Top Albums"
          type="album"
          filteredSongs={topAlbums}
          showText={true}
        />{" "}
        <Section
          data={newAlbums}
          title="New Albums"
          type="album"
          filteredSongs={newAlbums}
          showText={true}
        />{" "}
      </div>{" "}
      <div className={styles.songsWrapper}>
        <Section
          data={allSongs}
          title="Songs"
          type="songs"
          filteredSongs={filteredSongs}
          value={value}
          handleChange={handleChange}
          showText={false}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default App;
