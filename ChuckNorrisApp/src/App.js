import { useEffect, useState} from 'react';
import Citate from './Citate';
import './App.css';

export function App() {
  const [categoriesList, setCategoriesList] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');

  useEffect (() =>{
     const fetchDataCategories = async () => {
      const data = await fetch(`https://api.chucknorris.io/jokes/categories`);
      const json = await data.json();
      setCategoriesList(json);
      }
      fetchDataCategories()
      .catch(console.error);
  }, [selectedCategorie])

  const handleSelectedCategorie = (e) => {
    let selected =  e.target.textContent;
    setSelectedCategorie(selected);
  }
     
  return (
    <div className='App'>
      <header>
        <img src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' alt=''/>
        <p>Chuck Norris</p>
      </header>
      <main className='container'>
          <div className='title'>Categories</div>
          <div className='categories' >
            {!!categoriesList && (categoriesList.map(el => 
              <button className={el === selectedCategorie ? 'buttonActive categoriesBox' : 'categoriesBox'} 
                      onClick={handleSelectedCategorie}
                      key={el}>
              {el}
              </button>))}
          </div>
          <Citate selectedCategorie={selectedCategorie}/>
      </main>
    </div>
  );
}

export default App;
