import React, {useEffect, useState} from 'react';
import API from '../utils/API';

export default function useCharacters(url) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.get(url);
        return setCharacters(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);
  return characters;
}
