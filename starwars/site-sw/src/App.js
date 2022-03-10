import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import {useState} from 'react';

function App() {
  const [tela, setTela] = useState('detail')

  const escolheTela = () => {
    if(tela==='detail'){
      return <CharacterDetailPage irLista={irLista}/>
    } else if(tela==='list') {
      return <CharacterListPage irDetalhe={irDetalhe}/>
    } else {
      return <p>Erro!</p>
    }
  }

      const irDetalhe = () => {
        setTela('detail')
      }

      const irLista = () => {
        setTela('list')
      }


  return (
    <div>

      <h1> Star Wars </h1>

      {escolheTela()}

    </div>
  );
}

export default App;
