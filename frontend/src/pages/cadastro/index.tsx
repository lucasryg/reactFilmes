import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer'
import '../../assets/styles/global.css'
import Input from '../../components/input/index';
import { Link } from 'react-router-dom';
import Button from '../../components/button/index';

function Cadastro() {
  return (
    <div className="App">
      <Header description="Faça o cadastro na Coletanea" />
      <div className="centro">
        <h1>Cadastro</h1>
      <div className="form">
          <form>
            <Input type="text" name="nome" label="Nome"></Input>
            <Input type="email" name="email" label="Email"></Input>
            <Input type="bool" name="permission" label="Permisão"></Input>
            <Input type="password" name="senha" label="Senha" ></Input>
          </form>
        </div>
          <Link to="/"><Button value="Cadastrar"></Button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro;