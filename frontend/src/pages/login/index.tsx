import React, {useState} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import {useHistory} from 'react-router-dom';
import '../../assets/styles/global.css';


function Login() {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () =>{
      const login ={
        email: email,
        senha: senha
      }

      fetch('http://localhost:5000/api/Conta/login',{
        method: 'POST',
        body: JSON.stringify(login),
        headers: {'content-type' : 'application/json'}
      }).then(response => response.json())
      .then(data =>{
        if(data.token != undefined){
          localStorage.setItem('token-filmes', data.token)
          history.push('/')
        }else{
          alert("Senha ou email incorretos!")
        }
      }).catch(error => console.log(error));

  }

  return (
    <div className="App">
      <Header description="Faça o login para acessar a Coletanea" />
      <div className="centro">
        <h1>Login </h1>
          <form onSubmit = {event =>{
            event.preventDefault();
            login();
          }}>
            <Input type="email" name="email" label="Email" onChange={e => setEmail(e.target.value)}/>
            <Input type="password" name="senha" label="Senha" onChange={e => setSenha(e.target.value)}/>
                <Button value="Enviar"/>
          </form>
        
      </div>
      <Footer />
    </div>
  );
}

export default Login;