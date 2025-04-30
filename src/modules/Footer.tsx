import "./Footer.scss";
import {ReactSVG} from "react-svg";
import LogoWhiteIcon from '@/assets/icons/agro-logo-white.svg';
import Socials from "../components/Socials.tsx";


function Footer() {
    const navItems = [
        {
            text: 'Главная',
            href: '#'
        },
        {
            text: 'Преимущества',
            href: '#'
        },
        {
            text: 'О нас',
            href: '#'
        },
        {
            text: 'Продукция',
            href: '#'
        },
    ];
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <ReactSVG className="footer__logo reactsvg" src={LogoWhiteIcon}/>
                <div className="footer__row">
                    <nav className="footer__nav nav">
                        <ul className="nav__list">
                            {
                                navItems.map((item, index) => (
                                    <li className="nav__list-item" key={index}>
                                        <a href={item.href} className="nav__list-link">
                                            {item.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Socials/>
                </div>
            </div>
            <div className="footer__rights">
                <div className="footer__rights-wrapper container">
                    <small>
                        © {new Date().getFullYear()} Агрокомбиторг. Производитель кормовых добавок. Все права защищены
                    </small>
                    <div className="aucuo">
                        Сайт разработан <a href="https://t.me/aucuo" target="_blank"><strong>aucuo</strong></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;