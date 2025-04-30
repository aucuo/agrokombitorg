import React, {useEffect} from 'react';
import './Modal.scss';

import CloseIcon from "@/assets/icons/close.svg";
import {ReactSVG} from "react-svg";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.classList.add('noscroll');
        } else {
            document.body.style.paddingRight = '';
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.style.paddingRight = '';
            document.body.classList.remove('noscroll');
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal__overlay" onClick={onClose}></div>
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>
                    <ReactSVG src={CloseIcon} className="header__close-icon reactsvg"/>
                </button>
                {title && <h2 className="modal__title">{title}</h2>}
                <div className="modal__body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;