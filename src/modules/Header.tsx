import "./Header.scss";
import {ReactSVG} from "react-svg";
import LogoIcon from '@/assets/icons/agro-logo.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';
import UButton from "../components/UButton.tsx";
import {useState} from "react";
import {useModal} from "../../context/ModalContext.tsx";

function Header() {
    const navItems = [
        {
            text: 'Главная',
            href: '#main'
        },
        {
            text: 'Преимущества',
            href: '#pros'
        },
        {
            text: 'О нас',
            href: '#about'
        },
        {
            text: 'Продукция',
            href: '#products'
        },
    ];

    const [show, setShow] = useState(false);
    const { openContactsModal } = useModal();

    return (
        <header className="header" id="main">
            <div className="header__wrapper container">
                <button className="burger header__burger" onClick={() => setShow(true)}>
                    <ReactSVG className="burger-icon reactsvg" src={BurgerIcon}/>
                </button>
                <ReactSVG src={LogoIcon} className="header__logo reactsvg"/>
                <button className="person header__person" onClick={openContactsModal}>
                    <ReactSVG className="person-icon reactsvg" src={PhoneIcon}/>
                </button>
                <div className={`header__menu ${show ? 'header__menu--shown' : ''}`}>
                    <nav className="header__nav nav">
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
                    <div className="header__right">
                        <div className="header__contact">
                            <small>Зам. Директора</small>
                            <div className="header__contact-phone">
                                +375 29 6971 700
                            </div>
                        </div>
                        <div className="header__contact header__contact--second">
                            <small>Снабжение</small>
                            <div className="header__contact-phone">
                                +375 29 8620 336
                            </div>
                        </div>
                        <div className="header__buttons">
                            <UButton className="header__button header__button--contact" variant="primary" onClick={openContactsModal}>
                                Связаться с нами
                            </UButton>
                        </div>
                    </div>
                    <button className="header__close" onClick={() => setShow(false)}>
                        <ReactSVG src={CloseIcon} className="header__close-icon reactsvg"/>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;