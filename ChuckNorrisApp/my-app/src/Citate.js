
import { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import photo from '../src/photoChuckNorris.png';
import './App.css';

export function Citate (props) {
    const {selectedCategorie} = props;
    const   [citate, setCitate] = useState('');

    useEffect (() =>{
        if (selectedCategorie !== '') {
            const fetchDataCitate = async () => {
                const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategorie}`);
                const json = await data.json();
                setCitate(json.value); 
            }
            fetchDataCitate()
            .catch(console.error);
        } else return;
    }, [selectedCategorie]);

  return (
        <div className='citate'>
            <img src={photo} alt=''/>
            <div className='citateText'>{citate}</div>
        </div>
  );
}

export default Citate;

Citate.propTypes = {
    selectedCategorie: PropTypes.string,
};

Citate.defaultProps = {
};
  
