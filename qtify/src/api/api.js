import axios from "axios";

export const Backend_Endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${Backend_Endpoint}/albums/top`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${Backend_Endpoint}/albums/new`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${Backend_Endpoint}/songs`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
