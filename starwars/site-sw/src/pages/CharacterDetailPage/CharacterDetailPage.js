import {useState, useEffect} from 'react';
import axios from 'axios';

function CharacterDetailPage(props) {
    const [detalhe, setDetalhe] = useState([])

    const buscaDetalhes = () => {
        axios.get('https://swapi.py4e.com/api/people').then((res)=>{
            setDetalhe(res.data)
        }).catch()
    }
        useEffect(()=>{
            buscaDetalhes()
            
        },[])

    return (
      <div>
  
      Detail Page

      <button onClick={props.irLista}>Troca página</button>
  
      </div>
    );
  }
  
  export default CharacterDetailPage;
  