import {useState, useEffect} from 'react';
import axios from 'axios';


function CharacterListPage(props) {
    const [lista, setLista] = useState([])

    const buscaPersonagens = () => {
        axios.get('https://swapi.py4e.com/api/people').then((res)=>{
            setLista(res.data)
        }).catch()
    }
        useEffect(()=>{
            buscaPersonagens()
            
        },[])

    return (
      <div>
  
      List Page

      

      <button onClick={props.irDetalhe}>Troca página</button>
      
  
      </div>
    );
  }
  
  export default CharacterListPage;
  