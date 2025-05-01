import React from 'react';
import './Socials.scss';

import {ReactSVG} from "react-svg";
import UButton from "./UButton.tsx";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import VKIcon from "@/assets/icons/vk.svg";

const Socials: React.FC = () => {
    const socials = [
        {
            icon: TiktokIcon,
            href: 'https://www.tiktok.com/@zlou300'
        },
        {
            icon: InstagramIcon,
            href: '#'
        },
        {
            icon: VKIcon,
            href: 'https://vk.com/id885072417'
        },
    ];

    return (
        <div className="socials">
            {
                socials.map((item, index) => (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
                        <UButton variant="transparent-white" size="circle" key={index}>
                            <ReactSVG className="reactsvg" src={item.icon}/>
                        </UButton>
                    </a>
                ))
            }
        </div>
    );
};

export default Socials;