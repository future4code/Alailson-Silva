import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends React.Component {
  render() {

    // state = {
    //   etapa: 1,
    // }

    // renderizaEtapa = () => {
    //   switch (this.state.evento) {
    //     case 1: 
    //       return <Etapa1 />;
    //     case 2: 
    //       return <Etapa2 />;
    //     }
    //   }

    return (
      <div>
        <Etapa1 />
        <Etapa2 />
        <Etapa3 />
        <Final />

        {/* {this.renderizaEtapa()} */}
        <button>Próxima etapa</button>

        

      </div>
    );
  }
}

  export default App;
