import './Footer.css';
import icon1 from '../svg/correspondencia.png';
import icon2 from '../svg/telefone.png';
import icon3 from '../svg/localizacao.png';
import icon4 from '../svg/facebook.png';
import icon5 from '../svg/instagram.png';
import icon6 from '../svg/youtube.png';

function Footer() {
  return (
    <div className="footer">
        <div className="equip">
            <h4>Equipe Pastoral</h4>
            <li><h4>Cristiano Trindade</h4></li>
            <li><img src={icon1} alt="email" /><a href="mailto:"> cristrindade@gmail.com</a></li>
            <li><h4>David Ribeiro</h4></li>
            <li><img src={icon1} alt="email" /><a href="mailto:"> davidandrade@hotmail.com</a></li>
        </div>
        <div className="contact">
            <h4><img src={icon2} alt="tel" /> Telefone:</h4>
            <li>(44) 3423-2491</li>
            <li><h4><img src={icon1} alt="email" /> Email:</h4></li>
            <li><a href="mailto:igrejamissionariaparanavai@gmail.com">igrejamissionariaparanavai@gmail.com</a></li>
        </div>
        <div className="address">
            <h4><img src={icon3} alt="local-dot" />Endereço:</h4>
            <a href="https://goo.gl/maps/R93ELEy2vpM6Xx677" target='_blank' rel="noreferrer">Av. Parigot de Souza, nº 2946. Jd. Ibirapuera</a>
        </div>
        <div className="social">
            <h4>Siga-nos</h4>
            <li><a href="https://www.facebook.com/igrejamissionariadeparanavai/?locale=pt_BR" target='_blank' rel="noreferrer"><img src={icon4} alt="social-f" /></a></li>
            <li><a href="https://www.instagram.com/igrejamissionariaparanavai/" target='_blank' rel="noreferrer"><img src={icon5} alt="social-i" /></a></li>
            <li><a href="https://www.youtube.com/@IgrejaMissionariaParanavai/featured" target='_blank' rel="noreferrer"><img src={icon6} alt="social-y" /></a></li>
        </div>
    </div>
  );
}

export default Footer;