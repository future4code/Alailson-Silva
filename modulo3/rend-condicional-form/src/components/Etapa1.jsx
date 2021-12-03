import React from 'react';



function Etapa1() {
  return (
    <div>

        <h1>Etapa 1 - Dados Gerais</h1>
        <br />
        <h3>1. Qual o seu nome?</h3>
        <br />
        <input type="text" />
        <br />
        <h3>2. Qual a sua idade?</h3>
        <input type="number" />
        <br />
        <h3>3. Qual o seu email?</h3>
        <br />
        <input type="email" />
        <br />
        <h3>4. Qual a sua escolaridade?</h3>
        <br />
        <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superion incompleto</option>
            <option>Ensino superior completo</option>
        </select>
      
    </div>
  );
}

export default Etapa1;