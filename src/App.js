import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeContext.Provider value='gray'>
        <Header />
        <Characters />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
