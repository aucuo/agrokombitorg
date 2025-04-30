import React, { createContext, useState, useContext, ReactNode } from 'react';
import Modal from "../src/components/Modal.tsx";
import Socials from "../src/components/Socials.tsx";

// Типы контента модалки
type ModalContentType = 'contacts' | 'callback' | 'custom';

// Пользовательский контент
type ModalContent = {
    title?: string;
    content?: ReactNode;
};

// Состояние модального окна
type ModalState = {
    isOpen: boolean;
    type: ModalContentType | null;
    title?: string;
    content?: ReactNode;
};

type ModalContextType = {
    openContactsModal: () => void;
    openCustomModal: (content: ModalContent) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        type: null,
    });

    const openContactsModal = () => {
        setModal({
            isOpen: true,
            type: 'contacts',
            title: 'Контакты',
            content: (
                <>
                    <div className="modal__contact">
                        <small>Зам. Директора</small>
                        <div className="modal__contact-phone">+375 29 6971 700</div>
                    </div>
                    <div className="modal__contact">
                        <small>Снабжение</small>
                        <div className="modal__contact-phone">+375 29 8620 336</div>
                    </div>
                    <div className="modal__socials">
                         <Socials />
                    </div>
                </>
            ),
        });
    };

    const openCustomModal = ({ title, content }: ModalContent) => {
        setModal({
            isOpen: true,
            type: 'custom',
            title,
            content,
        });
    };

    const closeModal = () => {
        setModal((prev) => ({
            ...prev,
            isOpen: false,
        }));
    };

    return (
        <ModalContext.Provider
            value={{
                openContactsModal,
                openCustomModal,
                closeModal,
            }}
        >
            {children}
            <Modal
                isOpen={modal.isOpen}
                onClose={closeModal}
                title={modal.title}
            >
                {modal.content}
            </Modal>
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within a ModalProvider');
    return context;
};