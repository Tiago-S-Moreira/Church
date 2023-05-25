import Logo from '../img/logo.png';
import Carousel from './Carousel';
import './Header.css';

function Header () {
  return (
    <>
    <div className="header-nav">
    <div className='logo-header'>
      <a href=""><img src={Logo} alt="logo-church" /></a>
      </div>
      <div className="nav-link">
      <ul>
      <li><a href="#">Igreja</a></li>
      <li><a href="#">Eventos</a></li>
      <li><a href="#">Contribua</a></li>
      <li><a href="https://www.youtube.com/@IgrejaMissionariaParanavai/streams" target='_blank' rel="noreferrer">Ao vivo</a></li>
      </ul>
    </div>
    </div>
    <Carousel />
    </>
  );
}

export default Header;