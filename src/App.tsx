import Header from "./modules/Header.tsx";
import './App.scss';
import UButton from "./components/UButton.tsx";
import {ReactSVG} from "react-svg";
import BagIcon from '@/assets/icons/bag.svg';
import ListIcon from '@/assets/icons/list.svg';
import PeopleIcon from '@/assets/icons/people.svg';
import StarIcon from '@/assets/icons/star.svg';
import NoIntermediariesIcon from '@/assets/icons/no-intermediaries.svg';
import ProsBannerImage from '@/assets/images/pros-banner.png';
import ProsBannerMobileImage from '@/assets/images/pros-banner-mobile.jpg';

import AboutBanner from '@/assets/images/about-banner.jpg';

import HandshakeIllustration from '@/assets/icons/illustrations/handshake.svg';
import WorkerIllustration from '@/assets/icons/illustrations/worker.svg';
import ComfortableAppIllustration from '@/assets/icons/illustrations/comfortable-app.svg';
import LikeIllustration from '@/assets/icons/illustrations/like.svg';

import MobileAppBannerImage from '@/assets/images/quality-banner.jpg';
import MobileAppBannerMobileImage from '@/assets/images/quality-banner-mobile.jpg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';

import CtaBannerImage from '@/assets/images/cta-banner.jpg';
import CtaBannerMobileImage from '@/assets/images/cta-banner-mobile.jpg';
import Footer from "./modules/Footer.tsx";
import ProductCard from "./components/ProductCard.tsx";

// PRODUCTS
import ProductImage from "@/assets/products/product-1.jpg";
import {useState} from "react";
import {useModal} from "../context/ModalContext.tsx";


function App() {
    const prosCells = [
        {
            icon: BagIcon,
            title: 'Комплексный подход',
            text: 'поддержка опытных специалистов',
        },
        {
            icon: StarIcon,
            title: 'Качество',
            text: 'мировые стандарты качества',
        },
        {
            icon: ListIcon,
            title: 'Научная база',
            text: 'научный подход к кормлению',
        },
        {
            icon: NoIntermediariesIcon,
            title: 'Доступный формат',
            text: 'удобное дозировка препаратов',
        },
        {
            icon: PeopleIcon,
            title: 'Эффективность',
            text: 'Честные цены, реальный результат',
        },
    ];

    const reasonsItems = [
        {
            icon: HandshakeIllustration,
            title: 'Надежность и прозрачность',
        },
        {
            icon: WorkerIllustration,
            title: 'Поддержка\n специалистов',
        },
        {
            icon: ComfortableAppIllustration,
            title: 'Индивидуальный\n подход',
        },
        {
            icon: LikeIllustration,
            title: 'Эффективность \n и экономия',
        },
    ];

    const productsItems = [
        {id: 1, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 2, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 3, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 4, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 5, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 6, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 7, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 8, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 9, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 10, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 11, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
        {id: 12, name: 'Комбикорм, премикс, БВМД', image: ProductImage},
    ];
    const [showAll, setShowAll] = useState(false);
    const displayedProducts = showAll
        ? productsItems
        : productsItems.slice(0, 6);

    const { openContactsModal } = useModal();

    return (
        <>
            <Header/>
            <div className="app">
                <section className="app__section section app__hero hero container">
                    <div className="hero__wrapper">
                        <div className="hero__info">
                            <h1 className="hero__title">
                                Кормовые добавки<br/>
                                для ваших животных
                            </h1>
                            <p className="hero__text">
                                Здоровье коров – качество молока
                            </p>
                        </div>
                        <div className="hero__background"></div>
                    </div>
                </section>
                <section className="app__pros pros app__section section container">
                    <div className="pros__wrapper">
                        <div className="pros__col">
                            <div className="pros__info">
                                <h2 className="section__title">
                                    <span>Преимущества</span> работы<br/>
                                    с нами
                                </h2>
                                <img className="pros__banner pros__banner--mobile" src={ProsBannerMobileImage}
                                     alt="Корова в короне"/>
                                <div className="pros__grid">
                                    {
                                        prosCells.map((cell, index) => (
                                            <div className="pros__grid-cell" key={index}>
                                                <ReactSVG className="pros__grid-icon reactsvg" src={cell.icon}/>
                                                <div className="pros__grid-info">
                                                    <div className="pros__grid-title">
                                                        {
                                                            cell.title
                                                        }
                                                    </div>
                                                    <div className="pros__grid-text">
                                                        {
                                                            cell.text
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <UButton className="pros__button" onClick={openContactsModal}>Связаться с
                                нами</UButton>
                        </div>
                        <img className="pros__banner pros__banner--medium" src={ProsBannerMobileImage}
                             alt="Корова в короне"/>
                        <img className="pros__banner" src={ProsBannerImage} alt="Корова в короне"/>
                    </div>
                </section>
                <section className="app__about about section container">
                    <div className="about__wrapper">
                        <img className="about__image" src={AboutBanner} alt="Комбикорм Агрокомбиторг"/>
                        <div className="about__text">
                            <h2 className="about__title section__title">
                                О нас
                            </h2>
                            <small>
                                С начала нашей работы в 2022 году мы приобрели репутацию надежного партнера,
                                предлагающего высококачественную продукцию по конкурентным ценам.
                                Мы внимательно следим за мировыми тенденциями развития науки о кормлении и здоровье
                                животных и внедряем современные разработки для достижения более высоких результатов
                                нашими клиентами.
                                Являясь одним из крупнейших производителей в Республике Беларусь всех премиксов,
                                витаминно-минеральных смесей и концентратов, мы всегда можем предложить нашу
                                продукцию в
                                кратчайшие сроки по самой выгодной цене.
                                Мы будем рады поделиться своими знаниями и оптимизировать Ваше производство.
                            </small>
                        </div>
                    </div>
                </section>
                <section className="app__reasons reasons section container">
                    <div className="reasons__wrapper">
                        <h2 className="reasons__title section__title">
                            Почему нас выбирают
                        </h2>
                        <div className="reasons__list">
                            {
                                reasonsItems.map((item, index) => (
                                    <div className="reasons__list-item" key={index}>
                                        <ReactSVG className="reasons__illustration" src={item.icon}/>
                                        <div className="reasons__list-title">
                                            {item.title}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="app__quality quality section container">
                    <div className="quality__wrapper">
                        <div className="quality__banner">
                            <div className="quality__banner-info">
                                <h3 className="section__title">
                                    Только <span data-line="2">качественная</span><br/>
                                    продукция
                                </h3>
                                <small className="quality__banner-text">
                                    Наша продукция соответствует международным<br/>
                                    стандартам
                                </small>
                            </div>
                            <img className="quality__banner-image" src={MobileAppBannerImage}
                                 alt="Изображение комбикорма на абстрактом фоне"/>
                            <img className="quality__banner-image quality__banner-image--mobile"
                                 src={MobileAppBannerMobileImage}
                                 alt="Изображение комбикорма на абстрактом фоне"/>
                        </div>
                    </div>
                    <div className="quality__col">
                        <div className="quality__pros">
                            <ReactSVG className="quality__pros-icon reactsvg" src={CheckCircleIcon}/>
                            <p className="quality__pros-text">
                                Изготовление по
                                <b>вашей рецептуре</b>
                            </p>
                        </div>
                        <div className="quality__pros">
                            <ReactSVG className="quality__pros-icon reactsvg" src={CheckCircleIcon}/>
                            <p className="quality__pros-text">
                                Только <b>качественное</b> сырьё
                            </p>
                        </div>
                        <div className="quality__pros">
                            <ReactSVG className="quality__pros-icon reactsvg" src={CheckCircleIcon}/>
                            <p className="quality__pros-text">
                                <b>Доставим</b> до
                                вашего склада
                            </p>
                        </div>
                        <div className="quality__pros">
                            <ReactSVG className="quality__pros-icon reactsvg" src={CheckCircleIcon}/>
                            <p className="quality__pros-text">
                                <b>Научное сопровождение</b> дипломированными специалистами
                            </p>
                        </div>
                    </div>
                </section>
                <section className="app__products products section container">
                    <div className="products__wrapper">
                        <div className="products__grid">
                            {displayedProducts.map((item) => (
                                <ProductCard
                                    className="products__item"
                                    key={item.id || item.name}
                                    name={item.name}
                                    img={item.image}
                                />
                            ))}
                        </div>
                        {productsItems.length > 6 && (
                            <UButton
                                className="products__button"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? 'Скрыть продукцию' : 'Показать всю продукцию'}
                            </UButton>
                        )}
                    </div>
                </section>
                <section className="app__cta cta section">
                    <div className="cta__banner">
                        <div className="cta__banner-info">
                            <h3 className="cta__banner-title section__title">
                                Остались вопросы?
                            </h3>
                            <p className="cta__banner-text">
                                Свяжитесь с нами прямо сейчас
                            </p>
                            <UButton variant="white" className="cta__banner-button" onClick={openContactsModal}>
                                Связаться с нами
                            </UButton>
                        </div>
                        <img className="cta__banner-image" src={CtaBannerImage} alt="Абстрактый фон"/>
                        <img className="cta__banner-image cta__banner-image--mobile" src={CtaBannerMobileImage}
                             alt="Абстрактый фон"/>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default App;