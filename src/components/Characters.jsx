import React, {
  useEffect,
  useReducer,
  useState,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import API from '../utils/API';
import star_empty from '../static/images/estrella.svg';
import star from '../static/images/estrella (2).svg';
import Search from './Search';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState('');

  // Without useRef Hook
  // const handleSearch = e => {
  //   setSearch(e.target.value);
  // };

  // useRef Hook
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const searchInput = useRef(null);

  // useCallback Hook
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // Without useMemo Hook
  // const filteredCharacters = characters.filter(character => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // });

  // useMemo Hook
  const filteredCharacters = useMemo(
    () =>
      characters.filter(character => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite});
    document.getElementById(`${favorite.id}`).setAttribute('src', star);
  };

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

  return (
    <div className='characters'>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className='container'>
        <div className='row mt-3'>
          {filteredCharacters.map(character => (
            <div className='col-3 my-3 d-flex justify-content-center align-items-center'>
              <div className='card shadow-sm' style={{width: '18rem'}}>
                <img src={character.image} className='card-img-top' alt='...' />
                <div className='card-body d-flex justify-content-center align-items-center'>
                  <span
                    className='card-text text-center'
                    style={{fontSize: 17}}
                  >
                    {character.name}
                  </span>
                  <a href type='button' onClick={() => handleClick(character)}>
                    <img
                      className='img-fluid ml-2 mb-1'
                      width='20'
                      height="'20"
                      src={star_empty}
                      alt=''
                      style={{cursor: 'pointer'}}
                      id={character.id}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
