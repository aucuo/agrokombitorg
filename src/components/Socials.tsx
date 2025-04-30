import React from 'react';
import './Socials.scss';

import {ReactSVG} from "react-svg";
import UButton from "./UButton.tsx";
import XTwitterIcon from "@/assets/icons/x-twitter.svg";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";
import VKIcon from "@/assets/icons/vk.svg";
import TelegramIcon from "@/assets/icons/telegram.svg";

const Socials: React.FC = () => {
    const socials = [
        {
            icon: XTwitterIcon,
            href: '#'
        },
        {
            icon: WhatsappIcon,
            href: '#'
        },
        {
            icon: VKIcon,
            href: '#'
        },
        {
            icon: TelegramIcon,
            href: '#'
        },
    ];

    return (
        <div className="socials">
            {
                socials.map((item, index) => (
                    <UButton variant="transparent-white" size="circle" key={index}>
                        <ReactSVG className="reactsvg" src={item.icon}/>
                    </UButton>
                ))
            }
        </div>
    );
};

export default Socials;