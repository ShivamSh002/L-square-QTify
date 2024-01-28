import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  const getTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbums(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title="Top Albums" type="album" />
    </div>
  );
};

export default App;
