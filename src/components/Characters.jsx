import React, {useEffect, useState} from 'react';
import API from '../utils/API';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.get('character');
        return setCharacters(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(characters);

  return (
    <div className='characters'>
      <div className='container'>
        <div className='row mt-5'>
          {characters.map(character => (
            <div className='col-3 my-3 d-flex justify-content-center align-items-center'>
              <div className='card shadow-sm' style={{width: '18rem'}}>
                <img src={character.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <p className='card-text text-center'>{character.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
