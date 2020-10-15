import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import '../../assets/styles/global.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  description: string;
  text?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="principal">
      <div className="header">
        <nav>
          <div>
            <Link to="/"><img src={logo} alt="o logo da coletânea" /></Link>
            <h1>{props.description}</h1>
            {props.text && <p>{props.text}</p>}
          </div>
          <div id="buttonsNav">
            <Link to="/"><p>Home</p></Link>
            <Link to="/login"><p>Login</p></Link>
            <Link to="/cadastro"><p>Cadastro</p></Link>
          </div>

        </nav>
      </div>
    </div>
  );
}

export default Header;
