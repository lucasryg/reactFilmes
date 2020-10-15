import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer'
import '../../assets/styles/global.css';
import Theater from '../../assets/images/theater.png';
import Cinema from '../../assets/images/cinema.png';

function Home() {
  return (
    <div>
        <Header description="Conheça nossa Coletânea"/>
        <div className="centro">
          <div className="home">
              <br/>
              <br/>
              <h1>Monte sua coletânea de filmes...</h1>
              <br/>
              <br/>
              <br/>
              
              <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h3>
              <br/>
              <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                <br/>exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                <br/>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.  </p>
                <br/>
                <br/>
                <br/>
              <div className="container">
                <div className="filmes">
                  <img src={Cinema} alt="fita cacete" width="100px" height="100px" />
                  <br/>
                  <br/>
                  <h3>Filmes</h3>
                  <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do 
                    <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    <br/>laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea
                    <br/> commodo consequat. </p>
                </div>

                <div className="categoria">
                  <img src={Theater} alt="carinhas do teatro la" width="100px" height="100px"/>
                  <br/>
                  <br/>
                  <h3>Categorias</h3>
                  <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do 
                    <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    <br/>laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea
                    <br/> commodo consequat. </p>
                </div>

              </div>
              
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </div>
  );
}

export default Home;
