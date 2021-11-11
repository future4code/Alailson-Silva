import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/imagem-perfil.png'
import styled from 'styled-components';

const pequeno = styled.div`

`

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaFoto}
          nome="Astrodev" 
          descricao="Oi, eu sou o Alailson. Sou um aluno da Labenu. Adoro as dinâmicas na sexta-feira e 
          o fato de que neste dia largamos mais cedo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/666/premium/666162.png?token=exp=1636666137~hmac=c28c2ff6c8815605f681d035de545d85" 
        texto="Email: aluno@labenu.com" 
        
        />

      <CardPequeno
              imagem="https://cdn-icons-png.flaticon.com/512/25/25694.png" 
              texto="Endereço: Rua React" 
              
              />

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://iconape.com/wp-content/png_logo_vector/nasa-logo.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
